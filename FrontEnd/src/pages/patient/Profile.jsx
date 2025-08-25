// src/pages/patient/Profile.jsx
import Navbar from '../../components/Navbar';

export default function Profile() {
  return (
    <div>
      <Navbar role="patient" />
      <h1 className="text-2xl font-bold mt-4">Patient Profile</h1>
      <p>View and update your personal information.</p>
    </div>
  );
}
