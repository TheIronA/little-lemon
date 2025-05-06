import { render, screen } from '@testing-library/react';
import About from './About';

describe('About Component', () => {
  beforeEach(() => {
    render(<About />);
  });
  
  test('renders about section with heading', () => {
    const headingElement = screen.getByRole('heading', { name: /little lemon/i });
    expect(headingElement).toBeInTheDocument();
  });
  
  test('displays Chicago subtitle', () => {
    const subtitleElement = screen.getByText(/chicago/i);
    expect(subtitleElement).toBeInTheDocument();
  });
  
  test('contains about text description', () => {
    // Look for text about the restaurant's history or description
    const aboutText = screen.getByText(/little lemon is a charming neighborhood bistro/i);
    expect(aboutText).toBeInTheDocument();
  });
  
  test('renders restaurant images', () => {
    const imageElements = screen.getAllByRole('img');
    
    // Should have at least one image
    expect(imageElements.length).toBeGreaterThan(0);
    
    // Check that images have src and alt attributes
    imageElements.forEach(img => {
      expect(img).toHaveAttribute('src');
      expect(img).toHaveAttribute('alt');
    });
  });
  
  test('about section has proper structure', () => {
    const aboutSection = screen.getByTestId('about-section');
    const textContainer = screen.getByTestId('about-text');
    const imageContainer = screen.getByTestId('about-images');
    
    expect(aboutSection).toBeInTheDocument();
    expect(textContainer).toBeInTheDocument();
    expect(imageContainer).toBeInTheDocument();
  });
  
  test('about section has appropriate styling', () => {
    const aboutSection = screen.getByTestId('about-section');
    
    // Check that the component has the main CSS class
    expect(aboutSection).toHaveClass('about-us-section');
  });
}); 