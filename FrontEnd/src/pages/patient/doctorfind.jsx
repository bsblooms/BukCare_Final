 import React, { useState } from "react";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function DoctorFind() {
  const [search, setSearch] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const doctors = [
    {
      id: 1,
      name: "Dr. Maria Santos",
      specialty: "Cardiologist",
      hospital: "BukCare Medical Center",
      image: "https://via.placeholder.com/150x150.png?text=Doctor+1",
      profile: "Dr. Santos has 10+ years of experience in treating cardiovascular diseases.",
      contact: "maria.santos@bukcare.com | 0917-123-4567",
      schedule: [
        { day: "Monday", time: "8:00 AM - 2:00 PM", onDuty: true },
        { day: "Wednesday", time: "1:00 PM - 6:00 PM", onDuty: false },
        { day: "Friday", time: "9:00 AM - 3:00 PM", onDuty: false },
      ],
      appointments: {
        booked: ["2025-09-25 09:00", "2025-09-25 10:00"],
        slots: ["2025-09-25 11:00", "2025-09-25 01:00"],
      },
    },
    {
      id: 2,
      name: "Dr. John Reyes",
      specialty: "Pediatrician",
      hospital: "BukCare Children’s Clinic",
      image: "https://via.placeholder.com/150x150.png?text=Doctor+2",
      profile: "Specialist in child health and development for over 8 years.",
      contact: "john.reyes@bukcare.com | 0918-555-8899",
      schedule: [
        { day: "Tuesday", time: "9:00 AM - 4:00 PM", onDuty: true },
        { day: "Thursday", time: "10:00 AM - 5:00 PM", onDuty: false },
      ],
      appointments: {
        booked: ["2025-09-26 10:00"],
        slots: ["2025-09-26 11:00", "2025-09-26 02:00"],
      },
    },
  ];

  const filteredDoctors = doctors.filter((doc) =>
    doc.name.toLowerCase().includes(search.toLowerCase())
  );

  const getSlotsForDate = (doc, date) => {
    const dateStr = date.toISOString().split("T")[0];
    const booked = doc.appointments.booked.filter((a) => a.startsWith(dateStr));
    const available = doc.appointments.slots.filter((a) =>
      a.startsWith(dateStr)
    );
    return { booked, available };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A2342] via-[#004E92] to-[#0074E4] text-white">
      {/* Back Button */}
      <Link to="/patient/home/" className="absolute top-10 left-10 text-sm underline text-[#F9B208]">
        ← Back to Dashboard
      </Link>

      <div className="min-h-screen text-white">
        {/* Header */}
        <section className="bg-gradient-to-r from-[#001F54] to-[#003E80] p-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mt-10">
            Find Available <span className="text-[#F9B208]">Doctor</span>
          </h1>
          <p className="mt-3 text-lg text-gray-200">
            Search and connect with trusted doctors at BukCare. Book your appointment today.
          </p>
        </section>

        {/* Search Bar */}
        <section className="px-6 md:px-20 py-12">
          <div className="max-w-3xl mx-auto flex gap-4">
            <input
              type="text"
              placeholder="Search by doctor name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 px-4 py-3 rounded-xl border border-[#F9B208] bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F9B208]"
            />
            <button className="bg-[#F9B208] text-[#0A2342] px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-yellow-400 transition">
              Search
            </button>
          </div>
        </section>

        {/* Doctor List */}
        <section className="px-6 md:px-20 pb-20">
          {filteredDoctors.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-8">
              {filteredDoctors.map((doc) => (
                <div
                  key={doc.id}
                  className="bg-white text-[#0A2342] rounded-2xl shadow-xl p-6 hover:scale-105 transition border border-[#e5e7eb]"
                >
                  <div className="text-center">
                    <img
                      src={doc.image}
                      alt={doc.name}
                      className="w-32 h-32 mx-auto rounded-full mb-4 border-4 border-[#F9B208]"
                    />
                    <h3 className="text-xl font-bold">{doc.name}</h3>
                    <p className="text-[#004E92] font-medium">{doc.specialty}</p>
                    <p className="text-gray-600 text-sm mt-2">{doc.hospital}</p>
                  </div>

                  <div className="mt-4 text-sm text-gray-700">
                    <p><strong>About:</strong> {doc.profile}</p>
                    <p className="mt-1"><strong>Contact:</strong> {doc.contact}</p>
                  </div>

                  <div className="mt-4">
                    <h4 className="font-semibold">Duty Schedule</h4>
                    <ul className="text-sm text-gray-700">
                      {doc.schedule.map((s, i) => (
                        <li key={i} className={s.onDuty ? "font-bold text-[#004E92]" : ""}>
                          {s.day} - {s.time} {s.onDuty && " (On Duty)"}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4">
                    <h4 className="font-semibold">Appointments</h4>
                    <button
                      onClick={() => setSelectedDoctor(doc)}
                      className="text-sm underline text-[#004E92]"
                    >
                      View Calendar
                    </button>
                  </div>

                  <Link
                    to="/patient/addappointments"
                    className="mt-4 inline-block bg-[#F9B208] text-[#0A2342] px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition"
                  >
                    Book Appointment
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-lg text-gray-200">No doctors found.</p>
          )}
        </section>

        {/* Calendar Modal */}
        {selectedDoctor && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl shadow-xl p-6 w-[90%] md:w-[600px] text-[#0A2342] border border-[#F9B208]/40">
              <h2 className="text-xl font-bold mb-4">
                {selectedDoctor.name} - Calendar
              </h2>

              <Calendar value={selectedDate} onChange={setSelectedDate} />

              <div className="mt-4">
                <h4 className="font-semibold">Slots for {selectedDate.toDateString()}</h4>
                {(() => {
                  const { booked, available } = getSlotsForDate(
                    selectedDoctor,
                    selectedDate
                  );
                  return (
                    <div className="mt-2 text-sm">
                      <p className="text-red-600">Booked: {booked.length ? booked.join(", ") : "None"}</p>
                      <p className="text-green-600">Available: {available.length ? available.join(", ") : "None"}</p>
                    </div>
                  );
                })()}
              </div>

              <div className="mt-6 flex justify-end gap-4">
                <button
                  onClick={() => setSelectedDoctor(null)}
                  className="px-4 py-2 bg-gray-300 rounded-lg"
                >
                  Close
                </button>
                <Link
                  to="/patient/AddAppointments"
                  className="px-4 py-2 bg-[#F9B208] text-[#0A2342] rounded-lg font-semibold hover:bg-yellow-400"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="bg-gradient-to-r from-[#001F54] to-[#003E80] p-6 text-center text-gray-200">
          © 2025 BukCare. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
