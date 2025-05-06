import { 
  formatDate, 
  getTodayDate, 
  getAvailableTimes, 
  isDateInPast 
} from './dateUtils';

describe('Date Utility Functions', () => {
  describe('formatDate', () => {
    test('formats date string from YYYY-MM-DD to readable format', () => {
      const dateString = '2023-05-15';
      const formattedDate = formatDate(dateString);
      
      // Exact format depends on implementation, but should include month, day, year
      expect(formattedDate).toContain('15');
      expect(formattedDate).toContain('2023');
      
      // Example: "Monday, May 15, 2023"
      const hasMonth = /january|february|march|april|may|june|july|august|september|october|november|december/i.test(formattedDate);
      expect(hasMonth).toBe(true);
    });
    
    test('returns empty string for invalid input', () => {
      expect(formatDate('')).toBe('');
      expect(formatDate(null)).toBe('');
      expect(formatDate(undefined)).toBe('');
    });
  });
  
  describe('getTodayDate', () => {
    test('returns today in YYYY-MM-DD format', () => {
      const today = getTodayDate();
      
      // Should match YYYY-MM-DD format
      expect(today).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      
      // Should be today's date
      const todayObj = new Date();
      const year = todayObj.getFullYear();
      const month = String(todayObj.getMonth() + 1).padStart(2, '0');
      const day = String(todayObj.getDate()).padStart(2, '0');
      const expectedToday = `${year}-${month}-${day}`;
      
      expect(today).toBe(expectedToday);
    });
  });
  
  describe('getAvailableTimes', () => {
    test('returns list of time slots', () => {
      const times = getAvailableTimes();
      
      // Should return an array of strings
      expect(Array.isArray(times)).toBe(true);
      expect(times.length).toBeGreaterThan(0);
      
      // Each time should be in HH:MM format
      times.forEach(time => {
        expect(time).toMatch(/^\d{1,2}:\d{2}$/);
      });
      
      // Should include common dinner times
      expect(times).toContain('18:00');
      expect(times).toContain('19:00');
    });
    
    test('filters out past times for current date', () => {
      const today = getTodayDate();
      const currentHour = new Date().getHours();
      
      // Only test if it's before 8 PM (20:00)
      if (currentHour < 20) {
        const times = getAvailableTimes(today);
        
        // Current hour and past hours should be filtered out
        const timeInCurrentHour = `${currentHour}:00`;
        expect(times).not.toContain(timeInCurrentHour);
      }
    });
  });
  
  describe('isDateInPast', () => {
    test('correctly identifies past dates', () => {
      // Yesterday
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toISOString().split('T')[0];
      
      expect(isDateInPast(yesterdayStr)).toBe(true);
    });
    
    test('correctly identifies future dates', () => {
      // Tomorrow
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const tomorrowStr = tomorrow.toISOString().split('T')[0];
      
      expect(isDateInPast(tomorrowStr)).toBe(false);
    });
    
    test('today is not considered past', () => {
      const today = getTodayDate();
      expect(isDateInPast(today)).toBe(false);
    });
  });
}); 