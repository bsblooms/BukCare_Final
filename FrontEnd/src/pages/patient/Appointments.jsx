
// import React from "react";
// import { Link } from "react-router-dom";

// export default function AppointmentModule() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#141E46] via-[#41B06E] to-[#8DECB4] text-[#FFF5E0] px-10 py-20">
//       {/* Back Button */}
//       <Link
//         to="/patient/addappointments"
//         className="absolute top-10 left-10 text-sm underline"
//       >
//         ← Back to Appointment Scheduling
//       </Link>

//       <div className="bg-[#FFF5E0] text-[#141E46] rounded-2xl shadow-lg max-w-5xl mx-auto p-10">
//         {/* Header */}
//         <h1 className="text-3xl font-bold text-center mb-6 ">
//           Your Appointments
//         </h1>
//         <p className="text-center mb-10">
//           Track and manage all your scheduled appointments here.
//         </p>

//         {/* Appointment List */}
//         <div className="space-y-6">
//           {/* Appointment 1 */}
//           <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#41B06E]">
//             <h2 className="text-xl font-semibold">
//               Dr. Maria Santos - Pediatrics
//             </h2>
//             <p className="text-sm mt-2">📅 Date: September 25, 2025</p>
//             <p className="text-sm">⏰ Time: 10:30 AM</p>
//             <p className="text-sm">📍 Location: BukCare Clinic, Room 205</p>

//             <div className="flex flex-wrap gap-3 mt-4">
//               <button className="px-4 py-2 bg-[#41B06E] text-white rounded-lg hover:bg-[#8DECB4] hover:text-[#141E46] transition">
//                 Cancel Appointment
//               </button>
//               <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-400 transition">
//                 Request Reschedule
//               </button>
//               <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400 transition">
//                 View
//               </button>
//             </div>
//           </div>

//           {/* Appointment 2 */}
//           <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#8DECB4]">
//             <h2 className="text-xl font-semibold">
//               Dr. John Ramirez - General Practice
//             </h2>
//             <p className="text-sm mt-2">📅 Date: October 5, 2025</p>
//             <p className="text-sm">⏰ Time: 2:00 PM</p>
//             <p className="text-sm">📍 Location: BukCare Clinic, Room 101</p>

//             <div className="flex flex-wrap gap-3 mt-4">
//               <button className="px-4 py-2 bg-[#41B06E] text-white rounded-lg hover:bg-[#8DECB4] hover:text-[#141E46] transition">
//                 Cancel Appointment
//               </button>
//               <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-400 transition">
//                 Request Reschedule
//               </button>
//               <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400 transition">
//                 View
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// export default function AppointmentModule() {
//   const [appointments, setAppointments] = useState([
//     {
//       id: 1,
//       doctor: "Dr. Maria Santos - Pediatrics",
//       date: "September 25, 2025",
//       time: "10:30 AM",
//       location: "BukCare Clinic, Room 205",
//       status: "Active",
//     },
//     {
//       id: 2,
//       doctor: "Dr. John Ramirez - General Practice",
//       date: "October 5, 2025",
//       time: "2:00 PM",
//       location: "BukCare Clinic, Room 101",
//       status: "Active",
//     },
//   ]);

//   const [showDialog, setShowDialog] = useState(false);
//   const [selectedId, setSelectedId] = useState(null);

//   // Open confirmation dialog
//   const handleCancelClick = (id) => {
//     setSelectedId(id);
//     setShowDialog(true);
//   };

//   // Confirm cancel
//   const confirmCancel = () => {
//     setAppointments((prev) =>
//       prev.map((appt) =>
//         appt.id === selectedId ? { ...appt, status: "Cancelled" } : appt
//       )
//     );
//     setShowDialog(false);
//     setSelectedId(null);
//   };

//   // Cancel closing without action
//   const closeDialog = () => {
//     setShowDialog(false);
//     setSelectedId(null);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#141E46] via-[#41B06E] to-[#8DECB4] text-[#FFF5E0] px-10 py-20 relative">
//       {/* Back Button */}
//       <Link
//         to="/patient/addappointments"
//         className="absolute top-10 left-10 text-sm underline"
//       >
//         ← Back to Appointment Scheduling
//       </Link>

//       <div className="bg-[#FFF5E0] text-[#141E46] rounded-2xl shadow-lg max-w-5xl mx-auto p-10">
//         {/* Header */}
//         <h1 className="text-3xl font-bold text-center mb-6 ">
//           Your Appointments
//         </h1>
//         <p className="text-center mb-10">
//           Track and manage all your scheduled appointments here.
//         </p>

//         {/* Appointment List */}
//         <div className="space-y-6">
//           {appointments.map((appt) => (
//             <div
//               key={appt.id}
//               className={`bg-white p-6 rounded-xl shadow-md border-l-4 ${
//                 appt.status === "Cancelled"
//                   ? "border-red-500 opacity-70"
//                   : "border-[#41B06E]"
//               }`}
//             >
//               <h2 className="text-xl font-semibold">{appt.doctor}</h2>
//               <p className="text-sm mt-2">📅 Date: {appt.date}</p>
//               <p className="text-sm">⏰ Time: {appt.time}</p>
//               <p className="text-sm">📍 Location: {appt.location}</p>
//               <p className="mt-2 font-semibold">
//                 Status:{" "}
//                 <span
//                   className={`${
//                     appt.status === "Cancelled"
//                       ? "text-red-500"
//                       : "text-green-600"
//                   }`}
//                 >
//                   {appt.status}
//                 </span>
//               </p>

//               <div className="flex flex-wrap gap-3 mt-4">
//                 {appt.status !== "Cancelled" && (
//                   <>
//                     <button
//                       onClick={() => handleCancelClick(appt.id)}
//                       className="px-4 py-2 bg-[#41B06E] text-white rounded-lg hover:bg-[#8DECB4] hover:text-[#141E46] transition"
//                     >
//                       Cancel Appointment
//                     </button>
//                     <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-400 transition">
//                       Request Reschedule
//                     </button>
//                     <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400 transition">
//                       View
//                     </button>
//                   </>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Confirmation Dialog */}
//       {showDialog && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black/50">
//           <div className="bg-white rounded-xl shadow-lg p-6 w-80 text-center">
//             <h2 className="text-lg font-semibold mb-4">
//               Cancel Appointment?
//             </h2>
//             <p className="text-sm text-gray-600 mb-6">
//               Are you sure you want to cancel this appointment?
//             </p>
//             <div className="flex justify-center gap-4">
//               <button
//                 onClick={confirmCancel}
//                 className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-400"
//               >
//                 Yes, Cancel
//               </button>
//               <button
//                 onClick={closeDialog}
//                 className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400"
//               >
//                 No, Go Back
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
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

  const [showDialog, setShowDialog] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  // Open confirmation dialog
  const handleCancelClick = (id) => {
    setSelectedId(id);
    setShowDialog(true);
  };

  // Confirm cancel
  const confirmCancel = () => {
    setAppointments((prev) =>
      prev.map((appt) =>
        appt.id === selectedId ? { ...appt, status: "Cancelled" } : appt
      )
    );
    setShowDialog(false);
    setSelectedId(null);
  };

  // Cancel closing without action
  const closeDialog = () => {
    setShowDialog(false);
    setSelectedId(null);
  };
  return (
    // bg-white rounded-2xl shadow-lg p-6 text-center
    <div className="min-h-screen bg-white text-[#FFF5E0] text-center">
      <section className="bg-gradient-to-r from-green-600 to-blue-600 p-6 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mt-10 ">
          Your <span className="text-[#141E46]">Appointments</span>
        </h1>
        <p className="mt-3 text-lg text-gray-800/80"> 
          Track and manage all your scheduled appointments here. 
        </p>
      </section>
      
      {/* Back Button */}
      {/* <Link
        to="/patient/addappointments"
        className="absolute top-10 left-10 text-sm underline"
      >
        ← Back to Appointment Scheduling
      </Link> */}
      {/* Back Button */}
      <a
        href="/patient/home"
        className="absolute top-10 left-10 text-sm underline"
      >
        ← Back to Dashboard
      </a>
      
        

      <div className="mt-25 max-w-3xl mx-auto bg-white text-[#141E46] text-left rounded-2xl shadow-lg p-8 space-y-6 border-t-4 border-[#41B06E] hover:shadow-x5 transition">
        {/* Header
        <h1 className="text-3xl font-bold text-center mb-6 ">
          Your Appointments
        </h1>
        <p className="text-center mb-10">
          Track and manage all your scheduled appointments here.
        </p> */}

        {/* Appointment List */}
        <div className="space-y-6">
          {appointments.map((appt) => (
            <div
              key={appt.id}
              className={`bg-white p-6 rounded-xl shadow-md border-l-4 ${
                appt.status === "Cancelled"
                  ? "border-red-500 opacity-70"
                  : "border-[#41B06E]"
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
                      ? "text-red-500"
                      : "text-green-600"
                  }`}
                >
                  {appt.status}
                </span>
              </p>

              <div className="flex flex-wrap gap-3 mt-4">
                {appt.status !== "Cancelled" && (
                  <>
                    <button
                      onClick={() => handleCancelClick(appt.id)}
                      className="px-4 py-2 bg-[#41B06E] text-white rounded-lg hover:bg-[#8DECB4] hover:text-[#141E46] transition"
                    >
                      Cancel Appointment
                    </button>
                  
                    <Link
                  to="/patient/reschedule" // 🔗 adjust path to your reschedule page
                      className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-400 transition inline-block text-center"
>
                       Request Reschedule
</Link>
                    {/* <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400 transition">
                      View
                    </button> */}
                    {/* <button
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                  onClick={() => navigate(`/appointments/${appt.id}`)}
                >
                  View
                </button> */}
                <Link
                  to="/patient/appointmentview" // 🔗 path to view appointments
                      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
>
                       View
</Link>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Confirmation Dialog */}
      {showDialog && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-80 text-center">
            <h2 className="text-lg font-semibold mb-4">
              Cancel Appointment?
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              Are you sure you want to cancel this appointment?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={confirmCancel}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-400"
              >
                Yes, Cancel
              </button>
              <button
                onClick={closeDialog}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400"
              >
                No, Go Back
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// // src/pages/patient/NotifyMe.jsx
// import React from "react";
// import { useNavigate } from "react-router-dom";

// export default function NotifyMe() {
//   const navigate = useNavigate();

//   const notifications = [
//     {
//       id: 1,
//       doctor: "Dr. Maria Santos",
//       specialty: "Pediatrics",
//       date: "September 25, 2025",
//       time: "10:30 AM",
//       location: "BukCare Clinic, Room 205",
//       status: "Active",
//     },
//     {
//       id: 2,
//       doctor: "Dr. John Ramirez",
//       specialty: "General Practice",
//       date: "October 5, 2025",
//       time: "2:00 PM",
//       location: "BukCare Clinic, Room 101",
//       status: "Active",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-green-600 to-blue-600 flex items-center justify-center p-6">
//       <div className="bg-[#FFF8E7] rounded-xl shadow-lg w-full max-w-3xl p-8">
//         <h1 className="text-2xl font-bold text-center mb-6 text-gray-900">
//           Your Appointments
//         </h1>
//         <p className="text-center text-gray-600 mb-8">
//           Track and manage all your scheduled appointments here.
//         </p>

//         <div className="space-y-6">
//           {notifications.map((appt) => (
//             <div
//               key={appt.id}
//               className="bg-white rounded-lg shadow p-5 hover:shadow-md transition"
//             >
//               <h2 className="font-semibold text-lg text-gray-900">
//                 {appt.doctor} - {appt.specialty}
//               </h2>
//               <p className="text-sm text-gray-700 mt-2">
//                 📅 {appt.date} | ⏰ {appt.time}
//               </p>
//               <p className="text-sm text-gray-700">📍 {appt.location}</p>
//               <p className="mt-2 text-sm">
//                 Status: <span className="text-green-600 font-semibold">{appt.status}</span>
//               </p>

//               <div className="mt-4 flex gap-3">
//                 <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
//                   Cancel Appointment
//                 </button>
//                 <button className="px-4 py-2 bg-yellow-400 text-white rounded-lg hover:bg-yellow-500">
//                   Request Reschedule
//                 </button>
//                 <button
//                   className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//                   onClick={() => navigate(`/appointments/${appt.id}`)}
//                 >
//                   View
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
