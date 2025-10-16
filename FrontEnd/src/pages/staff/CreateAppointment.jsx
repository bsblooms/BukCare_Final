

import React from "react";
import { Link } from "react-router-dom";

export default function AppointmentScheduling() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A1D56] via-[#004AAD] to-[#0077FF] text-white px-6 md:px-20 py-20">
      {/* Back Button */}
      <a
        href="/staff/home"
        className="absolute top-10 left-10 text-sm underline hover:text-[#FFD33D] transition"
      >
        ← Back to Dashboard
      </a>

      {/* Your Appointments Button */}
      <Link
        to="/staff/appointments"
        className="absolute top-10 right-25 bg-[#FFD33D] text-[#0A1D56] font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-[#FDCB45] hover:text-[#002366] transition"
      >
        View Booked Appointments
      </Link>

      {/* Main Content */}
      <div className="min-h-screen bg-[#F8FAFC] text-[#0A1D56] mt-8 rounded-2xl shadow-lg">
        {/* Header */}
        <header className="text-center py-10">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Book Patient{" "}
            <span className="text-[#004AAD]">Appointment</span>
          </h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-700">
            Book, manage, and track your medical appointments easily with
            BukCare.
          </p>
        </header>

        {/* How It Works */}
        <section className="px-6 md:px-20 py-12">
          <h2 className="text-2xl font-bold text-center mb-10 text-[#0A1D56]">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white shadow-md rounded-2xl p-6 border-t-4 border-[#004AAD] hover:shadow-xl transition">
              <h3 className="text-xl font-semibold">Step 1: Fill Out Patient Details</h3>
              <p className="mt-2 text-sm text-gray-600">
                Enter patient's Full Name, Age, Civil Status, and Address to begin your booking.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-2xl p-6 border-t-4 border-[#0077FF] hover:shadow-xl transition">
              <h3 className="text-xl font-semibold">Step 2: Choose Doctor & Schedule</h3>
              <p className="mt-2 text-sm text-gray-600">
                Select Doctor, pick an Appointment Date and Time that fits patient's schedule.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-2xl p-6 border-t-4 border-[#004AAD] hover:shadow-xl transition">
              <h3 className="text-xl font-semibold">Step 3: Confirm & Submit Appointment</h3>
              <p className="mt-2 text-sm text-gray-600">
                Add a short Note to the Doctor (optional), then click “Confirm Appointment.”
              </p>
            </div>
          </div>
        </section>

        {/* Appointment Booking Form */}
        <section className="px-6 md:px-20 py-12 bg-gradient-to-br from-[#004AAD] to-[#0077FF] text-white rounded-t-3xl">
          <h2 className="text-2xl font-bold text-center mb-10">
            Book an Appointment
          </h2>
          <form className="max-w-3xl mx-auto bg-white text-[#0A1D56] rounded-2xl shadow-lg p-8 space-y-6 border-t-4 border-[#FFD33D]">
            
            {/* Full Name */}
            <div>
              <label className="block font-semibold mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Ex. Mary Alexander Smith"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#004AAD]"
              />
            </div>

            {/* Age & Civil Status */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-semibold mb-2">Age</label>
                <input
                  type="number"
                  placeholder="Enter your age"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#004AAD]"
                />
              </div>
              <div>
                <label className="block font-semibold mb-2">Civil Status</label>
                <select className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#004AAD]">
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
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#004AAD]"
              />
            </div>

            {/* Doctor Container */}
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
              <label className="block font-semibold mb-3 text-[#0A1D56]">Select Doctor</label>
              <select className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#004AAD]">
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
                <label className="block font-semibold mb-2">Appointment Date</label>
                <input
                  type="date"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#004AAD]"
                />
              </div>
              <div>
                <label className="block font-semibold mb-2">Appointment Time</label>
                <input
                  type="time"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#004AAD]"
                />
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block font-semibold mb-2">Note to Doctor (Optional)</label>
              <textarea
                placeholder="Please provide additional information..."
                rows="3"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#004AAD]"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#FFD33D] text-[#0A1D56] font-bold py-3 rounded-lg shadow-md hover:bg-[#FDCB45] hover:text-[#002366] transition"
            >
              Confirm Appointment
            </button>
          </form>
        </section>

        {/* Footer */}
        <footer className="w-full bg-[#0A1D56] py-6 text-[#FFD33D] text-center rounded-b-2xl">
          © 2025 BukCare. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
