import DoctorDirectory from './DoctorDirectory';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Welcome to the Hospital Portal</h1>
        <DoctorDirectory />
      </div>
    </>
  );
}
