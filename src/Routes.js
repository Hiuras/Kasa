import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './components/App';
import About from './components/About';
import Error from './components/Error';
import Logement from './components/Logement';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path='/error' element={<Error />} />
        <Route path='/logement' element={<Logement />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;