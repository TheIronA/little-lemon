import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import ReservationPage from './pages/ReservationPage';
import ConfirmationPage from './pages/ConfirmationPage';
import CancelReservationPage from './pages/CancelReservationPage';
import FeedbackPage from './pages/FeedbackPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/reservations" element={<ReservationPage />} />
            <Route path="/confirmation" element={<ConfirmationPage />} />
            <Route path="/cancel" element={<CancelReservationPage />} />
            <Route path="/feedback" element={<FeedbackPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
