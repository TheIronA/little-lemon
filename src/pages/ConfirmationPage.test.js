import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ConfirmationPage from './ConfirmationPage';

// Mock navigate function
const mockNavigate = jest.fn();
// Mock location state
const mockState = {
  reservation: {
    firstName: 'John',
    lastName: 'Doe',
    date: '2023-05-15',
    time: '19:00',
    guests: 2,
    tableName: 'Table 5',
    email: 'john@example.com',
    phone: '123-456-7890',
    specialRequests: 'Window seat please'
  }
};

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
  useLocation: () => ({ state: mockState })
}));

describe('ConfirmationPage Component', () => {
  beforeEach(() => {
    // Reset mocks
    mockNavigate.mockClear();
    
    render(
      <BrowserRouter>
        <ConfirmationPage />
      </BrowserRouter>
    );
  });
  
  test('renders confirmation header and success message', () => {
    const confirmationHeader = screen.getByRole('heading', { name: /reservation confirmed/i });
    const confirmationCode = screen.getByText(/confirmation code:/i);
    
    expect(confirmationHeader).toBeInTheDocument();
    expect(confirmationCode).toBeInTheDocument();
  });
  
  test('displays reservation details correctly', () => {
    // Name
    const nameValue = screen.getByText('John Doe');
    expect(nameValue).toBeInTheDocument();
    
    // Time
    const timeValue = screen.getByText('19:00');
    expect(timeValue).toBeInTheDocument();
    
    // Guests
    const guestsValue = screen.getByText('2');
    expect(guestsValue).toBeInTheDocument();
    
    // Table
    const tableValue = screen.getByText('Table 5');
    expect(tableValue).toBeInTheDocument();
    
    // Special requests
    const requestsValue = screen.getByText('Window seat please');
    expect(requestsValue).toBeInTheDocument();
  });
  
  test('displays contact information correctly', () => {
    const emailValue = screen.getByText('john@example.com');
    const phoneValue = screen.getByText('123-456-7890');
    
    expect(emailValue).toBeInTheDocument();
    expect(phoneValue).toBeInTheDocument();
  });
  
  test('navigates to modify reservation when modify button is clicked', () => {
    const modifyButton = screen.getByRole('button', { name: /modify reservation/i });
    
    fireEvent.click(modifyButton);
    
    expect(mockNavigate).toHaveBeenCalledWith('/reservations', { state: { reservation: mockState.reservation } });
  });
  
  test('navigates to cancel reservation when cancel button is clicked', () => {
    const cancelButton = screen.getByRole('button', { name: /cancel reservation/i });
    
    fireEvent.click(cancelButton);
    
    expect(mockNavigate).toHaveBeenCalledWith('/cancel', { state: { reservation: mockState.reservation } });
  });
}); 