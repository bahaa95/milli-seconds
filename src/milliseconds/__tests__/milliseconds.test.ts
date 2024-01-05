import { milliseconds } from '../milliseconds';
import { TimeUnit } from '../../timeUnits';

describe('MilliSeconds class', () => {
  describe('MilliSeconds.Seconds', () => {
    it('should return the number of milliseconds for the given seconds', () => {
      expect(milliseconds.seconds(10)).toBe(TimeUnit.SECOND * 10);
      expect(milliseconds.seconds(new Number(2) as any)).toBe(TimeUnit.SECOND * 2);
    });
    it('should throw an error when passing invalid number', () => {
      try {
        expect(milliseconds.seconds('10' as any)).toThrow();
        expect(milliseconds.seconds({} as any)).toThrow();
      } catch (error) {}
    });
  });

  describe('MilliSeconds.Minutes', () => {
    it('should return the number of milliseconds for the given minutes', () => {
      expect(milliseconds.minutes(5)).toBe(TimeUnit.MINUTE * 5);
      expect(milliseconds.minutes(1)).toBe(TimeUnit.MINUTE * 1);
    });

    it('should throw an error when passing invalid number', () => {
      try {
        expect(milliseconds.minutes('1' as any)).toThrow();
        expect(milliseconds.minutes(null as any)).toThrow();
      } catch (error) {}
    });
  });

  describe('MilliSeconds.Hours', () => {
    it('should return the number of milliseconds for the given hours', () => {
      expect(milliseconds.hours(10)).toBe(TimeUnit.HOUR * 10);
      expect(milliseconds.hours(2)).toBe(TimeUnit.HOUR * 2);
    });

    it('should throw an error when passing invalid number', () => {
      try {
        expect(milliseconds.hours('8' as any)).toThrow();
        expect(milliseconds.hours([] as any)).toThrow();
      } catch (error) {}
    });
  });

  describe('MilliSeconds.Days', () => {
    it('should return the number of milliseconds for the given days', () => {
      expect(milliseconds.days(10)).toBe(TimeUnit.DAY * 10);
      expect(milliseconds.days(2)).toBe(TimeUnit.DAY * 2);
    });

    it('should throw an error when passing invalid number', () => {
      try {
        expect(milliseconds.days(true as any)).toThrow();
        expect(milliseconds.days('test' as any)).toThrow();
      } catch (error) {}
    });
  });

  describe('MilliSeconds.Weeks', () => {
    it('should return the number of milliseconds for the given weeks', () => {
      expect(milliseconds.weeks(10)).toBe(TimeUnit.WEEK * 10);
      expect(milliseconds.weeks(2)).toBe(TimeUnit.WEEK * 2);
    });

    it('should throw an error when passing invalid number', () => {
      try {
        expect(milliseconds.weeks(undefined as any)).toThrow();
      } catch (error) {}
    });
  });

  describe('MilliSeconds.Months', () => {
    it('should return the number of milliseconds for the given months', () => {
      expect(milliseconds.months(10)).toBe(TimeUnit.MONTH * 10);
      expect(milliseconds.months(2)).toBe(TimeUnit.MONTH * 2);
    });

    it('should throw an error when passing invalid number', () => {
      try {
        expect(milliseconds.months('invalid number' as any)).toThrow();
      } catch (error) {}
    });
  });

  describe('MilliSeconds.Years', () => {
    it('should return the number of milliseconds for the given years', () => {
      expect(milliseconds.years(10)).toBe(TimeUnit.YEAR * 10);
      expect(milliseconds.years(2)).toBe(TimeUnit.YEAR * 2);
    });

    it('should throw an error when passing invalid number', () => {
      try {
        expect(milliseconds.years(false as any)).toThrow();
      } catch (error) {}
    });
  });
});
