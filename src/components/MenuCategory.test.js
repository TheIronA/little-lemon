import { render, screen, fireEvent } from '@testing-library/react';
import MenuCategory from './MenuCategory';

describe('MenuCategory Component', () => {
  const categories = [
    'All',
    'Starters',
    'Main Courses',
    'Desserts',
    'Drinks'
  ];
  
  const mockOnSelect = jest.fn();
  
  beforeEach(() => {
    // Reset mock before each test
    mockOnSelect.mockClear();
    
    render(
      <MenuCategory 
        categories={categories} 
        selectedCategory="All" 
        onSelectCategory={mockOnSelect}
      />
    );
  });
  
  test('renders all category options', () => {
    categories.forEach(category => {
      const categoryElement = screen.getByText(category);
      expect(categoryElement).toBeInTheDocument();
    });
  });
  
  test('highlights the selected category', () => {
    const selectedCategory = screen.getByText('All');
    expect(selectedCategory).toHaveClass('active'); // Assuming 'active' is the class for selected category
  });
  
  test('calls onSelectCategory when a category is clicked', () => {
    // Click on a different category
    const dessertCategory = screen.getByText('Desserts');
    fireEvent.click(dessertCategory);
    
    expect(mockOnSelect).toHaveBeenCalledTimes(1);
    expect(mockOnSelect).toHaveBeenCalledWith('Desserts');
  });
  
  test('has appropriate navigation role for accessibility', () => {
    const navigation = screen.getByRole('navigation');
    expect(navigation).toBeInTheDocument();
  });
  
  test('categories are focusable for keyboard navigation', () => {
    const categoryElements = screen.getAllByRole('button');
    
    // Each category should be focusable
    categoryElements.forEach(category => {
      expect(category).toHaveAttribute('tabIndex', '0');
    });
  });
  
  test('handles keyboard selection', () => {
    const mainCourseCategory = screen.getByText('Main Courses');
    
    // Press Enter to select
    fireEvent.keyDown(mainCourseCategory, { key: 'Enter' });
    expect(mockOnSelect).toHaveBeenCalledWith('Main Courses');
    
    // Press Space to select
    fireEvent.keyDown(mainCourseCategory, { key: ' ' });
    expect(mockOnSelect).toHaveBeenCalledWith('Main Courses');
  });
}); 