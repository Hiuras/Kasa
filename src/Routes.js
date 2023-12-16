import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './components/App';
import About from './components/About';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;