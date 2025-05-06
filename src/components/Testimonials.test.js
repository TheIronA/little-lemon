import { render, screen } from '@testing-library/react';
import Testimonials from './Testimonials';

describe('Testimonials Component', () => {
  beforeEach(() => {
    render(<Testimonials />);
  });
  
  test('renders testimonials section with heading', () => {
    const headingElement = screen.getByRole('heading', { name: /testimonials/i });
    expect(headingElement).toBeInTheDocument();
  });
  
  test('displays multiple testimonial cards', () => {
    const testimonialCards = screen.getAllByTestId('testimonial-card');
    
    // We should have multiple testimonials
    expect(testimonialCards.length).toBeGreaterThan(1);
  });
  
  test('each testimonial has rating stars', () => {
    const testimonialCards = screen.getAllByTestId('testimonial-card');
    
    // Each card should have rating stars
    testimonialCards.forEach(card => {
      const ratingElement = card.querySelector('.rating');
      expect(ratingElement).toBeInTheDocument();
    });
  });
  
  test('each testimonial displays customer avatar', () => {
    const testimonialCards = screen.getAllByTestId('testimonial-card');
    
    // Each card should have an avatar image
    testimonialCards.forEach(card => {
      const avatarElement = card.querySelector('.customer-avatar img');
      expect(avatarElement).toBeInTheDocument();
      expect(avatarElement).toHaveAttribute('src');
      expect(avatarElement).toHaveAttribute('alt');
    });
  });
  
  test('each testimonial shows review text and customer name', () => {
    const testimonialCards = screen.getAllByTestId('testimonial-card');
    
    // Each card should have review text and customer name
    testimonialCards.forEach(card => {
      const reviewText = card.querySelector('p:not(.customer-name)');
      const customerName = card.querySelector('.customer-name');
      
      expect(reviewText).toBeInTheDocument();
      expect(customerName).toBeInTheDocument();
    });
  });
  
  test('testimonials have appropriate background and styling', () => {
    const testimonialSection = screen.getByTestId('testimonials-section');
    
    // The section should have the dark background color style
    // This is checking the CSS class application
    expect(testimonialSection).toHaveClass('testimonials-section');
  });
}); 