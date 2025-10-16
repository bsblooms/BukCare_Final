

// import React from "react";

// export default function NotifyMe() {
//   const notifications = [
//     {
//       id: 1,
//       title: "Appointment Scheduled",
//       message:
//         "Your appointment with Dr. Smith has been scheduled for Sept 12, 2025 at 3:00 PM.",
//       type: "scheduled",
//       status: "new",
//     },
//     {
//       id: 2,
//       title: "Appointment Approved",
//       message:
//         "Your request for an appointment with Dr. Johnson has been approved.",
//       type: "approved",
//       status: "new",
//     },
//     {
//       id: 3,
//       title: "Appointment Rescheduled",
//       message:
//         "Your appointment has been moved to Sept 15, 2025 at 10:00 AM.",
//       type: "rescheduled",
//       status: "past",
//     },
//     {
//       id: 4,
//       title: "Appointment Canceled",
//       message:
//         "Your appointment with Dr. Lee on Sept 14, 2025 has been canceled.",
//       type: "canceled",
//       status: "past",
//     },
//   ];

//   const typeColors = {
//     scheduled: "border-l-4 border-[#41B06E]", // green
//     approved: "border-l-4 border-[#0ea5e9]", // blue
//     rescheduled: "border-l-4 border-yellow-400", // yellow
//     canceled: "border-l-4 border-red-500", // red
//   };

//   return (
//     <div className="min-h-screen bg-[#FFF8E7] text-gray-800 flex flex-col">
//       {/* Back Button */}
//       <a
//         href="/patient/home/"
//         className="absolute top-10 left-10 text-sm underline text-white"
//       >
//         ← Back to Dashboard
//       </a>

//       {/* Header */}
//       <section className="bg-gradient-to-r from-green-600 to-blue-600 p-6 text-white text-center">
//         <h1 className="text-4xl md:text-5xl font-extrabold mt-10 ">
//           Appointment <span className="text-[#141E46]">Notifications</span>
//         </h1>
//         <p className="mt-3 text-lg text-gray-800/80">
//           Stay updated with the latest status of your medical appointments.
//         </p>
//       </section>

//       {/* Notifications */}
//       <section className="px-6 md:px-20 py-12 flex-1 max-w-4xl mx-auto w-full space-y-10">
//         {/* Legend Section */}
//         <div className="mt-1">
//           <h3 className="text-lg font-bold mb-3 text-gray-900">Legend</h3>
//           <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
//             <div className="flex items-center gap-2">
//               <span className="w-4 h-4 rounded bg-[#41B06E]"></span> Scheduled
//             </div>
//             <div className="flex items-center gap-2">
//               <span className="w-4 h-4 rounded bg-[#0ea5e9]"></span> Approved
//             </div>
//             <div className="flex items-center gap-2">
//               <span className="w-4 h-4 rounded bg-yellow-400"></span> Rescheduled
//             </div>
//             <div className="flex items-center gap-2">
//               <span className="w-4 h-4 rounded bg-red-500"></span> Canceled
//             </div>
//           </div>
//         </div>
//         {/* New Notifications */}
//         <div>
//           <h2 className="text-xl font-bold text-gray-900 mb-4">
//             New Notifications
//           </h2>
//           <div className="space-y-3">
//             {notifications
//               .filter((note) => note.status === "new")
//               .map((note) => (
//                 <div
//                   key={note.id}
//                   className={`flex items-center justify-between rounded-lg shadow-sm hover:shadow-md transition-all duration-200 p-4 bg-white border ${typeColors[note.type]}`}
//                 >
//                   <p className="text-sm text-gray-700">
//                     <span className="font-semibold">{note.title}:</span>{" "}
//                     {note.message}
//                   </p>
//                 </div>
//               ))}
//           </div>
//         </div>

//         {/* Past Notifications */}
//         <div>
//           <h2 className="text-xl font-bold text-gray-900 mb-4">
//             History
//           </h2>
//           <div className="space-y-3">
//             {notifications
//               .filter((note) => note.status === "past")
//               .map((note) => (
//                 <div
//                   key={note.id}
//                   className={`flex items-center justify-between rounded-lg shadow-sm hover:shadow-md transition-all duration-200 p-4 bg-white border ${typeColors[note.type]}`}
//                 >
//                   <p className="text-sm text-gray-600">
//                     <span className="font-semibold">{note.title}:</span>{" "}
//                     {note.message}
//                   </p>
//                 </div>
//               ))}
//           </div>
//         </div>
//       </section>

//        {/* Footer */}
//         <footer className="bg-gradient-to-r from-green-600 to-blue-600 p-6 text-white text-center">
//           © 2025 BukCare. All rights reserved.
//         </footer>
//     </div>
//   );
// }

import React from "react";

export default function NotifyMe() {
  const notifications = [
    {
      id: 1,
      title: "Appointment Scheduled",
      message:
        "Your appointment with Dr. Smith has been scheduled for Sept 12, 2025 at 3:00 PM.",
      type: "scheduled",
      status: "new",
    },
    {
      id: 2,
      title: "Appointment Approved",
      message:
        "Your request for an appointment with Dr. Johnson has been approved.",
      type: "approved",
      status: "new",
    },
    {
      id: 3,
      title: "Appointment Rescheduled",
      message:
        "Your appointment has been moved to Sept 15, 2025 at 10:00 AM.",
      type: "rescheduled",
      status: "past",
    },
    {
      id: 4,
      title: "Appointment Canceled",
      message:
        "Your appointment with Dr. Lee on Sept 14, 2025 has been canceled.",
      type: "canceled",
      status: "past",
    },
  ];

  const typeColors = {
    scheduled: "border-l-8 border-[#41B06E]", // green
    approved: "border-l-8 border-[#0ea5e9]", // blue
    rescheduled: "border-l-8 border-yellow-400", // yellow
    canceled: "border-l-8 border-red-500", // red
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#0A1D56] to-[#0B4CAD] text-white flex flex-col">
      {/* Back Button */}
      <a
        href="/patient/home/"
        className="absolute top-8 left-8 text-sm underline text-[#FFD23F] hover:text-yellow-300 transition"
      >
        ← Back to Dashboard
      </a>

      {/* Header */}
      <section className="p-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mt-10">
          Appointment <span className="text-[#FFD23F]">Notifications</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200/90">
          Stay updated with the latest status of your medical appointments.
        </p>
      </section>

      {/* Notifications */}
      <section className="px-6 md:px-20 py-12 flex-1 max-w-5xl mx-auto w-full space-y-14">
        {/* Legend */}
        <div className="mt-1">
          <h3 className="text-2xl font-bold mb-5 text-[#FFD23F]">Legend</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-base">
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded bg-[#41B06E]"></span> Scheduled
            </div>
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded bg-[#0ea5e9]"></span> Approved
            </div>
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded bg-yellow-400"></span> Rescheduled
            </div>
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded bg-red-500"></span> Canceled
            </div>
          </div>
        </div>

        {/* New Notifications */}
        <div>
          <h2 className="text-2xl font-bold text-[#FFD23F] mb-6">
            New Notifications
          </h2>
          <div className="space-y-6">
            {notifications
              .filter((note) => note.status === "new")
              .map((note) => (
                <div
                  key={note.id}
                  className={`rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-6 md:p-8 bg-white/10 backdrop-blur-md border ${typeColors[note.type]}`}
                >
                  <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
                    <span className="font-bold text-[#FFD23F]">
                      {note.title}:
                    </span>{" "}
                    {note.message}
                  </p>
                </div>
              ))}
          </div>
        </div>

        {/* Past Notifications */}
        <div>
          <h2 className="text-2xl font-bold text-[#FFD23F] mb-6">History</h2>
          <div className="space-y-6">
            {notifications
              .filter((note) => note.status === "past")
              .map((note) => (
                <div
                  key={note.id}
                  className={`rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-6 md:p-8 bg-white/10 backdrop-blur-md border ${typeColors[note.type]}`}
                >
                  <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                    <span className="font-bold text-[#FFD23F]">
                      {note.title}:
                    </span>{" "}
                    {note.message}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A1D56] p-6 text-center text-gray-300 text-base md:text-lg">
        © 2025 <span className="text-[#FFD23F]">BukCare</span>. All rights
        reserved.
      </footer>
    </div>
  );
}
