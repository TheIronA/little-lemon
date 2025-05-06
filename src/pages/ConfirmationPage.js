import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ConfirmationPage.css';

const ConfirmationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { reservation } = location.state || {};
  
  const handleModifyReservation = () => {
    navigate('/reservations', { state: { reservation } });
  };
  
  const handleCancelReservation = () => {
    navigate('/cancel', { state: { reservation } });
  };
  
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.currentTarget.click();
    }
  };
  
  // Format the date from YYYY-MM-DD to a more readable format
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  // If no reservation data is found, show error message
  if (!reservation) {
    return (
      <div className="confirmation-page error">
        <h1>Oops! Something went wrong</h1>
        <p>We couldn't find your reservation details. Please try making a reservation again.</p>
        <button 
          className="action-button"
          onClick={() => navigate('/reservations')}
          onKeyDown={handleKeyDown}
          tabIndex="0"
          aria-label="Make a new reservation"
        >
          Make a Reservation
        </button>
      </div>
    );
  }
  
  // Generate a random confirmation code
  const confirmationCode = `LL-${Math.floor(100000 + Math.random() * 900000)}`;
  
  return (
    <div className="confirmation-page">
      <div className="confirmation-container">
        <div className="confirmation-header">
          <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
            <circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none" />
            <path className="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
          </svg>
          <h1>Reservation Confirmed!</h1>
          <p className="confirmation-code">Confirmation Code: <span>{confirmationCode}</span></p>
        </div>
        
        <div className="reservation-details">
          <h2>Reservation Details</h2>
          
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
        
        <div className="contact-info">
          <h2>Contact Information</h2>
          <div className="detail-row">
            <span className="detail-label">Email:</span>
            <span className="detail-value">{reservation.email}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Phone:</span>
            <span className="detail-value">{reservation.phone}</span>
          </div>
        </div>
        
        <div className="restaurant-info">
          <h2>Restaurant Information</h2>
          <p><strong>Address:</strong> 1 Regent Street St. James's, London SW1Y 4NR</p>
          <p><strong>Phone:</strong> +44 20 7946 0000</p>
          <p><strong>Email:</strong> info@littlelemon.com</p>
        </div>
        
        <div className="additional-info">
          <p>Please save your confirmation code. You'll need it if you want to modify or cancel your reservation.</p>
          <p>We look forward to serving you at Little Lemon!</p>
        </div>
        
        <div className="action-buttons">
          <button
            className="action-button modify"
            onClick={handleModifyReservation}
            onKeyDown={handleKeyDown}
            tabIndex="0"
            aria-label="Modify your reservation"
          >
            Modify Reservation
          </button>
          <button
            className="action-button cancel"
            onClick={handleCancelReservation}
            onKeyDown={handleKeyDown}
            tabIndex="0"
            aria-label="Cancel your reservation"
          >
            Cancel Reservation
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage; 