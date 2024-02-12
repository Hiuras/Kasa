import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import App from './components/App';
import About from './components/About';
import Error from './components/Error';
import LogementDetail from './components/Logement';
import LogementData from './components/Logement';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/error" element={<Error />} />
        <Route
          path="/logement/:id"
          element={<LogementDetail logementData={LogementData} />}
        />
        <Route path="*" element={<Navigate to="/error" />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;