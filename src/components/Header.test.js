import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

describe('Header Component', () => {
  test('renders header with logo', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    
    // Check if logo is present
    const logoElement = screen.getByRole('img', { name: /little lemon logo/i });
    expect(logoElement).toBeInTheDocument();
  });
  
  test('renders navigation links', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    
    // Check for common navigation links
    const homeLink = screen.getByRole('link', { name: /home/i });
    const menuLink = screen.getByRole('link', { name: /menu/i });
    
    expect(homeLink).toBeInTheDocument();
    expect(menuLink).toBeInTheDocument();
  });
  
  test('has accessible navigation', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    
    // Check for navigation semantic element
    const navigation = screen.getByRole('navigation');
    expect(navigation).toBeInTheDocument();
  });
}); 