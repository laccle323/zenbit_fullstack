import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landing';
import LoginPage from './pages/login';
import NavbarComponent from "./components/navbar";

const App: React.FC = () => {
  return (
      <Router>
          <NavbarComponent></NavbarComponent>
          <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<LoginPage />} />
          </Routes>
      </Router>
  );
};

export default App;
