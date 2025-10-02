// // src/pages/staff/Appointments.jsx
// import Navbar from '../../components/Navbar';

// export default function Appointments() {
//   return (
//     <div>
//       <Navbar role="staff" />
//       <h1 className="text-2xl font-bold mt-4">Staff Appointments</h1>
//       <p>Manage and view all appointments for patients and doctors.</p>
//     </div>
//   );
// }

import React from "react";

export default function NotifyMe() {
  const bookedAppointments = [
    {
      id: 1,
      fullName: "Naruto Uzumaki",
      age: 20,
      civilStatus: "Single",
      address: "Konoha Village",
      doctor: "Dr. Smith",
      date: "2025-09-12",
      time: "3:00 PM",
      note: "Follow-up checkup",
      type: "scheduled",
      status: "new",
    },
    {
      id: 2,
      fullName: "Sakura Haruno",
      age: 21,
      civilStatus: "Single",
      address: "Konoha Village",
      doctor: "Dr. Johnson",
      date: "2025-09-14",
      time: "10:00 AM",
      note: "Routine consultation",
      type: "approved",
      status: "new",
    },
    {
      id: 3,
      fullName: "Sasuke Uchiha",
      age: 22,
      civilStatus: "Married",
      address: "Sound Village",
      doctor: "Dr. Lee",
      date: "2025-09-15",
      time: "1:00 PM",
      note: "Back pain consultation",
      type: "rescheduled",
      status: "past",
    },
  ];

  const typeColors = {
    scheduled: "border-l-4 border-[#41B06E]", // green
    approved: "border-l-4 border-[#0ea5e9]", // blue
    rescheduled: "border-l-4 border-yellow-400", // yellow
    canceled: "border-l-4 border-red-500", // red
  };

  return (
    <div className="min-h-screen bg-[#FFF8E7] text-gray-800 flex flex-col">
      {/* Back Button */}
      <a
        href="/staff/home/"
        className="absolute top-10 left-10 text-sm underline text-white"
      >
        ← Back to Dashboard
      </a>

      {/* Header */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 p-6 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mt-10 ">
          Booked <span className="text-[#141E46]">Appointments</span>
        </h1>
        <p className="mt-3 text-lg text-gray-800/80">
          Review your confirmed appointments with BukCare.
        </p>
      </section>

      {/* Appointments */}
      <section className="px-6 md:px-10 py-2 flex-1 max-w-3xl mx-auto w-full space-y-5">
        {/* Legend Section */}
        <div className="mt-8">
          <h3 className="text-lg font-bold mb-3 text-gray-900">Legend</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded bg-[#41B06E]"></span> Scheduled
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded bg-[#0ea5e9]"></span> Approved
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded bg-yellow-400"></span> Rescheduled
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded bg-red-500"></span> Canceled
            </div>
          </div>
        </div>
        {/* Upcoming Appointments */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Upcoming Appointments
          </h2>
          <div className="space-y-3">
            {bookedAppointments
              .filter((appt) => appt.status === "new")
              .map((appt) => (
                <div
                  key={appt.id}
                  className={`rounded-lg shadow-sm hover:shadow-md transition-all duration-200 p-4 bg-white border ${typeColors[appt.type]}`}
                >
                  {/* Line 1 */}
                  <p className="font-semibold text-gray-800">
                    {appt.fullName} with {appt.doctor} ({appt.type})
                  </p>
                  {/* Line 2 */}
                  <p className="text-sm text-gray-600">
                    {appt.date} at {appt.time} — {appt.note || "No notes"}
                  </p>
                </div>
              ))}
          </div>
        </div>

        {/* Past Appointments */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Past Appointments
          </h2>
          <div className="space-y-3">
            {bookedAppointments
              .filter((appt) => appt.status === "past")
              .map((appt) => (
                <div
                  key={appt.id}
                  className={`rounded-lg shadow-sm hover:shadow-md transition-all duration-200 p-4 bg-white border ${typeColors[appt.type]}`}
                >
                  {/* Line 1 */}
                  <p className="font-semibold text-gray-800">
                    {appt.fullName} with {appt.doctor} ({appt.type})
                  </p>
                  {/* Line 2 */}
                  <p className="text-sm text-gray-600">
                    {appt.date} at {appt.time} — {appt.note || "No notes"}
                  </p>
                </div>
              ))}
          </div>
        </div>

        
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-green-600 to-blue-600 p-6 text-white text-center">
        © 2025 BukCare. All rights reserved.
      </footer>
    </div>
  );
}
