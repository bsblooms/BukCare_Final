// // src/App.jsx
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// // Public Pages
// import Landing from './pages/public/Landing';
// import About from './pages/public/About';
// import Services from './pages/public/Services';
// import Contact from './pages/public/Contact';

// // Auth Pages
// import SignIn from './pages/auth/SignIn';
// import SignUp from './pages/auth/SignUp';
// import ForgotPassword from './pages/auth/ForgotPassword';

// // Patient Pages
// import PatientHome from './pages/patient/Home';
// import PatientProfile from './pages/patient/Profile';
// import PatientAppointments from './pages/patient/Appointments';

// // Doctor Pages
// import DoctorHome from './pages/doctor/Home';
// import DoctorProfile from './pages/doctor/Profile';
// import DoctorAppointments from './pages/doctor/Appointments';

// // Staff Pages
// import StaffHome from './pages/staff/Home';
// import StaffProfile from './pages/staff/Profile';
// import StaffAppointments from './pages/staff/Appointments';

// export default function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Public Pages */}
//         <Route path="/" element={<Landing />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/contact" element={<Contact />} />
        
        

//         {/* Auth Pages */}
//         <Route path="/signin" element={<SignIn />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/forgot-password" element={<ForgotPassword />} />

//         {/* Patient Routes */}
//         <Route path="/patient/home" element={<PatientHome />} />
//         <Route path="/patient/profile" element={<PatientProfile />} />
//         <Route path="/patient/appointments" element={<PatientAppointments />} />

//         {/* Doctor Routes */}
//         <Route path="/doctor/home" element={<DoctorHome />} />
//         <Route path="/doctor/profile" element={<DoctorProfile />} />
//         <Route path="/doctor/appointments" element={<DoctorAppointments />} />

//         {/* Staff Routes */}
//         <Route path="/staff/home" element={<StaffHome />} />
//         <Route path="/staff/profile" element={<StaffProfile />} />
//         <Route path="/staff/appointments" element={<StaffAppointments />} />

//         {/* 404 Not Found - Optional */}
//         <Route path="*" element={<Landing />} />
//       </Routes>
//     </Router>
//   );
// }


// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Public Pages
import Landing from "./pages/public/Landing";
import About from "./pages/public/About";
import Services from "./pages/public/Services";
import Contact from "./pages/public/Contact";

// Auth Pages
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import ForgotPassword from "./pages/auth/ForgotPassword";

// Patient Pages
import PatientHome from "./pages/patient/Home";
import PatientProfile from "./pages/patient/Profile";
import PatientAppointments from "./pages/patient/Appointments";
import DoctorFind from "./pages/patient/doctorfind"; // ✅ Import DoctorFind
import Home from "./pages/patient/Home"; 
import AddAppointments from "./pages/patient/AddAppointments";
import Appointments from "./pages/patient/Appointments";
import NotifyMe from "./pages/patient/NotifyMe";
import Reschedule from "./pages/patient/Reschedule";
import MarkAsDone from "./pages/patient/markasdone";





// Doctor Pages
import DoctorHome from "./pages/doctor/Home";
import DoctorProfile from "./pages/doctor/Profile";
import DoctorAppointments from "./pages/doctor/Appointments";

// Staff Pages
import StaffHome from "./pages/staff/Home";
import StaffProfile from "./pages/staff/Profile";
import StaffAppointments from "./pages/staff/Appointments";
import StaffCreateAppointment from "./pages/staff/CreateAppointment";
import Stafffinddoctor from "./pages/staff/finddoctor";
import StaffReschedule from "./pages/staff/Reschedule";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />

        {/* Auth Pages */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Patient Routes */}
        <Route path="/patient/home" element={<PatientHome />} />
        <Route path="/patient/profile" element={<PatientProfile />} />
        <Route path="/patient/appointments" element={<PatientAppointments />} />
        <Route path="/patient/doctorfind" element={<DoctorFind />} />
        <Route path="patient/home" element={<Home />} />
        <Route path="patient/addappointments" element={<AddAppointments />} />
        <Route path="patient/appoitment" element={<Appointments />} />
        <Route path="patient/notifyme" element={<NotifyMe />} />
        <Route path="patient/reschedule" element={<Reschedule />} />
        <Route path="patient/markasdone" element={<MarkAsDone />} />


    

        {/* Doctor Routes */}
        <Route path="/doctor/home" element={<DoctorHome />} />
        <Route path="/doctor/profile" element={<DoctorProfile />} />
        <Route path="/doctor/appointments" element={<DoctorAppointments />} />

        {/* Staff Routes */}
        <Route path="/staff/home" element={<StaffHome />} />
        <Route path="/staff/profile" element={<StaffProfile />} />
        <Route path="/staff/appointments" element={<StaffAppointments />} />
        <Route path="/staff/createappointment" element={<StaffCreateAppointment />} />
        <Route path="/staff/finddoctor" element={<Stafffinddoctor />} />
        <Route path="/staff/reschedule" element={<StaffReschedule />} />

        {/* 404 Not Found - Optional */}
        <Route path="*" element={<Landing />} />
      </Routes>
    </Router>
  );
}
