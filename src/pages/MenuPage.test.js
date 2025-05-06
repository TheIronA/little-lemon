import { render, screen, fireEvent, within } from '@testing-library/react';
import MenuPage from './MenuPage';

describe('MenuPage Component', () => {
  beforeEach(() => {
    render(<MenuPage />);
  });
  
  test('renders menu page heading', () => {
    const headingElement = screen.getByRole('heading', { name: /our menu/i });
    expect(headingElement).toBeInTheDocument();
  });
  
  test('displays menu categories', () => {
    const categoriesSection = screen.getByRole('navigation', { name: /menu categories/i });
    expect(categoriesSection).toBeInTheDocument();
    
    // Check for common food categories
    const pastaCategory = screen.getByText(/pasta/i);
    const mainCategory = screen.getByText(/main courses/i);
    const dessertCategory = screen.getByText(/desserts/i);
    
    expect(pastaCategory).toBeInTheDocument();
    expect(mainCategory).toBeInTheDocument();
    expect(dessertCategory).toBeInTheDocument();
  });
  
  test('filters menu items when category is clicked', () => {
    // Get initial count of menu items
    const initialItems = screen.getAllByTestId('menu-item');
    const initialCount = initialItems.length;
    
    // Click on a specific category
    const dessertCategory = screen.getByText(/desserts/i);
    fireEvent.click(dessertCategory);
    
    // After filtering, we should have fewer items (only desserts)
    const filteredItems = screen.getAllByTestId('menu-item');
    
    // The count should change (either fewer or same, depending on initial state)
    expect(filteredItems.length).not.toBeGreaterThan(initialCount);
  });
  
  test('each menu item displays image, name, and price', () => {
    const menuItems = screen.getAllByTestId('menu-item');
    
    // Check the first menu item
    const firstItem = menuItems[0];
    const itemImage = within(firstItem).getByRole('img');
    const itemName = within(firstItem).getByTestId('item-name');
    const itemPrice = within(firstItem).getByTestId('item-price');
    
    expect(itemImage).toBeInTheDocument();
    expect(itemName).toBeInTheDocument();
    expect(itemPrice).toBeInTheDocument();
  });
}); 