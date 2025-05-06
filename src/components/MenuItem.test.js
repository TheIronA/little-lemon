import { render, screen } from '@testing-library/react';
import MenuItem from './MenuItem';

describe('MenuItem Component', () => {
  const mockItem = {
    id: 1,
    name: 'Greek Salad',
    price: 12.99,
    description: 'Fresh salad with tomatoes, cucumbers, olives, and feta cheese.',
    image: '/images/greek-salad.jpg',
    category: 'Starters'
  };
  
  beforeEach(() => {
    render(<MenuItem item={mockItem} />);
  });
  
  test('renders menu item with correct name', () => {
    const nameElement = screen.getByText('Greek Salad');
    expect(nameElement).toBeInTheDocument();
  });
  
  test('displays item price correctly', () => {
    const priceElement = screen.getByText('$12.99');
    expect(priceElement).toBeInTheDocument();
  });
  
  test('shows item description', () => {
    const descriptionElement = screen.getByText(/Fresh salad with tomatoes/i);
    expect(descriptionElement).toBeInTheDocument();
  });
  
  test('renders item image with correct attributes', () => {
    const imageElement = screen.getByRole('img');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', '/images/greek-salad.jpg');
    expect(imageElement).toHaveAttribute('alt', 'Greek Salad');
  });
  
  test('menu item has appropriate structure', () => {
    const menuItem = screen.getByTestId('menu-item');
    const imageContainer = screen.getByTestId('item-image');
    const contentContainer = screen.getByTestId('item-content');
    
    expect(menuItem).toBeInTheDocument();
    expect(imageContainer).toBeInTheDocument();
    expect(contentContainer).toBeInTheDocument();
  });
  
  test('order button or link is present', () => {
    const orderElement = screen.getByText(/order/i);
    expect(orderElement).toBeInTheDocument();
  });
}); 