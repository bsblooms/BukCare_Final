import React from "react";
import { Link } from "react-router-dom";

export default function AppointmentScheduling() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#141E46] via-[#41B06E] to-[#8DECB4] text-[#FFF5E0] px-20 py-20">
      {/* Back Button */}
      <a
        href="/pages/landing"
        className="absolute top-10 left-10 text-sm underline"
      >
        ← Back to Dashboard
      </a>

      {/* Your Appointments Button */}
      <Link
        to="/patient/appointments"
        className="absolute top-10 right-22 bg-[#41B06E] text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-[#8DECB4] hover:text-[#141E46] transition"
      >
        Your Appointments
      </Link>

      <div className="min-h-screen bg-[#FFF5E0] text-[#141E46] mt-8">
        {/* Header */}
        <header className="text-center py-10">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Appointment <span className="text-[#41B06E]">Scheduling</span>
          </h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Book, manage, and track your medical appointments easily with
            BukCare.
          </p>
        </header>

        {/* How It Works */}
        <section className="px-6 md:px-20 py-12">
          <h2 className="text-2xl font-bold text-center mb-10">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white shadow-md rounded-2xl p-6 border-t-4 border-[#41B06E] hover:shadow-xl transition">
              <h3 className="text-xl font-semibold">1. Choose Doctor</h3>
              <p className="mt-2 text-sm">
                Select your preferred doctor based on specialty and availability.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-2xl p-6 border-t-4 border-[#8DECB4] hover:shadow-xl transition">
              <h3 className="text-xl font-semibold">2. Pick a Time</h3>
              <p className="mt-2 text-sm">
                Select the date and time that works best for your schedule.
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
        <section className="px-6 md:px-20 py-12 bg-[#141E46] text-white rounded-t-3xl">
          <h2 className="text-2xl font-bold text-center mb-10">
            Book an Appointment
          </h2>
          <form className="max-w-3xl mx-auto bg-[#FFF5E0] text-[#141E46] rounded-2xl shadow-lg p-8 space-y-6">
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
              Confirm Appointment
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
