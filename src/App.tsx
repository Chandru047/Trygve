import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import PhoneVerificationPage from './pages/PhoneVerificationPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<PhoneVerificationPage />} />
        <Route path="/signin" element={<div>Sign In Page (Coming Soon)</div>} />
      </Routes>
    </Router>
  );
}

export default App;
