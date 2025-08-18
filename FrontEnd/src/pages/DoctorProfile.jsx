import { useParams, Link } from "react-router-dom";

export default function DoctorProfile() {
  const { id } = useParams();

  // TODO: fetch doctor info by id here

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Doctor Profile</h2>
      <p>Doctor ID: {id}</p>
      <p>Name: Dr. Juan Dela Cruz</p>
      <p>Specialization: Cardiology</p>
      <p>Bio: Experienced cardiologist with 10+ years...</p>

      <Link
        to={`/appointment/${id}`}
        className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Make Appointment
      </Link>
    </div>
  );
}
