import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FeedbackPage from './FeedbackPage';

// Mock navigate function
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate
}));

describe('FeedbackPage Component', () => {
  beforeEach(() => {
    // Reset mocks
    mockNavigate.mockClear();
    
    render(
      <BrowserRouter>
        <FeedbackPage />
      </BrowserRouter>
    );
  });
  
  test('renders feedback form', () => {
    const headingElement = screen.getByRole('heading', { name: /share your experience/i });
    expect(headingElement).toBeInTheDocument();
    
    const nameInput = screen.getByLabelText(/full name:/i);
    const emailInput = screen.getByLabelText(/email:/i);
    const dateInput = screen.getByLabelText(/date of visit:/i);
    const submitButton = screen.getByRole('button', { name: /submit feedback/i });
    
    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(dateInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
  
  test('displays error messages when form is submitted with empty fields', () => {
    const submitButton = screen.getByRole('button', { name: /submit feedback/i });
    
    // Submit without filling required fields
    fireEvent.click(submitButton);
    
    // Error messages should appear
    const nameError = screen.getByText(/please enter your name/i);
    const emailError = screen.getByText(/please enter your email/i);
    const dateError = screen.getByText(/please select the date of your visit/i);
    const ratingError = screen.getByText(/please rate your overall experience/i);
    
    expect(nameError).toBeInTheDocument();
    expect(emailError).toBeInTheDocument();
    expect(dateError).toBeInTheDocument();
    expect(ratingError).toBeInTheDocument();
  });
  
  test('star rating selection works', () => {
    // Get the rating stars for overall experience
    const stars = screen.getAllByTestId(/star-overall-/);
    
    // Click the fourth star (4 out of 5)
    fireEvent.click(stars[3]);
    
    // The clicked star and all previous stars should have the "active" class
    expect(stars[0]).toHaveClass('active');
    expect(stars[1]).toHaveClass('active');
    expect(stars[2]).toHaveClass('active');
    expect(stars[3]).toHaveClass('active');
    expect(stars[4]).not.toHaveClass('active');
  });
  
  test('form submission with valid data shows success message', () => {
    // Fill in form fields
    const nameInput = screen.getByLabelText(/full name:/i);
    const emailInput = screen.getByLabelText(/email:/i);
    const dateInput = screen.getByLabelText(/date of visit:/i);
    const commentsInput = screen.getByLabelText(/comments:/i);
    
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(dateInput, { target: { value: '2023-01-15' } });
    fireEvent.change(commentsInput, { target: { value: 'Great food and service!' } });
    
    // Select rating
    const stars = screen.getAllByTestId(/star-overall-/);
    fireEvent.click(stars[4]); // 5 star rating
    
    // Submit the form
    const submitButton = screen.getByRole('button', { name: /submit feedback/i });
    fireEvent.click(submitButton);
    
    // Success message should appear
    const successMessage = screen.getByText(/thank you for your feedback/i);
    expect(successMessage).toBeInTheDocument();
  });
}); 