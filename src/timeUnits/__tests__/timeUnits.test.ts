import { TimeUnit } from '../timeUnits';

describe('TimeUnit', () => {
  describe('TimeUnit.SECOND', () => {
    it('should return 1 second in milliseconds', () => {
      expect(typeof TimeUnit.SECOND).toBe('number');
      expect(TimeUnit.SECOND).toBe(1000);
    });
  });

  describe('TimeUnit.MINUTE', () => {
    it('should return 1 minute in milliseconds', () => {
      expect(typeof TimeUnit.MINUTE).toBe('number');
      expect(TimeUnit.MINUTE).toBe(1000 * 60);
    });
  });

  describe('TimeUnit.HOUR', () => {
    it('should return 1 hour in milliseconds', () => {
      expect(typeof TimeUnit.HOUR).toBe('number');
      expect(TimeUnit.HOUR).toBe(1000 * 60 * 60);
    });
  });

  describe('TimeUnit.DAY', () => {
    it('should return 1 day in milliseconds', () => {
      expect(typeof TimeUnit.DAY).toBe('number');
      expect(TimeUnit.DAY).toBe(1000 * 60 * 60 * 24);
    });
  });

  describe('TimeUnit.WEEK', () => {
    it('should return 1 week in milliseconds', () => {
      expect(typeof TimeUnit.WEEK).toBe('number');
      expect(TimeUnit.WEEK).toBe(1000 * 60 * 60 * 24 * 7);
    });
  });

  describe('TimeUnit.MONTH', () => {
    it('should return 1 month in milliseconds', () => {
      expect(typeof TimeUnit.MONTH).toBe('number');
      expect(TimeUnit.MONTH).toBe(1000 * 60 * 60 * 24 * 30);
    });
  });

  describe('TimeUnit.YEAR', () => {
    it('should return 1 year in milliseconds', () => {
      expect(typeof TimeUnit.YEAR).toBe('number');
      expect(TimeUnit.YEAR).toBe(1000 * 60 * 60 * 24 * 365);
    });
  });
});
