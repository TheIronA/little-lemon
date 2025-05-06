import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ReservationPage from './ReservationPage';

// Mock navigate function
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate
}));

describe('ReservationPage Component', () => {
  beforeEach(() => {
    // Reset mocks
    mockNavigate.mockClear();
    
    render(
      <BrowserRouter>
        <ReservationPage />
      </BrowserRouter>
    );
  });
  
  test('renders reservation page with step 1 initially', () => {
    const step1Heading = screen.getByRole('heading', { name: /step 1: select date, time & table/i });
    expect(step1Heading).toBeInTheDocument();
    
    const dateInput = screen.getByLabelText(/date:/i);
    const timeSelect = screen.getByLabelText(/time:/i);
    
    expect(dateInput).toBeInTheDocument();
    expect(timeSelect).toBeInTheDocument();
  });
  
  test('date selection enables time dropdown', () => {
    const dateInput = screen.getByLabelText(/date:/i);
    const timeSelect = screen.getByLabelText(/time:/i);
    
    // Time should be disabled initially when no date is selected
    expect(timeSelect).toBeDisabled();
    
    // Set a date
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    fireEvent.change(dateInput, { target: { value: formattedDate } });
    
    // Time should be enabled after date selection
    expect(timeSelect).not.toBeDisabled();
  });
  
  test('shows form errors when continuing without selections', async () => {
    const continueButton = screen.getByRole('button', { name: /continue/i });
    
    // Try to continue without selecting anything
    fireEvent.click(continueButton);
    
    // Should show error messages
    const dateError = await screen.findByText(/please select a date/i);
    expect(dateError).toBeInTheDocument();
  });
  
  test('moves to step 2 when date, time and table are selected', async () => {
    // Select date
    const dateInput = screen.getByLabelText(/date:/i);
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    fireEvent.change(dateInput, { target: { value: formattedDate } });
    
    // Select time
    const timeSelect = screen.getByLabelText(/time:/i);
    fireEvent.change(timeSelect, { target: { value: '18:00' } });
    
    // Wait for tables to load and select first table
    await waitFor(() => {
      const tables = screen.getAllByRole('button', { name: /table \d/i });
      fireEvent.click(tables[0]);
    });
    
    // Click continue
    const continueButton = screen.getByRole('button', { name: /continue/i });
    fireEvent.click(continueButton);
    
    // Step 2 should be visible
    const step2Heading = await screen.findByRole('heading', { name: /step 2: your information/i });
    expect(step2Heading).toBeInTheDocument();
  });
}); 