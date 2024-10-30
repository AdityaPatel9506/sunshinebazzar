import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
// Import your components
import Navbar from './component/landingpage/Navbar';
import SecondNav from './component/landingpage/secondnav';
import Homepage from './component/landingpage/Homepage';
import LoginPage from './authcomponent/login';

function App() {
  return (
    <Router>
      <Navbar />
      <ConditionalSecondNav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

function ConditionalSecondNav() {
  const location = useLocation();
  const hideOnPaths = ['/login', '/signup']; // Add more paths as needed

  return (
    !hideOnPaths.includes(location.pathname) && <SecondNav />
  );
}

export default App;
