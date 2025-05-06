import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  const mockOnClick = jest.fn();
  
  beforeEach(() => {
    // Reset mock before each test
    mockOnClick.mockClear();
  });
  
  test('renders button with correct text', () => {
    render(<Button onClick={mockOnClick}>Click Me</Button>);
    
    const buttonElement = screen.getByRole('button', { name: /click me/i });
    expect(buttonElement).toBeInTheDocument();
  });
  
  test('calls onClick when button is clicked', () => {
    render(<Button onClick={mockOnClick}>Click Me</Button>);
    
    const buttonElement = screen.getByRole('button', { name: /click me/i });
    fireEvent.click(buttonElement);
    
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
  
  test('applies primary style by default', () => {
    render(<Button onClick={mockOnClick}>Primary Button</Button>);
    
    const buttonElement = screen.getByRole('button', { name: /primary button/i });
    expect(buttonElement).toHaveClass('primary'); // Assuming 'primary' is the default style class
  });
  
  test('applies secondary style when specified', () => {
    render(<Button onClick={mockOnClick} type="secondary">Secondary Button</Button>);
    
    const buttonElement = screen.getByRole('button', { name: /secondary button/i });
    expect(buttonElement).toHaveClass('secondary');
  });
  
  test('applies custom className when provided', () => {
    render(<Button onClick={mockOnClick} className="custom-class">Custom Button</Button>);
    
    const buttonElement = screen.getByRole('button', { name: /custom button/i });
    expect(buttonElement).toHaveClass('custom-class');
  });
  
  test('disables button when disabled prop is true', () => {
    render(<Button onClick={mockOnClick} disabled={true}>Disabled Button</Button>);
    
    const buttonElement = screen.getByRole('button', { name: /disabled button/i });
    expect(buttonElement).toBeDisabled();
    
    // Click should not trigger the handler when disabled
    fireEvent.click(buttonElement);
    expect(mockOnClick).not.toHaveBeenCalled();
  });
  
  test('handles keyboard navigation', () => {
    render(<Button onClick={mockOnClick}>Keyboard Button</Button>);
    
    const buttonElement = screen.getByRole('button', { name: /keyboard button/i });
    
    // Press Enter key
    fireEvent.keyDown(buttonElement, { key: 'Enter' });
    expect(mockOnClick).toHaveBeenCalledTimes(1);
    
    // Press Space key
    fireEvent.keyDown(buttonElement, { key: ' ' });
    expect(mockOnClick).toHaveBeenCalledTimes(2);
  });
}); 