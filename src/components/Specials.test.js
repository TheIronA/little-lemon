import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Specials from './Specials';

// Mock navigate function
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate
}));

describe('Specials Component', () => {
  beforeEach(() => {
    // Reset mocks
    mockNavigate.mockClear();
    
    render(
      <BrowserRouter>
        <Specials />
      </BrowserRouter>
    );
  });
  
  test('renders specials section with heading', () => {
    const headingElement = screen.getByRole('heading', { name: /this week's specials/i });
    expect(headingElement).toBeInTheDocument();
  });
  
  test('displays menu button', () => {
    const menuButton = screen.getByRole('button', { name: /online menu/i });
    expect(menuButton).toBeInTheDocument();
  });
  
  test('navigates to menu page when online menu button is clicked', () => {
    const menuButton = screen.getByRole('button', { name: /online menu/i });
    
    fireEvent.click(menuButton);
    
    expect(mockNavigate).toHaveBeenCalledWith('/menu');
  });
  
  test('renders special dish cards', () => {
    const dishCards = screen.getAllByTestId('special-card');
    
    // We should have at least one special dish
    expect(dishCards.length).toBeGreaterThan(0);
    
    // Each card should have an image, title, price and description
    const firstCard = dishCards[0];
    
    const image = firstCard.querySelector('img');
    const title = firstCard.querySelector('h3');
    const price = firstCard.querySelector('p:first-of-type'); // Price is usually the first paragraph
    const description = firstCard.querySelector('p:nth-of-type(2)'); // Description is usually the second paragraph
    
    expect(image).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });
  
  test('each card has an order link', () => {
    const orderLinks = screen.getAllByText(/order/i);
    
    // We should have at least one order link (one per card)
    expect(orderLinks.length).toBeGreaterThan(0);
    
    // Order links should navigate or be clickable
    const firstOrderLink = orderLinks[0];
    expect(firstOrderLink.closest('a')).toBeInTheDocument();
  });
}); 