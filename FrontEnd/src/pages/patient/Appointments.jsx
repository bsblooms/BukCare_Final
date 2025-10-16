
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function AppointmentModule() {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      doctor: "Dr. Maria Santos - Pediatrics",
      date: "September 25, 2025",
      time: "10:30 AM",
      location: "BukCare Clinic, Room 205",
      status: "Active",
    },
    {
      id: 2,
      doctor: "Dr. John Ramirez - General Practice",
      date: "October 5, 2025",
      time: "2:00 PM",
      location: "BukCare Clinic, Room 101",
      status: "Active",
    },
  ]);

  const [showCancelDialog, setShowCancelDialog] = useState(false);
  const [showDoneDialog, setShowDoneDialog] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  // Cancel Appointment
  const handleCancelClick = (id) => {
    setSelectedId(id);
    setShowCancelDialog(true);
  };

  const confirmCancel = () => {
    setAppointments((prev) =>
      prev.map((appt) =>
        appt.id === selectedId ? { ...appt, status: "Cancelled" } : appt
      )
    );
    setShowCancelDialog(false);
    setSelectedId(null);
  };

  const closeCancelDialog = () => {
    setShowCancelDialog(false);
    setSelectedId(null);
  };

  // Mark Appointment as Done
  const handleMarkAsDoneClick = (id) => {
    setSelectedId(id);
    setShowDoneDialog(true);
  };

  const confirmMarkAsDone = () => {
    setAppointments((prev) =>
      prev.map((appt) =>
        appt.id === selectedId ? { ...appt, status: "Done" } : appt
      )
    );
    setShowDoneDialog(false);
    setSelectedId(null);
  };

  const closeDoneDialog = () => {
    setShowDoneDialog(false);
    setSelectedId(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A1D56] via-[#004AAD] to-[#0077FF] text-white">
      {/* Header */}
      <section className="text-center py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          Your <span className="text-[#FFD33D]">Appointments</span>
        </h1>
        <p className="mt-4 text-lg text-gray-200">
          Track and manage all your scheduled appointments here.
        </p>
      </section>

      {/* Back Button */}
      <a
        href="/patient/home"
        className="absolute top-10 left-10 text-sm underline hover:text-[#FFD33D] transition"
      >
        ← Back to Dashboard
      </a>

      {/* Appointment List */}
      <div className="max-w-3xl mx-auto bg-[#F8FAFC] text-[#0A1D56] rounded-2xl shadow-lg p-8 mb-20 border-t-4 border-[#FFD33D]">
        <h2 className="text-2xl font-bold text-center mb-8">
          Appointment Overview
        </h2>

        <div className="space-y-6">
          {appointments.map((appt) => (
            <div
              key={appt.id}
              className={`bg-white p-6 rounded-xl shadow-md border-l-4 transition ${
                appt.status === "Cancelled"
                  ? "border-red-500 opacity-70"
                  : appt.status === "Done"
                  ? "border-green-500"
                  : "border-[#004AAD]"
              }`}
            >
              <h2 className="text-xl font-semibold">{appt.doctor}</h2>
              <p className="text-sm mt-2">📅 Date: {appt.date}</p>
              <p className="text-sm">⏰ Time: {appt.time}</p>
              <p className="text-sm">📍 Location: {appt.location}</p>
              <p className="mt-2 font-semibold">
                Status:{" "}
                <span
                  className={`${
                    appt.status === "Cancelled"
                      ? "text-red-600"
                      : appt.status === "Done"
                      ? "text-green-600"
                      : "text-[#004AAD]"
                  }`}
                >
                  {appt.status === "Done" ? "Completed ✅" : appt.status}
                </span>
              </p>

              {/* Buttons Section */}
              <div className="flex flex-wrap gap-3 mt-4">
                {appt.status === "Active" && (
                  <>
                    <button
                      onClick={() => handleCancelClick(appt.id)}
                      className="flex-1 text-center px-6 py-3 bg-red-600 text-white font-semibold rounded-xl shadow-md hover:bg-red-700 hover:shadow-lg transition-all duration-200"
                    >
                      Cancel Appointment
                    </button>

                    <Link
                      to="/patient/reschedule"
                      className="flex-1 text-center px-6 py-3 bg-[#FFD33D] text-[#0A1D56] font-semibold rounded-xl shadow-md hover:bg-[#FDCB45] hover:shadow-lg transition-all duration-200"
                    >
                      Request Reschedule
                    </Link>

                    <button
                      onClick={() => handleMarkAsDoneClick(appt.id)}
                      className="flex-1 text-center px-6 py-3 bg-[#0077FF] text-white font-semibold rounded-xl shadow-md hover:bg-[#005FD0] hover:shadow-lg transition-all duration-200"
                    >
                      Mark as Done
                    </button>
                  </>
                )}

                {appt.status === "Done" && (
                  <span className="text-green-600 font-bold text-lg flex items-center">
                    ✅ Appointment Completed
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cancel Confirmation */}
      {showCancelDialog && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-80 text-center text-[#0A1D56]">
            <h2 className="text-lg font-bold mb-4">Cancel Appointment?</h2>
            <p className="text-sm text-gray-600 mb-6">
              Are you sure you want to cancel this appointment?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={confirmCancel}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500 transition"
              >
                Yes, Cancel
              </button>
              <button
                onClick={closeCancelDialog}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition"
              >
                No, Go Back
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mark as Done Confirmation */}
      {showDoneDialog && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-80 text-center text-[#0A1D56]">
            <h2 className="text-lg font-bold mb-4">Mark as Done?</h2>
            <p className="text-sm text-gray-600 mb-6">
              Confirm that this appointment has been completed.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={confirmMarkAsDone}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500 transition"
              >
                Yes, Mark Done
              </button>
              <button
                onClick={closeDoneDialog}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition"
              >
                No, Go Back
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="w-full bg-[#0A1D56] py-6 text-center text-[#FFD33D]">
        © 2025 BukCare. All rights reserved.
      </footer>
    </div>
  );
}
