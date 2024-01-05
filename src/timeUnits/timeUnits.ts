export const enum TimeUnit {
  /**
   * Returns second in milliseconds
   */
  SECOND = 1000,
  /**
   * Returns minute in milliseconds
   */
  MINUTE = TimeUnit.SECOND * 60,
  /**
   * Returns hour in milliseconds
   */
  HOUR = TimeUnit.MINUTE * 60,
  /**
   * Returns day in milliseconds
   */
  DAY = TimeUnit.HOUR * 24,
  /**
   * Returns week(seven days) in milliseconds
   */
  WEEK = TimeUnit.DAY * 7,
  /**
   * Returns month(30 days) in milliseconds
   */
  MONTH = TimeUnit.DAY * 30,
  /**
   * Returns year(365) in milliseconds
   */
  YEAR = TimeUnit.DAY * 365,
}
