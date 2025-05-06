import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();
  
  const handleBooking = () => {
    navigate('/reservations');
  };
  
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleBooking();
    }
  };

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Little Lemon</h1>
          <h2>London</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on 
            traditional recipes served with a modern twist. Enjoy our 
            cozy indoor seating or dine under the stars on our beautiful patio. 
            Our commitment to fresh, locally-sourced ingredients ensures 
            a delightful experience every time.
          </p>
          <div 
            className="cta-button"
            onClick={handleBooking}
            onKeyDown={handleKeyDown}
            tabIndex="0"
            role="button"
            aria-label="Book a table"
          >
            Book a Table
          </div>
        </div>
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Little Lemon restaurant interior with customers dining" 
          />
        </div>
      </section>
      
      <div className="main-content-container">
        <section className="specials-section">
          <div className="section-header">
            <h2>This Week's Specials</h2>
          </div>
          <div className="specials-cards">
            <div className="special-card">
              <div className="card-image">
                <img 
                  src="https://images.unsplash.com/photo-1551248429-40975aa4de74?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Greek Salad" 
                />
              </div>
              <div className="card-content">
                <h3>Greek Salad</h3>
                <p>$12.99</p>
                <p>The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                <a href="#" className="order-link" aria-label="Order Greek Salad">Order a delivery</a>
              </div>
            </div>
            
            <div className="special-card">
              <div className="card-image">
                <img 
                  src="https://img.freepik.com/free-photo/classic-italian-bruschetta-served-dark-board_1220-4038.jpg?t=st=1746529414~exp=1746533014~hmac=5ad522d44442768a6ccf53f4c2d754eb2e7a895cebb562bbf577b6e63bddcf35&w=1380" 
                  alt="Bruschetta" 
                />
              </div>
              <div className="card-content">
                <h3>Bruschetta</h3>
                <p>$9.99</p>
                <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                <a href="#" className="order-link" aria-label="Order Bruschetta">Order a delivery</a>
              </div>
            </div>
            
            <div className="special-card">
              <div className="card-image">
                <img 
                  src="https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Lemon Dessert" 
                />
              </div>
              <div className="card-content">
                <h3>Lemon Dessert</h3>
                <p>$5.99</p>
                <p>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                <a href="#" className="order-link" aria-label="Order Lemon Dessert">Order a delivery</a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="testimonials-section">
        <h2>What Our Customers Say</h2>
        <div className="testimonials">
          <div className="testimonial">
            <div className="customer-avatar">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                alt="Emily R." 
              />
            </div>
            <div className="rating">★★★★★</div>
            <p>"The food was amazing and the service was excellent! Will definitely come back."</p>
            <div className="customer-name">- Emily R.</div>
          </div>
          
          <div className="testimonial">
            <div className="customer-avatar">
              <img 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                alt="Mark T." 
              />
            </div>
            <div className="rating">★★★★★</div>
            <p>"Best Mediterranean food in Chicago. The reservation system was very convenient."</p>
            <div className="customer-name">- Mark T.</div>
          </div>
          
          <div className="testimonial">
            <div className="customer-avatar">
              <img 
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                alt="Sarah L." 
              />
            </div>
            <div className="rating">★★★★☆</div>
            <p>"Great atmosphere and friendly staff. The online booking made it easy to secure a table."</p>
            <div className="customer-name">- Sarah L.</div>
          </div>
        </div>
      </section>

      <section className="about-us-section">
        <div className="about-text">
          <h2 className="about-title">About Us</h2>
          <p>
            Little Lemon opened its doors in the heart of London, founded by 
            two passionate food lovers, Mario and Adrian. Drawing inspiration 
            from their Mediterranean roots and travels, they created a menu 
            that blends classic flavors with contemporary techniques. 
            Our restaurant features a locally-sourced menu with daily specials, 
            reflecting the best of the season in a lively but casual environment. 
            We believe in warm hospitality and creating memorable moments for our guests.
          </p>
        </div>
        <div className="about-image">
          <img 
            src="https://img.freepik.com/free-photo/father-son-talking-about-salad_23-2148351760.jpg?ga=GA1.1.538463868.1735125408&semt=ais_hybrid&w=740"
            alt="A father and son discussing a salad, representing the family aspect of Little Lemon"
          />
        </div>
      </section>
    </div>
  );
};

export default HomePage; 