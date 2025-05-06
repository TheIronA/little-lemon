import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FeedbackPage.css';

const FeedbackPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    visitDate: '',
    rating: 0,
    foodQuality: 0,
    serviceQuality: 0,
    ambience: 0,
    comments: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };
  
  const handleRatingClick = (category, value) => {
    setFormData({
      ...formData,
      [category]: value
    });
    
    // Clear error for this category if it exists
    if (errors[category]) {
      setErrors({
        ...errors,
        [category]: null
      });
    }
  };
  
  const handleRatingKeyDown = (e, category, value) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleRatingClick(category, value);
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your name';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.visitDate) {
      newErrors.visitDate = 'Please select the date of your visit';
    }
    
    if (formData.rating === 0) {
      newErrors.rating = 'Please rate your overall experience';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call to submit feedback
      setTimeout(() => {
        console.log('Feedback submitted:', formData);
        setIsSubmitting(false);
        setSubmitted(true);
      }, 1500);
    }
  };
  
  // Star rating component
  const StarRating = ({ category, value, onChange }) => {
    const stars = [];
    
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`star ${i <= value ? 'active' : ''}`}
          onClick={() => onChange(category, i)}
          onKeyDown={(e) => handleRatingKeyDown(e, category, i)}
          tabIndex="0"
          role="button"
          aria-label={`${i} star${i !== 1 ? 's' : ''}`}
        >
          ★
        </span>
      );
    }
    
    return <div className="star-rating">{stars}</div>;
  };
  
  if (submitted) {
    return (
      <div className="feedback-page">
        <div className="feedback-success">
          <div className="success-icon">✓</div>
          <h2>Thank You for Your Feedback!</h2>
          <p>We appreciate you taking the time to share your experience with us. Your feedback helps us improve our service.</p>
          <button 
            className="home-button"
            onClick={() => navigate('/')}
            aria-label="Return to home page"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="feedback-page">
      <h1>Share Your Experience</h1>
      <div className="feedback-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name:</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              aria-label="Full name"
            />
            {errors.fullName && <div className="error-message">{errors.fullName}</div>}
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              aria-label="Email address"
            />
            {errors.email && <div className="error-message">{errors.email}</div>}
          </div>
          
          <div className="form-group">
            <label htmlFor="visitDate">Date of Visit:</label>
            <input
              type="date"
              id="visitDate"
              name="visitDate"
              value={formData.visitDate}
              onChange={handleInputChange}
              max={new Date().toISOString().split('T')[0]}
              aria-label="Date of visit"
            />
            {errors.visitDate && <div className="error-message">{errors.visitDate}</div>}
          </div>
          
          <div className="form-group rating-group">
            <label>Overall Experience:</label>
            <StarRating 
              category="rating" 
              value={formData.rating} 
              onChange={handleRatingClick} 
            />
            {errors.rating && <div className="error-message">{errors.rating}</div>}
          </div>
          
          <div className="rating-categories">
            <div className="rating-category">
              <label>Food Quality:</label>
              <StarRating 
                category="foodQuality" 
                value={formData.foodQuality} 
                onChange={handleRatingClick} 
              />
            </div>
            
            <div className="rating-category">
              <label>Service:</label>
              <StarRating 
                category="serviceQuality" 
                value={formData.serviceQuality} 
                onChange={handleRatingClick} 
              />
            </div>
            
            <div className="rating-category">
              <label>Ambience:</label>
              <StarRating 
                category="ambience" 
                value={formData.ambience} 
                onChange={handleRatingClick} 
              />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="comments">Comments:</label>
            <textarea
              id="comments"
              name="comments"
              rows="5"
              value={formData.comments}
              onChange={handleInputChange}
              placeholder="Tell us more about your experience..."
              aria-label="Comments and suggestions"
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            className="submit-button"
            disabled={isSubmitting}
            aria-label="Submit feedback"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackPage; 