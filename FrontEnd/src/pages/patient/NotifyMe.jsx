// import React from "react";

// export default function NotifyMe() {
//   const notifications = [
//     {
//       id: 1,
//       title: "Appointment Scheduled",
//       message:
//         "Your appointment with Dr. Smith has been scheduled for Sept 12, 2025 at 3:00 PM.",
//       type: "scheduled",
//     },
//     {
//       id: 2,
//       title: "Appointment Approved",
//       message:
//         "Your request for an appointment with Dr. Johnson has been approved.",
//       type: "approved",
//     },
//     {
//       id: 3,
//       title: "Appointment Rescheduled",
//       message:
//         "Your appointment has been moved to Sept 15, 2025 at 10:00 AM.",
//       type: "rescheduled",
//     },
//     {
//       id: 4,
//       title: "Appointment Canceled",
//       message:
//         "Your appointment with Dr. Lee on Sept 14, 2025 has been canceled.",
//       type: "canceled",
//     },
//   ];

//   const typeColors = {
//     scheduled: "border-l-8 border-[#41B06E]", // green
//     approved: "border-l-8 border-[#0ea5e9]", // blue
//     rescheduled: "border-l-8 border-yellow-400", // yellow
//     canceled: "border-l-8 border-red-500", // red
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#141E46] via-[#41B06E] to-[#8DECB4] text-[#141E46]">
//       {/* Back Button */}
//       <a
//         href="/patient/home/"
//         className="absolute top-6 left-6 text-sm underline text-white"
//       >
//         ← Back to Home
//       </a>

//       {/* Header */}
//       <section className="text-center py-15 bg-[#41B06E] shadow-md">
//         <h1 className="text-4xl md:text-5xl font-extrabold ml-2 mb-7">
//           Appointment <span className="text-4xl md:text-5xl font-extrabold ml-3 mb-10">Notifications</span>
//         </h1>
//         <p className="mt-3 text-lg text-[#141E46]/80">
//           Stay updated with the latest status of your medical appointments.
//         </p>
//       </section>

//       {/* Notifications */}
//       <section className="px-6 md:px-20 py-12">
//         <div className="max-w-2xl mx-auto space-y-6">
//           {notifications.map((note) => (
//             <div
//               key={note.id}
//               className={`rounded-lg shadow-md p-5 bg-[#FFF5E0] ${typeColors[note.type]}`}
//             >
//               <h2 className="text-lg font-semibold">{note.title}</h2>
//               <p className="text-sm mt-1 opacity-80">{note.message}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-[#141E46] py-6 text-center text-[#FFF5E0]/80 text-sm">
//         © 2025 BukCare. All rights reserved.
//       </footer>
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
    scheduled: "border-l-4 border-[#41B06E]", // green
    approved: "border-l-4 border-[#0ea5e9]", // blue
    rescheduled: "border-l-4 border-yellow-400", // yellow
    canceled: "border-l-4 border-red-500", // red
  };

  return (
    <div className="min-h-screen bg-[#FFF8E7] text-gray-800 flex flex-col">
      {/* Back Button */}
      <a
        href="/patient/home/"
        className="absolute top-10 left-10 text-sm underline text-white"
      >
        ← Back to Dashboard
      </a>

      {/* Header */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 p-6 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mt-10 ">
          Appointment <span className="text-[#141E46]">Notifications</span>
        </h1>
        <p className="mt-3 text-lg text-gray-800/80">
          Stay updated with the latest status of your medical appointments.
        </p>
      </section>

      {/* Notifications */}
      <section className="px-6 md:px-20 py-12 flex-1 max-w-4xl mx-auto w-full space-y-10">
        {/* Legend Section */}
        <div className="mt-1">
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
        {/* New Notifications */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            New Notifications
          </h2>
          <div className="space-y-3">
            {notifications
              .filter((note) => note.status === "new")
              .map((note) => (
                <div
                  key={note.id}
                  className={`flex items-center justify-between rounded-lg shadow-sm hover:shadow-md transition-all duration-200 p-4 bg-white border ${typeColors[note.type]}`}
                >
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">{note.title}:</span>{" "}
                    {note.message}
                  </p>
                </div>
              ))}
          </div>
        </div>

        {/* Past Notifications */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            History
          </h2>
          <div className="space-y-3">
            {notifications
              .filter((note) => note.status === "past")
              .map((note) => (
                <div
                  key={note.id}
                  className={`flex items-center justify-between rounded-lg shadow-sm hover:shadow-md transition-all duration-200 p-4 bg-white border ${typeColors[note.type]}`}
                >
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">{note.title}:</span>{" "}
                    {note.message}
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
