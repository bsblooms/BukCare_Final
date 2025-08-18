// src/pages/Doctors.jsx
import { Link } from 'react-router-dom';

const dummyDoctors = [
  { id: 1, name: "Dr. Jane Smith", specialization: "Cardiologist" },
  { id: 2, name: "Dr. John Doe", specialization: "Pediatrician" },
];

export default function Doctors() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center">Doctor Directory</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {dummyDoctors.map((doc) => (
          <div key={doc.id} className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold">{doc.name}</h3>
            <p className="text-gray-600">{doc.specialization}</p>
            <Link
              to={`/doctors/${doc.id}`}
              className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              View Profile
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
