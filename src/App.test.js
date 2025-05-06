import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// Mock any child components that might cause issues
jest.mock('./components/Header', () => () => <div data-testid="mock-header" />);
jest.mock('./components/Footer', () => () => <div data-testid="mock-footer" />);

describe('App Component', () => {
  test('renders without crashing', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    // Basic check to see if the component renders
    expect(document.body).toBeInTheDocument();
  });
  
  test('contains header and footer', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    
    const header = screen.getByTestId('mock-header');
    const footer = screen.getByTestId('mock-footer');
    
    expect(header).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });
});
