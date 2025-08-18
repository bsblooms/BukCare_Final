import { Link } from "react-router-dom";

export default function DoctorCard({ doctor }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition cursor-pointer bg-white">
      <h3 className="text-xl font-semibold">{doctor.full_name}</h3>
      <p className="text-gray-700">{doctor.specialization}</p>
      <Link
        to={`/doctor/${doctor.id}`}
        className="mt-4 inline-block text-blue-600 hover:underline"
      >
        View Profile
      </Link>
    </div>
  );
}
