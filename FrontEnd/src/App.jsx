// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Public Pages
import Index from './pages/Index';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';

// Patient Pages
import PatientHome from './pages/patient/Home';
import PatientProfile from './pages/patient/Profile';
import PatientAppointments from './pages/patient/Appointments';

// Doctor Pages
import DoctorHome from './pages/doctor/Home';
import DoctorProfile from './pages/doctor/Profile';
import DoctorAppointments from './pages/doctor/Appointments';

// Staff Pages
import StaffHome from './pages/staff/Home';
import StaffProfile from './pages/staff/Profile';
import StaffAppointments from './pages/staff/Appointments';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Index />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Patient */}
        <Route path="/patient/home" element={<PatientHome />} />
        <Route path="/patient/profile" element={<PatientProfile />} />
        <Route path="/patient/appointments" element={<PatientAppointments />} />

        {/* Doctor */}
        <Route path="/doctor/home" element={<DoctorHome />} />
        <Route path="/doctor/profile" element={<DoctorProfile />} />
        <Route path="/doctor/appointments" element={<DoctorAppointments />} />

        {/* Staff */}
        <Route path="/staff/home" element={<StaffHome />} />
        <Route path="/staff/profile" element={<StaffProfile />} />
        <Route path="/staff/appointments" element={<StaffAppointments />} />
      </Routes>
    </Router>
  );
}
