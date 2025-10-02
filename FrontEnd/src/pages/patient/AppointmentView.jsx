// src/pages/patient/AppointmentView.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function AppointmentView() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data (later this could come from API / context)
  const appointments = {
    1: {
      doctor: "Dr. Maria Santos",
      specialty: "Pediatrics",
      date: "September 25, 2025",
      time: "10:30 AM",
      location: "BukCare Clinic, Room 205",
      notes: "Bring vaccination record for the child.",
      status: "Active",
    },
    2: {
      doctor: "Dr. John Ramirez",
      specialty: "General Practice",
      date: "October 5, 2025",
      time: "2:00 PM",
      location: "BukCare Clinic, Room 101",
      notes: "Fasting required before check-up.",
      status: "Active",
    },
  };

  const appt = appointments[id];

  if (!appt) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-lg">Appointment not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-600 to-blue-600 flex items-center justify-center p-6">
      <div className="bg-[#FFF8E7] rounded-xl shadow-lg w-full max-w-2xl p-8">
        <h1 className="text-2xl font-bold text-center text-gray-900 mb-6">
          Appointment Details
        </h1>

        <div className="space-y-3 text-gray-800">
          <p><strong>Doctor:</strong> {appt.doctor} ({appt.specialty})</p>
          <p><strong>Date:</strong> {appt.date}</p>
          <p><strong>Time:</strong> {appt.time}</p>
          <p><strong>Location:</strong> {appt.location}</p>
          <p><strong>Status:</strong> <span className="text-green-600">{appt.status}</span></p>
          <p><strong>Notes:</strong> {appt.notes}</p>
        </div>

        <div className="mt-6 flex justify-between">
          <button
            className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
            onClick={() => navigate(-1)}
          >
            ← Back
          </button>
          <button className="px-4 py-2 bg-yellow-400 text-white rounded-lg hover:bg-yellow-500">
            Request Reschedule
          </button>
        </div>
      </div>
    </div>
  );
}
