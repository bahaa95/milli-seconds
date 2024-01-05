import { TimeUnit } from '../timeUnits';
import { IMilliSeconds, ITime } from './types';

/**
 * check if the value is number
 * @param time time type (seconds, minutes, etc)
 * @param value the value for time
 * @returns void when the value is number, otherwise it will throw exception when it is not number
 */
function isNumber(time: ITime, value: number): void {
  if (value && !Number.isNaN(value)) {
    return;
  }

  throw new Error(`MilliSeconds, invalid ${time}, ${value} must be a number`);
}

const ms: IMilliSeconds = {
  seconds: (seconds): number => {
    isNumber('seconds', seconds);
    return seconds * TimeUnit.SECOND;
  },

  minutes: (minutes) => {
    isNumber('minutes', minutes);
    return minutes * TimeUnit.MINUTE;
  },

  hours: (hours) => {
    isNumber('hours', hours);
    return hours * TimeUnit.HOUR;
  },

  days: (days) => {
    isNumber('days', days);
    return days * TimeUnit.DAY;
  },

  weeks: (weeks) => {
    isNumber('weeks', weeks);
    return weeks * TimeUnit.WEEK;
  },

  months: (months) => {
    isNumber('months', months);
    return months * TimeUnit.MONTH;
  },

  years: (years) => {
    isNumber('years', years);
    return years * TimeUnit.YEAR;
  },
};

export const milliseconds = Object.freeze(ms);
