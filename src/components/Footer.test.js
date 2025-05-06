import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Footer';

describe('Footer Component', () => {
  test('renders footer with logo', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    
    // Check if logo is present
    const logoElement = screen.getByRole('img', { name: /little lemon logo/i });
    expect(logoElement).toBeInTheDocument();
  });
  
  test('displays contact information', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    
    // Check for address and contact details
    const addressElement = screen.getByText(/1 Regent Street/i);
    const phoneElement = screen.getByText(/\+44 20 7946 0000/i);
    const emailElement = screen.getByText(/info@littlelemon.com/i);
    
    expect(addressElement).toBeInTheDocument();
    expect(phoneElement).toBeInTheDocument();
    expect(emailElement).toBeInTheDocument();
  });
  
  test('contains navigation links', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    
    // Check for common footer links
    const homeLink = screen.getByRole('link', { name: /home/i });
    const menuLink = screen.getByRole('link', { name: /menu/i });
    
    expect(homeLink).toBeInTheDocument();
    expect(menuLink).toBeInTheDocument();
  });
}); 