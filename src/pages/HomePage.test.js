import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';

// Mock child components
jest.mock('../components/Hero', () => () => <div data-testid="mock-hero" />);
jest.mock('../components/Specials', () => () => <div data-testid="mock-specials" />);
jest.mock('../components/Testimonials', () => () => <div data-testid="mock-testimonials" />);
jest.mock('../components/About', () => () => <div data-testid="mock-about" />);

describe('HomePage Component', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
  });
  
  test('renders all section components', () => {
    const heroSection = screen.getByTestId('mock-hero');
    const specialsSection = screen.getByTestId('mock-specials');
    const testimonialsSection = screen.getByTestId('mock-testimonials');
    const aboutSection = screen.getByTestId('mock-about');
    
    expect(heroSection).toBeInTheDocument();
    expect(specialsSection).toBeInTheDocument();
    expect(testimonialsSection).toBeInTheDocument();
    expect(aboutSection).toBeInTheDocument();
  });
  
  test('sections appear in the correct order', () => {
    const sections = screen.getAllByTestId(/mock-/);
    
    // Check the order: Hero -> Specials -> Testimonials -> About
    expect(sections[0]).toHaveAttribute('data-testid', 'mock-hero');
    expect(sections[1]).toHaveAttribute('data-testid', 'mock-specials');
    expect(sections[2]).toHaveAttribute('data-testid', 'mock-testimonials');
    expect(sections[3]).toHaveAttribute('data-testid', 'mock-about');
  });
}); 