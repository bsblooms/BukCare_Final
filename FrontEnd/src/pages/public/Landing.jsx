// import React from "react";
// import { Link } from "react-router-dom";

// export default function Landing() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 text-white overflow-y-auto scroll-smooth">

//       {/* Hero Section */}
//       <section className="flex flex-col items-center justify-center min-h-screen px-6 py-20 text-center">
//         <h1 className="text-6xl font-extrabold mb-6 drop-shadow-lg">
//           Welcome to <span className="text-yellow-300">BukCare</span>
//         </h1>
//         <p className="mb-12 max-w-3xl text-lg sm:text-xl leading-relaxed">
//           Your trusted platform for booking medical appointments online.  
//           Fast, simple, and accessible anytime, anywhere.
//         </p>
//         <div className="flex flex-col sm:flex-row gap-6">
//           <Link
//             to="/signin"
//             className="bg-white text-blue-600 font-semibold px-10 py-3 rounded-3xl shadow-lg hover:bg-gray-100 hover:scale-105 transform transition duration-300"
//           >
//             Sign In
//           </Link>
//           <Link
//             to="/signup"
//             className="bg-yellow-400 text-gray-900 font-semibold px-10 py-3 rounded-3xl shadow-lg hover:bg-yellow-300 hover:scale-105 transform transition duration-300"
//           >
//             Sign Up
//           </Link>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-20 px-6 bg-white/10">
//         <h2 className="text-4xl font-bold text-center mb-12 drop-shadow-lg">
//           Why Choose BukCare?
//         </h2>
//         <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
//           <div className="bg-white/20 p-8 rounded-2xl shadow-lg hover:scale-105 transform transition duration-300">
//             <h3 className="text-xl font-semibold mb-3">Fast Booking</h3>
//             <p>Schedule appointments in just a few clicks without waiting in line.</p>
//           </div>
//           <div className="bg-white/20 p-8 rounded-2xl shadow-lg hover:scale-105 transform transition duration-300">
//             <h3 className="text-xl font-semibold mb-3">24/7 Access</h3>
//             <p>Book or manage your appointments anytime, from anywhere.</p>
//           </div>
//           <div className="bg-white/20 p-8 rounded-2xl shadow-lg hover:scale-105 transform transition duration-300">
//             <h3 className="text-xl font-semibold mb-3">Trusted Platform</h3>
//             <p>Reliable and secure system trusted by patients and doctors alike.</p>
//           </div>
//         </div>
//       </section>

//       {/* Quick Navigation to Other Pages */}
//       <section className="py-20 px-6">
//         <h2 className="text-4xl font-bold text-center mb-12 drop-shadow-lg">
//           Learn More About BukCare
//         </h2>
//         <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
//           <Link
//             to="/about"
//             className="bg-white/20 p-8 rounded-2xl shadow-lg hover:scale-105 transform transition duration-300 block"
//           >
//             <h3 className="text-xl font-semibold mb-3">About Us</h3>
//             <p>Learn about our mission and healthcare vision</p>
//           </Link>
//           <Link
//             to="/services"
//             className="bg-white/20 p-8 rounded-2xl shadow-lg hover:scale-105 transform transition duration-300 block"
//           >
//             <h3 className="text-xl font-semibold mb-3">Our Services</h3>
//             <p>Discover all our healthcare services and specialties</p>
//           </Link>
//           <Link
//             to="/contact"
//             className="bg-white/20 p-8 rounded-2xl shadow-lg hover:scale-105 transform transition duration-300 block"
//           >
//             <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
//             <p>Get in touch with our support team</p>
//           </Link>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="py-20 px-6 bg-white/10">
//         <h2 className="text-4xl font-bold text-center mb-12 drop-shadow-lg">
//           What Our Users Say
//         </h2>
//         <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
//           <div className="bg-white/20 p-8 rounded-2xl shadow-lg">
//             <p className="mb-4 italic">"BukCare makes booking appointments so easy and fast!"</p>
//             <h4 className="font-semibold">- Maria S.</h4>
//           </div>
//           <div className="bg-white/20 p-8 rounded-2xl shadow-lg">
//             <p className="mb-4 italic">"I can manage my whole family's appointments in one app."</p>
//             <h4 className="font-semibold">- John D.</h4>
//           </div>
//           <div className="bg-white/20 p-8 rounded-2xl shadow-lg">
//             <p className="mb-4 italic">"Reliable, secure, and very user-friendly!"</p>
//             <h4 className="font-semibold">- Anne K.</h4>
//           </div>
//         </div>
//       </section>

//       {/* Call to Action Section */}
//       <section className="py-20 px-6 text-center">
//         <h2 className="text-4xl font-bold mb-6 drop-shadow-lg">
//           Ready to Get Started?
//         </h2>
//         <p className="mb-8 max-w-2xl mx-auto text-lg sm:text-xl">
//           Join BukCare today and manage your health appointments effortlessly.
//         </p>
//         <div className="flex justify-center gap-6">
//           <Link
//             to="/signup"
//             className="bg-yellow-400 text-gray-900 font-semibold px-10 py-3 rounded-3xl shadow-lg hover:bg-yellow-300 hover:scale-105 transform transition duration-300"
//           >
//             Sign Up Now
//           </Link>
//           <Link
//             to="/signin"
//             className="bg-white text-blue-600 font-semibold px-10 py-3 rounded-3xl shadow-lg hover:bg-gray-100 hover:scale-105 transform transition duration-300"
//           >
//             Sign In
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

import React from "react";
import { Link } from "react-router-dom";


export default function Landing() {
  return (
    <div className="min-h-screen bg-[#FFF5E0] text-[#141E46]">
     
      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-8 items-center px-6 md:px-20 py-20">
        {/* Text Side */}
        <div className="space-y-6">
          
          {/* Logo BukCare */}
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight transform -translate-y-1">
            BukCare <br />
            <span className="text-[#41B06E]">Your Time, Your Health—Scheduled with Care</span>
          </h1>
          <p className="text-lg text-[#141E46]/80 max-w-lg">
            Book medical appointments online with BukCare. Simple, fast, and available anytime. 
            Your health, your schedule.
          </p>
          <div className="flex gap-4">
            <Link
              to="/signup"
              className="bg-[#41B06E] text-white font-semibold px-8 py-3 rounded-xl shadow-md hover:bg-[#8DECB4] hover:text-[#141E46] transition duration-300"
            >
              Get Started
            </Link>
            {/* <Link
              to="/about"
              className="bg-[#FFF5E0] border border-[#41B06E] text-[#41B06E] font-semibold px-8 py-3 rounded-xl shadow-md hover:bg-[#8DECB4]/30 transition duration-300"
            >
              Learn More
            </Link> */}
          </div>
        </div>
        <div class="animated-appointment-image mb-0.5">
                <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/67c927f3-f7ef-42a0-86e1-4544e9f98ac6.png" 
                     alt="Detailed step-by-step illustration of a patient making an appointment on a web portal: user selecting doctor specialty on a dropdown menu, choosing available time slots from a calendar interface with highlighted green confirmed spots, entering personal details like name and contact information in form fields, submitting the request with a blue confirm button, and receiving an instant confirmation popup with appointment ID, date, time, and doctor details on a clean medical app screen with soothing blue and white colors" 
                     class="w-full max-w-lg mx-auto rounded-lg shadow-lg" />         
            </div>

       
      </section>

      {/* Info Cards Section */}
      <section className="px-6 md:px-20 py-20 bg-[#8DECB4]/20">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-[#FFF5E0] p-8 rounded-2xl shadow-lg hover:scale-105 transition">
            <h3 className="text-2xl font-bold text-[#41B06E] mb-3">Find a Doctor</h3>
            <p className="text-[#141E46]/80 mb-4">
              Quickly connect with trusted and qualified doctors based on your needs and preferences—all in just a few taps.
            </p>
            <Link
              to="/contact"
              className="text-[#141E46] font-semibold hover:text-[#41B06E] transition"
            >
              View More→
            </Link>
          </div>

          <div className="bg-[#FFF5E0] p-8 rounded-2xl shadow-lg hover:scale-105 transition">
            <h3 className="text-2xl font-bold text-[#41B06E] mb-3">Appointment Scheduling</h3>
            <p className="text-[#141E46]/80 mb-4">
              Book your medical appointments anytime, anywhere, and manage your schedule with ease.
            </p>
            <Link
              to="/services"
              className="text-[#141E46] font-semibold hover:text-[#41B06E] transition"
            >
              Book Now →
            </Link>
          </div>

          <div className="bg-[#FFF5E0] p-8 rounded-2xl shadow-lg hover:scale-105 transition">
            <h3 className="text-2xl font-bold text-[#41B06E] mb-3">Notify me</h3>
            <p className="text-[#141E46]/80 mb-4">
              Stay updated with instant reminders and alerts so you’ll never miss an appointment again. <br />
            
            </p>
            <Link
              to="/about"
              className="text-[#141E46] font-semibold hover:text-[#41B06E] transition"
            >
              See more →
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6 md:px-20 py-20 text-center bg-gradient-to-r from-[#41B06E] to-[#8DECB4] text-[#141E46]">
        <h2 className="text-4xl font-bold mb-4">Ready to Take Charge of Your Health?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Sign up today and manage your appointments with BukCare effortlessly.
        </p>
        <Link
          to="/signup"
          className="bg-[#FFF5E0] text-[#141E46] font-semibold px-10 py-3 rounded-xl shadow-md hover:bg-[#141E46] hover:text-[#FFF5E0] transition duration-300"
        >
          Sign Up Now
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-[#141E46] py-6 text-center text-[#FFF5E0]/80 text-sm">
        © 2025 BukCare. All rights reserved.
      </footer>
    </div>
  );
}
