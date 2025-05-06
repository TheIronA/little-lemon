import { 
  filterMenuItems, 
  formatPrice,
  sortMenuItems,
  getSpecials
} from './menuUtils';

describe('Menu Utility Functions', () => {
  // Mock menu items for testing
  const mockMenuItems = [
    { id: 1, name: 'Greek Salad', price: 12.99, category: 'Starters', featured: true },
    { id: 2, name: 'Bruschetta', price: 8.99, category: 'Starters', featured: true },
    { id: 3, name: 'Grilled Fish', price: 24.99, category: 'Main Courses', featured: false },
    { id: 4, name: 'Lemon Dessert', price: 6.99, category: 'Desserts', featured: true },
    { id: 5, name: 'Pasta Carbonara', price: 16.99, category: 'Main Courses', featured: false }
  ];
  
  describe('filterMenuItems', () => {
    test('returns all items when category is "All"', () => {
      const result = filterMenuItems(mockMenuItems, 'All');
      expect(result).toHaveLength(5);
      expect(result).toEqual(mockMenuItems);
    });
    
    test('filters items by category', () => {
      const starters = filterMenuItems(mockMenuItems, 'Starters');
      expect(starters).toHaveLength(2);
      expect(starters[0].name).toBe('Greek Salad');
      expect(starters[1].name).toBe('Bruschetta');
      
      const mainCourses = filterMenuItems(mockMenuItems, 'Main Courses');
      expect(mainCourses).toHaveLength(2);
      expect(mainCourses[0].name).toBe('Grilled Fish');
      expect(mainCourses[1].name).toBe('Pasta Carbonara');
      
      const desserts = filterMenuItems(mockMenuItems, 'Desserts');
      expect(desserts).toHaveLength(1);
      expect(desserts[0].name).toBe('Lemon Dessert');
    });
    
    test('returns empty array for non-existent category', () => {
      const result = filterMenuItems(mockMenuItems, 'Drinks');
      expect(result).toHaveLength(0);
    });
    
    test('handles case when items array is empty', () => {
      const result = filterMenuItems([], 'Starters');
      expect(result).toHaveLength(0);
    });
  });
  
  describe('formatPrice', () => {
    test('formats price with dollar sign and 2 decimal places', () => {
      expect(formatPrice(12.99)).toBe('$12.99');
      expect(formatPrice(8)).toBe('$8.00');
      expect(formatPrice(0)).toBe('$0.00');
    });
    
    test('handles string inputs', () => {
      expect(formatPrice('12.99')).toBe('$12.99');
      expect(formatPrice('8')).toBe('$8.00');
    });
    
    test('returns empty string for invalid inputs', () => {
      expect(formatPrice(null)).toBe('');
      expect(formatPrice(undefined)).toBe('');
      expect(formatPrice('abc')).toBe('');
    });
  });
  
  describe('sortMenuItems', () => {
    test('sorts items by name in ascending order', () => {
      const sorted = sortMenuItems(mockMenuItems, 'name', 'asc');
      expect(sorted[0].name).toBe('Bruschetta');
      expect(sorted[4].name).toBe('Pasta Carbonara');
    });
    
    test('sorts items by price in descending order', () => {
      const sorted = sortMenuItems(mockMenuItems, 'price', 'desc');
      expect(sorted[0].price).toBe(24.99); // Grilled Fish
      expect(sorted[4].price).toBe(6.99);  // Lemon Dessert
    });
    
    test('handles invalid sort criteria', () => {
      // Should return original array unchanged
      const sorted = sortMenuItems(mockMenuItems, 'nonexistent', 'asc');
      expect(sorted).toEqual(mockMenuItems);
    });
  });
  
  describe('getSpecials', () => {
    test('returns only featured items', () => {
      const specials = getSpecials(mockMenuItems);
      expect(specials).toHaveLength(3);
      
      // All returned items should have featured = true
      specials.forEach(item => {
        expect(item.featured).toBe(true);
      });
      
      // Should include these specific items
      const specialNames = specials.map(item => item.name);
      expect(specialNames).toContain('Greek Salad');
      expect(specialNames).toContain('Bruschetta');
      expect(specialNames).toContain('Lemon Dessert');
    });
    
    test('limits number of specials returned when specified', () => {
      const limitedSpecials = getSpecials(mockMenuItems, 2);
      expect(limitedSpecials).toHaveLength(2);
      expect(limitedSpecials[0].featured).toBe(true);
      expect(limitedSpecials[1].featured).toBe(true);
    });
    
    test('handles case when no featured items exist', () => {
      const noFeatured = mockMenuItems.map(item => ({ ...item, featured: false }));
      const specials = getSpecials(noFeatured);
      expect(specials).toHaveLength(0);
    });
  });
}); 