// import React, { useState } from "react";

// export default function RescheduleDialog({ onConfirm, onClose }) {
//   const [newDate, setNewDate] = useState("");
//   const [newTime, setNewTime] = useState("");

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black/50">
//       <div className="bg-white rounded-xl shadow-lg p-6 w-96">
//         <h2 className="text-lg font-semibold mb-4 text-center">
//           Request Reschedule
//         </h2>

//         <label className="block mb-2 text-sm">New Date</label>
//         <input
//           type="date"
//           value={newDate}
//           onChange={(e) => setNewDate(e.target.value)}
//           className="w-full px-3 py-2 border rounded-lg mb-4"
//         />

//         <label className="block mb-2 text-sm">New Time</label>
//         <input
//           type="time"
//           value={newTime}
//           onChange={(e) => setNewTime(e.target.value)}
//           className="w-full px-3 py-2 border rounded-lg mb-6"
//         />

//         <div className="flex justify-center gap-4">
//           <button
//             onClick={() => onConfirm(newDate, newTime)}
//             className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-400"
//           >
//             Submit
//           </button>
//           <button
//             onClick={onClose}
//             className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400"
//           >
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RescheduleDialog({ onConfirm }) {
  const [newDate, setNewDate] = useState("");
  const [newTime, setNewTime] = useState("");
  const [confirmation, setConfirmation] = useState(null);

  const navigate = useNavigate(); // ✅ allows redirect



  const handleSubmit = () => {
    if (!newDate || !newTime) {
      setConfirmation("⚠️ Please select a new date and time.");
      setTimeout(() => {
      setConfirmation(null);
      navigate("/patient/appointments"); // 🔗 go back to appointments page
    }, 2000);
    }

    // ✅ Call parent function to update appointment
    onConfirm(newDate, newTime);

    // ✅ Show success confirmation
    setConfirmation("✅ Your reschedule request has been submitted!");

    // ✅ Redirect back to appointments after 2s
    setTimeout(() => {
      setConfirmation(null);
      navigate("/patient/appointments"); // 🔗 go back to appointments page
    }, 2000);
  };

  const handleCancel = () => {
    setConfirmation("❌ Reschedule request cancelled.");
    setTimeout(() => {
      setConfirmation(null);
      navigate("/patient/appointments"); // 🔗 go back to appointments page
    }, 2000);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-xl shadow-lg p-6 w-96 text-center">
        {!confirmation ? (
          <>
            <h2 className="text-lg font-semibold mb-4">Request Reschedule</h2>

            <label className="block mb-2 text-sm text-left">New Date</label>
            <input
              type="date"
              value={newDate}
              onChange={(e) => setNewDate(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg mb-4"
            />

            <label className="block mb-2 text-sm text-left">New Time</label>
            <input
              type="time"
              value={newTime}
              onChange={(e) => setNewTime(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg mb-6"
            />

            <div className="flex justify-center gap-4">
              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-400"
              >
                Submit
              </button>
              <button
                onClick={handleCancel}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </>
        ) : (
          // ✅ Confirmation screen
          <div>
            <h2 className="text-lg font-semibold mb-4">Done</h2>
            <p className="text-gray-700">{confirmation}</p>
          </div>
        )}
      </div>
    </div>
  );
}
