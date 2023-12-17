import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './components/App';
import About from './components/About';
import Error from './components/Error';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path='/error' element={<Error />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;