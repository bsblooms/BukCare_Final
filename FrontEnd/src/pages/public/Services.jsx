import React from "react";
import { Link } from "react-router-dom";

// export default function Services() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 text-white">
//       {/* Navigation */}
//       <nav className="p-6">
//         <Link to="/" className="text-yellow-300 hover:text-white font-semibold">
//           ← Back to Home
//         </Link>
//       </nav>

//       {/* Hero Section */}
//       <section className="px-6 py-20 text-center">
//         <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg">
//           Our <span className="text-yellow-300">Healthcare Services</span>
//         </h1>
//         <p className="max-w-3xl mx-auto text-lg sm:text-xl leading-relaxed">
//           Comprehensive healthcare solutions designed to meet all your medical needs
//         </p>
//       </section>

//       {/* How It Works Section */}
//       <section className="py-20 px-6 bg-white/10">
//         <h2 className="text-4xl font-bold text-center mb-12 drop-shadow-lg">
//           How It Works
//         </h2>
//         <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto text-center">
//           <div className="bg-white/20 p-8 rounded-2xl shadow-lg hover:scale-105 transform transition duration-300">
//             <div className="text-3xl mb-4">1️⃣</div>
//             <h3 className="text-xl font-semibold mb-3">Create Account</h3>
//             <p>Sign up with your email and complete your medical profile securely</p>
//           </div>
//           <div className="bg-white/20 p-8 rounded-2xl shadow-lg hover:scale-105 transform transition duration-300">
//             <div className="text-3xl mb-4">2️⃣</div>
//             <h3 className="text-xl font-semibold mb-3">Find Your Doctor</h3>
//             <p>Search by specialty, location, availability, and patient reviews</p>
//           </div>
//           <div className="bg-white/20 p-8 rounded-2xl shadow-lg hover:scale-105 transform transition duration-300">
//             <div className="text-3xl mb-4">3️⃣</div>
//             <h3 className="text-xl font-semibold mb-3">Book Instantly</h3>
//             <p>Choose your preferred time slot and get instant confirmation</p>
//           </div>
//         </div>
//       </section>

//       {/* Medical Specialties Section */}
//       <section className="py-20 px-6">
//         <h2 className="text-4xl font-bold text-center mb-12 drop-shadow-lg">
//           Medical Specialties Available
//         </h2>
//         <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
//           <div className="bg-white/20 p-6 rounded-2xl shadow-lg text-center hover:scale-105 transform transition duration-300">
//             <div className="text-3xl mb-3">🩺</div>
//             <h3 className="font-semibold mb-2">General Practice</h3>
//             <p className="text-sm">Primary healthcare and routine checkups</p>
//           </div>
//           <div className="bg-white/20 p-6 rounded-2xl shadow-lg text-center hover:scale-105 transform transition duration-300">
//             <div className="text-3xl mb-3">❤️</div>
//             <h3 className="font-semibold mb-2">Cardiology</h3>
//             <p className="text-sm">Heart and cardiovascular system care</p>
//           </div>
//           <div className="bg-white/20 p-6 rounded-2xl shadow-lg text-center hover:scale-105 transform transition duration-300">
//             <div className="text-3xl mb-3">🧠</div>
//             <h3 className="font-semibold mb-2">Neurology</h3>
//             <p className="text-sm">Brain and nervous system disorders</p>
//           </div>
//           <div className="bg-white/20 p-6 rounded-2xl shadow-lg text-center hover:scale-105 transform transition duration-300">
//             <div className="text-3xl mb-3">🦴</div>
//             <h3 className="font-semibold mb-2">Orthopedics</h3>
//             <p className="text-sm">Bone, joint, and muscle treatment</p>
//           </div>
//           <div className="bg-white/20 p-6 rounded-2xl shadow-lg text-center hover:scale-105 transform transition duration-300">
//             <div className="text-3xl mb-3">👁️</div>
//             <h3 className="font-semibold mb-2">Ophthalmology</h3>
//             <p className="text-sm">Eye care and vision treatment</p>
//           </div>
//           <div className="bg-white/20 p-6 rounded-2xl shadow-lg text-center hover:scale-105 transform transition duration-300">
//             <div className="text-3xl mb-3">🩸</div>
//             <h3 className="font-semibold mb-2">Dermatology</h3>
//             <p className="text-sm">Skin, hair, and nail conditions</p>
//           </div>
//           <div className="bg-white/20 p-6 rounded-2xl shadow-lg text-center hover:scale-105 transform transition duration-300">
//             <div className="text-3xl mb-3">🤱</div>
//             <h3 className="font-semibold mb-2">Pediatrics</h3>
//             <p className="text-sm">Specialized care for children</p>
//           </div>
//           <div className="bg-white/20 p-6 rounded-2xl shadow-lg text-center hover:scale-105 transform transition duration-300">
//             <div className="text-3xl mb-3">🏥</div>
//             <h3 className="font-semibold mb-2">Emergency Care</h3>
//             <p className="text-sm">Urgent medical attention</p>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-20 px-6 bg-white/10">
//         <h2 className="text-4xl font-bold text-center mb-12 drop-shadow-lg">
//           Platform Features
//         </h2>
//         <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
//           <div>
//             <h3 className="text-2xl font-semibold mb-6">For Patients</h3>
//             <div className="space-y-4">
//               <div className="bg-white/20 p-4 rounded-xl">
//                 <h4 className="font-semibold mb-2">Online Booking</h4>
//                 <p className="text-sm">Schedule appointments 24/7 from any device</p>
//               </div>
//               <div className="bg-white/20 p-4 rounded-xl">
//                 <h4 className="font-semibold mb-2">Medical Records</h4>
//                 <p className="text-sm">Access your health history and test results</p>
//               </div>
//               <div className="bg-white/20 p-4 rounded-xl">
//                 <h4 className="font-semibold mb-2">Appointment Reminders</h4>
//                 <p className="text-sm">Never miss an appointment with automated notifications</p>
//               </div>
//               <div className="bg-white/20 p-4 rounded-xl">
//                 <h4 className="font-semibold mb-2">Doctor Reviews</h4>
//                 <p className="text-sm">Read patient feedback to choose the right doctor</p>
//               </div>
//             </div>
//           </div>
//           <div>
//             <h3 className="text-2xl font-semibold mb-6">For Healthcare Providers</h3>
//             <div className="space-y-4">
//               <div className="bg-white/20 p-4 rounded-xl">
//                 <h4 className="font-semibold mb-2">Schedule Management</h4>
//                 <p className="text-sm">Efficiently manage your appointment calendar</p>
//               </div>
//               <div className="bg-white/20 p-4 rounded-xl">
//                 <h4 className="font-semibold mb-2">Patient Database</h4>
//                 <p className="text-sm">Secure access to patient information and history</p>
//               </div>
//               <div className="bg-white/20 p-4 rounded-xl">
//                 <h4 className="font-semibold mb-2">Analytics Dashboard</h4>
//                 <p className="text-sm">Track practice performance and patient metrics</p>
//               </div>
//               <div className="bg-white/20 p-4 rounded-xl">
//                 <h4 className="font-semibold mb-2">Secure Communication</h4>
//                 <p className="text-sm">HIPAA-compliant messaging with patients</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Pricing Section */}
//       <section className="py-20 px-6">
//         <h2 className="text-4xl font-bold text-center mb-12 drop-shadow-lg">
//           Simple, Transparent Pricing
//         </h2>
//         <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
//           <div className="bg-white/20 p-8 rounded-2xl shadow-lg">
//             <h3 className="text-xl font-semibold mb-4">For Patients</h3>
//             <div className="text-3xl font-bold mb-4">Free</div>
//             <p>Book unlimited appointments at no cost</p>
//           </div>
//           <div className="bg-yellow-400/20 p-8 rounded-2xl shadow-lg border-2 border-yellow-400">
//             <h3 className="text-xl font-semibold mb-4">For Doctors</h3>
//             <div className="text-3xl font-bold mb-4">₱500<span className="text-lg">/month</span></div>
//             <p>Complete practice management solution</p>
//           </div>
//           <div className="bg-white/20 p-8 rounded-2xl shadow-lg">
//             <h3 className="text-xl font-semibold mb-4">For Clinics</h3>
//             <div className="text-3xl font-bold mb-4">Custom</div>
//             <p>Enterprise solutions tailored to your needs</p>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 px-6 text-center bg-white/10">
//         <h2 className="text-4xl font-bold mb-6 drop-shadow-lg">
//           Ready to Experience Better Healthcare?
//         </h2>
//         <p className="mb-8 max-w-2xl mx-auto text-lg">
//           Join thousands of patients who have simplified their healthcare journey with BukCare.
//         </p>
//         <div className="flex justify-center gap-6">
//           <Link
//             to="/signup"
//             className="bg-yellow-400 text-gray-900 font-semibold px-10 py-3 rounded-3xl shadow-lg hover:bg-yellow-300 hover:scale-105 transform transition duration-300"
//           >
//             Start Booking
//           </Link>
//           <Link
//             to="/contact"
//             className="bg-white text-blue-600 font-semibold px-10 py-3 rounded-3xl shadow-lg hover:bg-gray-100 hover:scale-105 transform transition duration-300"
//           >
//             Contact Sales
//           </Link>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-black/30 py-6 text-center text-white/70 text-sm">
//         © 2025 BukCare. All rights reserved.
//       </footer>
//     </div>
//   );
// }

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
