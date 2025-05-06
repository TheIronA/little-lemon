import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ReservationPage.css';

const ReservationPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(2);
  const [availableTables, setAvailableTables] = useState([]);
  const [selectedTable, setSelectedTable] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: ''
  });
  const [errors, setErrors] = useState({});
  
  // Simulate available times
  const availableTimes = [
    '17:00', '17:30', '18:00', '18:30', '19:00', 
    '19:30', '20:00', '20:30', '21:00'
  ];
  
  // Function to get today's date in YYYY-MM-DD format
  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();
    
    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;
    
    return `${year}-${month}-${day}`;
  };
  
  // Handle date selection and fetch available times
  const handleDateSelect = (e) => {
    setDate(e.target.value);
    // Reset time when date changes
    setTime('');
    setAvailableTables([]);
    setSelectedTable(null);
  };
  
  // Handle time selection and fetch available tables
  const handleTimeSelect = (e) => {
    setTime(e.target.value);
    // Simulate fetching available tables based on date and time
    fetchAvailableTables(date, e.target.value, guests);
  };
  
  // Handle guest count changes
  const handleGuestsChange = (e) => {
    setGuests(parseInt(e.target.value));
    if (date && time) {
      // Refetch tables when guest count changes
      fetchAvailableTables(date, time, parseInt(e.target.value));
    }
  };
  
  // Simulate fetching available tables
  const fetchAvailableTables = (selectedDate, selectedTime, guestCount) => {
    // In a real app, this would be an API call
    setTimeout(() => {
      // Generate mock tables based on inputs
      const tables = [];
      const tableCount = 5; // Mock table count
      
      for (let i = 1; i <= tableCount; i++) {
        tables.push({
          id: i,
          name: `Table ${i}`,
          capacity: Math.floor(Math.random() * 6) + 2, // Random capacity between 2-8
          location: i % 2 === 0 ? 'Indoor' : 'Outdoor'
        });
      }
      
      // Filter tables by capacity
      const filteredTables = tables.filter(table => table.capacity >= guestCount);
      setAvailableTables(filteredTables);
      setSelectedTable(null);
    }, 500);
  };
  
  // Handle table selection
  const handleTableSelect = (tableId) => {
    setSelectedTable(tableId);
  };
  
  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error for this field when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };
  
  // Validate form data
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/[^0-9]/g, ''))) {
      newErrors.phone = 'Phone number should have 10 digits';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Handle next step
  const handleNext = () => {
    if (step === 1) {
      // Validate date and time selection
      if (!date) {
        setErrors({ ...errors, date: 'Please select a date' });
        return;
      }
      if (!time) {
        setErrors({ ...errors, time: 'Please select a time' });
        return;
      }
      if (!selectedTable) {
        setErrors({ ...errors, table: 'Please select a table' });
        return;
      }
      setErrors({});
      setStep(2);
    } else if (step === 2) {
      if (validateForm()) {
        // Submit reservation
        submitReservation();
      }
    }
  };
  
  // Handle back to previous step
  const handleBack = () => {
    setStep(1);
  };
  
  // Submit reservation data
  const submitReservation = () => {
    // In a real app, this would be an API call
    console.log('Submitting reservation:', {
      date,
      time,
      guests,
      tableId: selectedTable,
      ...formData
    });
    
    // Navigate to confirmation page with reservation details
    navigate('/confirmation', { 
      state: { 
        reservation: {
          date,
          time,
          guests,
          tableId: selectedTable,
          tableName: availableTables.find(table => table.id === selectedTable)?.name,
          ...formData
        }
      } 
    });
  };
  
  return (
    <div className="reservation-page">
      <h1>Reserve a Table</h1>
      
      {step === 1 ? (
        <div className="reservation-step">
          <h2>Step 1: Select Date, Time & Table</h2>
          
          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={handleDateSelect}
              min={getTodayDate()}
              required
              aria-label="Reservation date"
            />
            {errors.date && <div className="error-message">{errors.date}</div>}
          </div>
          
          <div className="form-group">
            <label htmlFor="time">Time:</label>
            <select
              id="time"
              value={time}
              onChange={handleTimeSelect}
              disabled={!date}
              required
              aria-label="Reservation time"
            >
              <option value="">Select a time</option>
              {availableTimes.map((timeOption) => (
                <option key={timeOption} value={timeOption}>
                  {timeOption}
                </option>
              ))}
            </select>
            {errors.time && <div className="error-message">{errors.time}</div>}
          </div>
          
          <div className="form-group">
            <label htmlFor="guests">Number of guests:</label>
            <input
              type="number"
              id="guests"
              min="1"
              max="10"
              value={guests}
              onChange={handleGuestsChange}
              required
              aria-label="Number of guests"
            />
          </div>
          
          {date && time && (
            <div className="tables-section">
              <h3>Available Tables</h3>
              
              {availableTables.length === 0 ? (
                <p>Searching for available tables...</p>
              ) : availableTables.length > 0 ? (
                <div className="tables-grid">
                  {availableTables.map((table) => (
                    <div
                      key={table.id}
                      className={`table-card ${selectedTable === table.id ? 'selected' : ''}`}
                      onClick={() => handleTableSelect(table.id)}
                      tabIndex="0"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          handleTableSelect(table.id);
                        }
                      }}
                      role="button"
                      aria-label={`Select ${table.name}, capacity ${table.capacity}, ${table.location}`}
                      aria-selected={selectedTable === table.id}
                    >
                      <h4>{table.name}</h4>
                      <p>Capacity: {table.capacity} people</p>
                      <p>Location: {table.location}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p>No tables available for the selected time and number of guests.</p>
              )}
              
              {errors.table && <div className="error-message">{errors.table}</div>}
            </div>
          )}
        </div>
      ) : (
        <div className="reservation-step">
          <h2>Step 2: Your Information</h2>
          
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
              aria-label="First name"
            />
            {errors.firstName && <div className="error-message">{errors.firstName}</div>}
          </div>
          
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
              aria-label="Last name"
            />
            {errors.lastName && <div className="error-message">{errors.lastName}</div>}
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              aria-label="Email address"
            />
            {errors.email && <div className="error-message">{errors.email}</div>}
          </div>
          
          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              aria-label="Phone number"
              placeholder="e.g., 123-456-7890"
            />
            {errors.phone && <div className="error-message">{errors.phone}</div>}
          </div>
          
          <div className="form-group">
            <label htmlFor="specialRequests">Special Requests (optional):</label>
            <textarea
              id="specialRequests"
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleInputChange}
              rows="3"
              aria-label="Special requests"
            />
          </div>
          
          <div className="reservation-summary">
            <h3>Reservation Summary</h3>
            <p><strong>Date:</strong> {date}</p>
            <p><strong>Time:</strong> {time}</p>
            <p><strong>Number of Guests:</strong> {guests}</p>
            <p><strong>Table:</strong> {availableTables.find(table => table.id === selectedTable)?.name}</p>
          </div>
        </div>
      )}
      
      <div className="button-group">
        {step === 2 && (
          <button
            type="button"
            className="back-button"
            onClick={handleBack}
            aria-label="Go back to previous step"
          >
            Back
          </button>
        )}
        <button
          type="button"
          className="next-button"
          onClick={handleNext}
          aria-label={step === 1 ? "Continue to personal information" : "Complete reservation"}
        >
          {step === 1 ? 'Continue' : 'Complete Reservation'}
        </button>
      </div>
    </div>
  );
};

export default ReservationPage; 