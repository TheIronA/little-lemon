import { render, screen } from '@testing-library/react';
import TestimonialCard from './TestimonialCard';

describe('TestimonialCard Component', () => {
  const mockTestimonial = {
    id: 1,
    rating: 5,
    review: 'The food was amazing! I especially loved the bruschetta.',
    name: 'Sarah Johnson',
    image: '/images/customer1.jpg'
  };
  
  beforeEach(() => {
    render(<TestimonialCard testimonial={mockTestimonial} />);
  });
  
  test('renders testimonial card with proper structure', () => {
    const card = screen.getByTestId('testimonial-card');
    expect(card).toBeInTheDocument();
    expect(card).toHaveClass('testimonial');
  });
  
  test('displays correct customer name', () => {
    const nameElement = screen.getByText('Sarah Johnson');
    expect(nameElement).toBeInTheDocument();
    expect(nameElement).toHaveClass('customer-name');
  });
  
  test('shows correct review text', () => {
    const reviewElement = screen.getByText(/The food was amazing!/i);
    expect(reviewElement).toBeInTheDocument();
  });
  
  test('displays star rating', () => {
    const ratingElement = screen.getByTestId('rating');
    expect(ratingElement).toBeInTheDocument();
    expect(ratingElement).toHaveClass('rating');
    
    // For a 5-star rating, should have 5 star symbols
    const stars = ratingElement.textContent;
    expect(stars.length).toBe(5); // Assuming each star is a character like ★
  });
  
  test('renders customer avatar image with correct src', () => {
    const avatar = screen.getByRole('img');
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveAttribute('src', '/images/customer1.jpg');
    expect(avatar).toHaveAttribute('alt', 'Sarah Johnson');
  });
  
  test('rating is proportional to the value', () => {
    // For a different rating
    const threeStarTestimonial = {
      ...mockTestimonial,
      rating: 3
    };
    
    // Re-render with 3-star rating
    const { container } = render(<TestimonialCard testimonial={threeStarTestimonial} />);
    
    // There should be 3 filled stars and 2 empty stars
    // This implementation depends on how you render stars, may need adjustment
    const filledStars = container.querySelectorAll('.star.filled');
    const emptyStars = container.querySelectorAll('.star.empty');
    
    expect(filledStars.length).toBe(3);
    expect(emptyStars.length).toBe(2);
  });
}); 