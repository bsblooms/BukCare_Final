// src/pages/patient/Home.jsx
import Navbar from '../../components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar role="patient" />
      <h1 className="text-2xl font-bold mt-4">Patient Home</h1>
      <p>Welcome to your dashboard!</p>
    </div>
  );
}
