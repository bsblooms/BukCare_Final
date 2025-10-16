
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RescheduleDialog({ onConfirm }) {
  const [newDate, setNewDate] = useState("");
  const [newTime, setNewTime] = useState("");
  const [confirmation, setConfirmation] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!newDate || !newTime) {
      setConfirmation("⚠️ Please select a new date and time.");
      setTimeout(() => {
        setConfirmation(null);
        navigate("/staff/appointments");
      }, 2000);
      return;
    }

    onConfirm(newDate, newTime);
    setConfirmation("✅ Your reschedule request has been submitted!");
    setTimeout(() => {
      setConfirmation(null);
      navigate("/staff/appointments");
    }, 2000);
  };

  const handleCancel = () => {
    setConfirmation("❌ Reschedule request cancelled.");
    setTimeout(() => {
      setConfirmation(null);
      navigate("/staff/appointments");
    }, 2000);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-b from-[#002366] via-[#004AAD] to-[#0077FF]">
      <div className="bg-white text-[#0A1D56] rounded-2xl shadow-2xl p-8 w-[420px] text-center border border-gray-200">
        {!confirmation ? (
          <>
            <h2 className="text-2xl font-bold text-[#004AAD] mb-6">
              Request Reschedule
            </h2>

            <div className="text-left mb-4">
              <label className="block text-sm font-medium text-gray-600 mb-2">
                New Date
              </label>
              <input
                type="date"
                value={newDate}
                onChange={(e) => setNewDate(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FFD33D] outline-none"
              />
            </div>

            <div className="text-left mb-8">
              <label className="block text-sm font-medium text-gray-600 mb-2">
                New Time
              </label>
              <input
                type="time"
                value={newTime}
                onChange={(e) => setNewTime(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FFD33D] outline-none"
              />
            </div>

            <div className="flex justify-center gap-4">
              <button
                onClick={handleSubmit}
                className="px-6 py-3 bg-[#FFD33D] text-[#0A1D56] font-semibold rounded-xl hover:bg-[#FDCB45] hover:scale-105 transition-all duration-200 shadow-md"
              >
                Submit
              </button>
              <button
                onClick={handleCancel}
                className="px-6 py-3 bg-[#D32F2F] text-white font-semibold rounded-xl hover:bg-[#b71c1c] hover:scale-105 transition-all duration-200 shadow-md"
              >
                Cancel
              </button>
            </div>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-xl font-semibold text-[#004AAD] mb-4">Done</h2>
            <p className="text-gray-700">{confirmation}</p>
          </div>
        )}
      </div>
    </div>
  );
}
