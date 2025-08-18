import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Index from './pages/Index';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Doctors from './pages/Doctors';
import DoctorProfile from './pages/DoctorProfile';
import Appointments from './pages/Appointments';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:id" element={<DoctorProfile />} />
        <Route path="/appointments" element={<Appointments />} />
      </Routes>
    </Router>
  );
}
