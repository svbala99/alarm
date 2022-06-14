/* eslint-disable prettier/prettier */
import {NativeModules} from 'react-native';
import {v4 as uuidv4} from 'uuid';

const AlarmService = NativeModules.AlarmModule;

export async function scheduleAlarm(alarm) {
  if (!(alarm instanceof Alarm)) {
    alarm = new Alarm(alarm);
  }
  try {
    await AlarmService.set(alarm.toAndroid());
    console.log('scheduling alarm: ', JSON.stringify(alarm));
  } catch (e) {
    console.log(e);
  }
}

export async function enableAlarm(uid) {
  try {
    await AlarmService.enable(uid);
  } catch (e) {
    console.log(e);
  }
}

export async function disableAlarm(uid) {
  try {
    await AlarmService.disable(uid);
  } catch (e) {
    console.log(e);
  }
}

export async function stopAlarm() {
  try {
    await AlarmService.stop();
  } catch (e) {
    console.log(e);
  }
}

export async function snoozeAlarm() {
  try {
    await AlarmService.snooze();
  } catch (e) {
    console.log(e);
  }
}

export async function removeAlarm(uid) {
  try {
    await AlarmService.remove(uid);
  } catch (e) {
    console.log(e);
  }
}

export async function updateAlarm(alarm) {
  if (!(alarm instanceof Alarm)) {
    alarm = new Alarm(alarm);
  }
  try {
    await AlarmService.update(alarm.toAndroid());
  } catch (e) {
    console.log(e);
  }
}

export async function removeAllAlarms() {
  try {
    await AlarmService.removeAll();
  } catch (e) {
    console.log(e);
  }
}

export async function getAllAlarms() {
  try {
    const alarms = await AlarmService.getAll();
    return alarms.map(a => Alarm.fromAndroid(a));
  } catch (e) {
    console.log(e);
  }
}

export async function getAlarm(uid) {
  try {
    const alarm = await AlarmService.get(uid);
    return Alarm.fromAndroid(alarm);
  } catch (e) {
    console.log(e);
  }
}

export async function getAlarmState() {
  try {
    return AlarmService.getState();
  } catch (e) {
    console.log(e);
  }
}

export default class Alarm {
  constructor(params = null) {
    this.uid = getParam(params, 'uid', uuidv4());
    this.enabled = getParam(params, 'enabled', true);
    this.title = getParam(params, 'title', 'Alarm');
    this.description = getParam(params, 'description', 'Wake up');
    this.hour = getParam(params, 'hour', new Date().getHours());
    this.minutes = getParam(params, 'minutes', new Date().getMinutes() + 1);
    this.snoozeInterval = getParam(params, 'snoozeInterval', 1);
    this.repeating = getParam(params, 'repeating', false);
    this.active = getParam(params, 'active', true);
    this.days = getParam(params, 'days', [new Date().getDay()]);
  }

  static getEmpty() {
    return new Alarm({
      title: '',
      description: '',
      hour: 0,
      minutes: 0,
      repeating: false,
      days: [],
    });
  }

  toAndroid() {
    return {
      ...this,
      days: toAndroidDays(this.days),
    };
  }

  static fromAndroid(alarm) {
    alarm.days = fromAndroidDays(alarm.days);
    return new Alarm(alarm);
  }

  getTimeString() {
    const hour = this.hour < 10 ? '0' + this.hour : this.hour;
    const minutes = this.minutes < 10 ? '0' + this.minutes : this.minutes;
    return {hour, minutes};
  }

  getTime() {
    const timeDate = new Date();
    timeDate.setMinutes(this.minutes);
    timeDate.setHours(this.hour);
    return timeDate;
  }
}

function getParam(param, key, defaultValue) {
  try {
    if (param && (param[key] !== null || param[key] !== undefined)) {
      return param[key];
    } else {
      return defaultValue;
    }
  } catch (e) {
    return defaultValue;
  }
}

export function toAndroidDays(daysArray) {
  return daysArray.map(day => (day + 1) % 7);
}

export function fromAndroidDays(daysArray) {
  return daysArray.map(d => (d === 0 ? 6 : d - 1));
}
