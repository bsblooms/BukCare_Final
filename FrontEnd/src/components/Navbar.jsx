// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow px-4 py-2 flex justify-between items-center">
      <div className="text-xl font-bold text-blue-600">
        <Link to="/home">MyHospital</Link>
      </div>
      <div className="space-x-4">
        <Link to="/appointments" className="text-gray-700 hover:text-blue-600">Appointments</Link>
        <Link to="/doctors" className="text-gray-700 hover:text-blue-600">Doctors</Link>
        <Link to="/profile" className="text-gray-700 hover:text-blue-600">Profile</Link>
      </div>
    </nav>
  );
}
