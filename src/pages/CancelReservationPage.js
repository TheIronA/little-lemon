import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './CancelReservationPage.css';

const CancelReservationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const initialReservation = location.state?.reservation;
  
  const [confirmationCode, setConfirmationCode] = useState(
    initialReservation ? 'LL-123456' : ''
  );
  const [email, setEmail] = useState(initialReservation?.email || '');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [reservationFound, setReservationFound] = useState(!!initialReservation);
  const [reservation, setReservation] = useState(initialReservation || null);
  const [cancelled, setCancelled] = useState(false);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'confirmationCode') {
      setConfirmationCode(value);
    } else if (name === 'email') {
      setEmail(value);
    }
    
    // Clear error when user types
    if (error) {
      setError('');
    }
  };
  
  const findReservation = () => {
    // Validate inputs
    if (!confirmationCode.trim()) {
      setError('Please enter your confirmation code.');
      return;
    }
    
    if (!email.trim()) {
      setError('Please enter your email address.');
      return;
    }
    
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    
    setIsSubmitting(true);
    setError('');
    
    // Simulate API call to find reservation
    setTimeout(() => {
      // For demo purposes, we'll always "find" a reservation if we don't have one already
      if (!reservation) {
        const mockReservation = {
          firstName: 'John',
          lastName: 'Doe',
          email: email,
          phone: '123-456-7890',
          date: '2023-12-25',
          time: '19:00',
          guests: 4,
          tableName: 'Table 3',
          specialRequests: 'Window seat if possible'
        };
        setReservation(mockReservation);
      }
      
      setReservationFound(true);
      setIsSubmitting(false);
    }, 1500);
  };
  
  const handleCancelReservation = () => {
    setIsSubmitting(true);
    
    // Simulate API call to cancel reservation
    setTimeout(() => {
      setCancelled(true);
      setIsSubmitting(false);
    }, 1500);
  };
  
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.currentTarget.click();
    }
  };
  
  return (
    <div className="cancel-page">
      <h1>Cancel Reservation</h1>
      
      {!reservationFound ? (
        <div className="cancel-form-container">
          <p className="instructions">
            To cancel your reservation, please enter your confirmation code and the email address 
            you used when making the reservation.
          </p>
          
          <div className="form-group">
            <label htmlFor="confirmationCode">Confirmation Code:</label>
            <input
              type="text"
              id="confirmationCode"
              name="confirmationCode"
              value={confirmationCode}
              onChange={handleInputChange}
              placeholder="e.g., LL-123456"
              required
              aria-label="Confirmation code"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              required
              aria-label="Email address"
            />
          </div>
          
          {error && <div className="error-message">{error}</div>}
          
          <button
            className="find-button"
            onClick={findReservation}
            disabled={isSubmitting}
            aria-label="Find reservation"
            tabIndex="0"
            onKeyDown={handleKeyDown}
          >
            {isSubmitting ? 'Searching...' : 'Find Reservation'}
          </button>
        </div>
      ) : !cancelled ? (
        <div className="reservation-details-container">
          <h2>Reservation Found</h2>
          
          <div className="reservation-details">
            <div className="detail-row">
              <span className="detail-label">Name:</span>
              <span className="detail-value">{`${reservation.firstName} ${reservation.lastName}`}</span>
            </div>
            
            <div className="detail-row">
              <span className="detail-label">Date:</span>
              <span className="detail-value">{formatDate(reservation.date)}</span>
            </div>
            
            <div className="detail-row">
              <span className="detail-label">Time:</span>
              <span className="detail-value">{reservation.time}</span>
            </div>
            
            <div className="detail-row">
              <span className="detail-label">Number of Guests:</span>
              <span className="detail-value">{reservation.guests}</span>
            </div>
            
            <div className="detail-row">
              <span className="detail-label">Table:</span>
              <span className="detail-value">{reservation.tableName}</span>
            </div>
            
            {reservation.specialRequests && (
              <div className="detail-row">
                <span className="detail-label">Special Requests:</span>
                <span className="detail-value">{reservation.specialRequests}</span>
              </div>
            )}
          </div>
          
          <div className="cancellation-warning">
            <p><strong>WARNING:</strong> Cancelling your reservation cannot be undone. Are you sure you want to cancel?</p>
          </div>
          
          <div className="action-buttons">
            <button
              className="back-button"
              onClick={() => navigate('/')}
              aria-label="Go back to home page"
              tabIndex="0"
              onKeyDown={handleKeyDown}
            >
              Go Back
            </button>
            <button
              className="cancel-button"
              onClick={handleCancelReservation}
              disabled={isSubmitting}
              aria-label="Confirm cancellation"
              tabIndex="0"
              onKeyDown={handleKeyDown}
            >
              {isSubmitting ? 'Processing...' : 'Confirm Cancellation'}
            </button>
          </div>
        </div>
      ) : (
        <div className="cancellation-success">
          <div className="success-icon">✓</div>
          <h2>Reservation Cancelled Successfully</h2>
          <p>Your reservation has been cancelled. We hope to see you at Little Lemon another time!</p>
          <p className="email-notice">A confirmation email has been sent to: <strong>{email}</strong></p>
          
          <button
            className="home-button"
            onClick={() => navigate('/')}
            aria-label="Return to home page"
            tabIndex="0"
            onKeyDown={handleKeyDown}
          >
            Return to Home
          </button>
        </div>
      )}
    </div>
  );
};

export default CancelReservationPage; 