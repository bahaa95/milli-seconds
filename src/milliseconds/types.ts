export type ITime = 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks' | 'months' | 'years';

export interface IMilliSeconds {
  /**
   * @param {number} seconds The number of seconds.
   * @returns {number} returns the number of milliseconds for the given seconds.
   */
  seconds: (seconds: number) => number;

  /**
   * @param {number} minutes The number of minutes.
   * @returns {number} returns the number of milliseconds for the given minutes.
   */
  minutes: (minutes: number) => number;

  /**
   * @param {number} hours The number of hours.
   * @returns {number} returns the number of milliseconds for the given hours.
   */
  hours: (hours: number) => number;

  /**
   * @param {number} days The number of days.
   * @returns {number} returns the number of milliseconds for the given days.
   */
  days: (days: number) => number;

  /**
   * @param {number} weeks The number of weeks.
   * @returns {number} returns the number of milliseconds for the given weeks.
   */
  weeks: (weeks: number) => number;

  /**
   * @param {number} months The number of months.
   * @returns {number} returns the number of milliseconds for the given months.
   */
  months: (months: number) => number;

  /**
   * @param {number} years The number of years.
   * @returns {number} returns the number of milliseconds for the given years.
   */
  years: (years: number) => number;
}
