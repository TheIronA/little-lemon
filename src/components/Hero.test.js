import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Hero from './Hero';

// Mock navigate function
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate
}));

describe('Hero Component', () => {
  beforeEach(() => {
    // Reset mocks
    mockNavigate.mockClear();
    
    render(
      <BrowserRouter>
        <Hero />
      </BrowserRouter>
    );
  });
  
  test('renders hero section with heading', () => {
    const headingElement = screen.getByRole('heading', { name: /little lemon/i });
    expect(headingElement).toBeInTheDocument();
  });
  
  test('displays subtitle and descriptive text', () => {
    const subtitleElement = screen.getByText(/chicago/i);
    const descriptionElement = screen.getByText(/we are a family owned mediterranean restaurant/i);
    
    expect(subtitleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });
  
  test('renders hero image', () => {
    const imageElement = screen.getByRole('img', { name: /restaurant food/i });
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src');
    expect(imageElement).toHaveAttribute('alt', 'Restaurant food');
  });
  
  test('navigates to reservations page when reserve button is clicked', () => {
    const reserveButton = screen.getByRole('button', { name: /reserve a table/i });
    
    fireEvent.click(reserveButton);
    
    expect(mockNavigate).toHaveBeenCalledWith('/reservations');
  });
}); 