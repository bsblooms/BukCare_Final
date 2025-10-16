

import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function MarkAsDone() {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirm = () => {
    const userConfirm = window.confirm(
      "Are you sure you want to mark this appointment as done?"
    );
    if (userConfirm) {
      setIsConfirmed(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#0A1D56] to-[#0B4CAD] text-white flex flex-col items-center justify-center px-6 py-10">
      {/* Back Link */}
      <Link
        to="/appointments"
        className="absolute top-8 left-8 text-sm underline text-[#FFD23F] hover:text-yellow-300 transition"
      >
        ← Back to Appointments
      </Link>

      {!isConfirmed ? (
        <>
          {/* Header */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-8">
            Mark Appointment <span className="text-[#FFD23F]">as Done</span>
          </h1>

          {/* Confirmation Card */}
          <div className="bg-white text-gray-800 shadow-2xl rounded-2xl p-8 w-full max-w-lg border-t-4 border-[#FFD23F] text-center">
            <h2 className="text-2xl font-bold text-[#0A1D56] mb-4">
              Confirm Completion
            </h2>
            <p className="text-gray-600 mb-8">
              Please confirm that this appointment has been successfully
              completed. This action cannot be undone.
            </p>

            <div className="flex justify-center gap-4">
              <Link
                to="/appointments"
                className="bg-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-400 transition"
              >
                Cancel
              </Link>
              <button
                onClick={handleConfirm}
                className="bg-[#0B4CAD] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#083a88] transition"
              >
                Mark as Done
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Success Message */}
          <div className="bg-white text-gray-800 shadow-2xl rounded-2xl p-8 w-full max-w-lg border-t-4 border-green-500 text-center">
            <h2 className="text-3xl font-bold text-green-600 mb-4">
              ✅ Appointment Completed!
            </h2>
            <p className="text-gray-600 mb-6">
              The appointment has been successfully marked as done.
            </p>
            <Link
              to="/patient/appointments"
              className="bg-[#FFD23F] text-[#0A1D56] px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
            >
              Back to Appointments
            </Link>
          </div>
        </>
      )}

      {/* Footer */}
      <footer className="mt-16 bg-[#0A1D56] w-full py-4 text-center text-gray-300 text-sm">
        © 2025 <span className="text-[#FFD23F]">BukCare</span>. All rights
        reserved.
      </footer>
    </div>
  );
}
