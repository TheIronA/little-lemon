import { render, screen, fireEvent } from '@testing-library/react';
import StarRating from './StarRating';

describe('StarRating Component', () => {
  const mockOnChange = jest.fn();
  
  beforeEach(() => {
    // Reset mock before each test
    mockOnChange.mockClear();
  });
  
  test('renders 5 stars by default', () => {
    render(<StarRating category="rating" value={0} onChange={mockOnChange} />);
    
    const stars = screen.getAllByTestId(/star-rating-/);
    expect(stars).toHaveLength(5);
  });
  
  test('renders custom number of stars when specified', () => {
    render(<StarRating category="rating" value={0} onChange={mockOnChange} totalStars={10} />);
    
    const stars = screen.getAllByTestId(/star-rating-/);
    expect(stars).toHaveLength(10);
  });
  
  test('highlights stars based on value prop', () => {
    render(<StarRating category="rating" value={3} onChange={mockOnChange} />);
    
    // Stars 1-3 should be active, 4-5 should not
    const stars = screen.getAllByTestId(/star-rating-/);
    
    expect(stars[0]).toHaveClass('active');
    expect(stars[1]).toHaveClass('active');
    expect(stars[2]).toHaveClass('active');
    expect(stars[3]).not.toHaveClass('active');
    expect(stars[4]).not.toHaveClass('active');
  });
  
  test('calls onChange with correct value when star is clicked', () => {
    render(<StarRating category="rating" value={0} onChange={mockOnChange} />);
    
    const stars = screen.getAllByTestId(/star-rating-/);
    
    // Click the fourth star
    fireEvent.click(stars[3]);
    
    // onChange should be called with category="rating" and value=4
    expect(mockOnChange).toHaveBeenCalledWith('rating', 4);
  });
  
  test('handles keyboard navigation', () => {
    render(<StarRating category="rating" value={0} onChange={mockOnChange} />);
    
    const stars = screen.getAllByTestId(/star-rating-/);
    
    // Press Enter key on the third star
    fireEvent.keyDown(stars[2], { key: 'Enter' });
    
    // onChange should be called with category="rating" and value=3
    expect(mockOnChange).toHaveBeenCalledWith('rating', 3);
    
    // Press Space key on the fifth star
    fireEvent.keyDown(stars[4], { key: ' ' });
    
    // onChange should be called with category="rating" and value=5
    expect(mockOnChange).toHaveBeenCalledWith('rating', 5);
  });
  
  test('stars are accessible via keyboard focus', () => {
    render(<StarRating category="rating" value={0} onChange={mockOnChange} />);
    
    const stars = screen.getAllByTestId(/star-rating-/);
    
    // Each star should have tabIndex="0" for keyboard accessibility
    stars.forEach(star => {
      expect(star).toHaveAttribute('tabIndex', '0');
    });
  });
}); 