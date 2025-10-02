import React from "react";
import { Link } from "react-router-dom";

export default function AppointmentScheduling() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#141E46] via-[#41B06E] to-[#8DECB4] text-[#FFF5E0]">
      {/* Back Button */}
      <a
        href="/staff/home"
        className="absolute top-10 left-10 text-sm underline"
      >
        ← Back to Dashboard
      </a>

      {/* Your Appointments Button */}
      <Link
        to="/staff/appointments"
        className="absolute top-10 right-15 bg-[#41B06E] text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-[#8DECB4] hover:text-[#141E46] transition"
      >
        Booked Appointments
      </Link>

      <div className="min-h-screen bg-[#FFF5E0] text-[#141E46]">
        <section className="bg-gradient-to-r from-green-600 to-blue-600 p-6 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mt-10 ">
          Create New <span className="text-[#141E46]">Appointment</span>
        </h1>
        <p className="mt-3 text-lg text-gray-800/80">
          Ensure every patient gets a slot — online or walk-in. 
        </p>
      </section>

        {/* How It Works */}
        <section className="bg-white px-6 md:px-20 py-12">
          <h2 className="text-2xl font-bold text-center mb-10">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white shadow-md rounded-2xl p-6 border-t-4 border-[#41B06E] hover:shadow-xl transition">
              <h3 className="text-xl font-semibold">1. Choose Doctor</h3>
              <p className="mt-2 text-sm">
                Select patient's preferred doctor based on specialty and availability.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-2xl p-6 border-t-4 border-[#8DECB4] hover:shadow-xl transition">
              <h3 className="text-xl font-semibold">2. Pick a Time</h3>
              <p className="mt-2 text-sm">
                Select the date and time that works best for patient's schedule.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-2xl p-6 border-t-4 border-[#41B06E] hover:shadow-xl transition">
              <h3 className="text-xl font-semibold">3. Get Confirmation</h3>
              <p className="mt-2 text-sm">
                Receive instant booking confirmation and reminders.
              </p>
            </div>
          </div>
        </section>

        {/* Appointment Booking Form */}
        <section className="bg-white rounded-2xl shadow-lg text-left">
          <h2 className="text-2xl font-bold text-center mb-5">
            Book an Appointment
            
          </h2>
          <form className="max-w-3xl mx-auto bg-white text-[#141E46] rounded-2xl shadow-lg p-8 space-y-6 border-t-4 border-[#41B06E] hover:shadow-x5 transition">
            {/* Full Name */}
            <div>
              <label className="block font-semibold mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Ex. Mary Alexander Smith"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#41B06E]"
              />
            </div>

            {/* Age & Civil Status */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-semibold mb-2">Age</label>
                <input
                  type="number"
                  placeholder="Enter your age"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#41B06E]"
                />
              </div>
              <div>
                <label className="block font-semibold mb-2">Civil Status</label>
                <select className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#41B06E]">
                  <option>Select status</option>
                  <option>Single</option>
                  <option>Married</option>
                  <option>Widowed</option>
                  <option>Separated</option>
                </select>
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block font-semibold mb-2">Address</label>
              <input
                type="text"
                placeholder="Enter your address"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#41B06E]"
              />
            </div>

            {/* Select Doctor */}
            <div>
              <label className="block font-semibold mb-2">Select Doctor</label>
              <select className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#41B06E]">
                <option>Select a doctor</option>
                <option>Dr. Maria Santos - Pediatrics</option>
                <option>Dr. John Ramirez - General Practice</option>
                <option>Dr. Angela Cruz - Cardiology</option>
                <option>Dr. Michael Tan - Orthopedics</option>
              </select>
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-semibold mb-2">Date</label>
                <input
                  type="date"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#41B06E]"
                />
              </div>
              <div>
                <label className="block font-semibold mb-2">Time</label>
                <input
                  type="time"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#41B06E]"
                />
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block font-semibold mb-2">Note to Doctor (Optional)</label>
              <textarea
                placeholder="Please provide addtional information. . ."
                rows="3"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#41B06E]"
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#41B06E] text-white font-bold py-3 rounded-lg shadow-md hover:bg-[#8DECB4] hover:text-[#141E46] transition"
            >
              Set Appointment
            </button>
            
          </form>
          
        {/* Footer */}
        <footer className="w-full bg-gradient-to-r from-green-600 to-blue-600 py-6 text-white text-center mt-10">
          © 2025 BukCare. All rights reserved.
        </footer>
        </section>
      </div>
    </div>
  );
}
