
// import React from "react";
// import { Link } from "react-router-dom";


// export default function Landing() {
//   return (
//     <div className="min-h-screen bg-[#FFF5E0] text-[#141E46]">
     
//       {/* Hero Section */}
//       <section className="grid md:grid-cols-2 gap-8 items-center px-6 md:px-20 py-20">
//         {/* Text Side */}
//         <div className="space-y-6">
          
//           {/* Logo BukCare */}
//           <h1 className="text-5xl md:text-6xl font-extrabold leading-tight transform -translate-y-1">
//             BukCare <br />
//             <span className="text-[#41B06E]">Your Time, Your Health—Scheduled with Care</span>
//           </h1>
//           <p className="text-lg text-[#141E46]/80 max-w-lg">
//             Book medical appointments online with BukCare. Simple, fast, and available anytime. 
//             Your health, your schedule.
//           </p>
//           <div className="flex gap-4">
//             <Link
//               to="/signup"
//               className="bg-[#41B06E] text-white font-semibold px-8 py-3 rounded-xl shadow-md hover:bg-[#8DECB4] hover:text-[#141E46] transition duration-300"
//             >
//               Get Started
//             </Link>
            
//           </div>
//         </div>
//         <div class="animated-appointment-image mb-0.5">
//                 <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/67c927f3-f7ef-42a0-86e1-4544e9f98ac6.png" 
//                      alt="Detailed step-by-step illustration of a patient making an appointment on a web portal: user selecting doctor specialty on a dropdown menu, choosing available time slots from a calendar interface with highlighted green confirmed spots, entering personal details like name and contact information in form fields, submitting the request with a blue confirm button, and receiving an instant confirmation popup with appointment ID, date, time, and doctor details on a clean medical app screen with soothing blue and white colors" 
//                      class="w-full max-w-lg mx-auto rounded-lg shadow-lg" />         
//             </div>

       
//       </section>

//       {/* Info Cards Section */}
//       <section className="px-6 md:px-20 py-20 bg-[#8DECB4]/20">
//         <div className="grid md:grid-cols-3 gap-8 text-center">
//           <div className="bg-[#FFF5E0] p-8 rounded-2xl shadow-lg hover:scale-105 transition">
//             <h3 className="text-2xl font-bold text-[#41B06E] mb-3">Find a Doctor</h3>
//             <p className="text-[#141E46]/80 mb-4">
//               Quickly connect with trusted and qualified doctors based on your needs and preferences—all in just a few taps.
//             </p>
//             <Link
//               to="/contact"
//               className="text-[#141E46] font-semibold hover:text-[#41B06E] transition"
//             >
//               View More→
//             </Link>
//           </div>

//           <div className="bg-[#FFF5E0] p-8 rounded-2xl shadow-lg hover:scale-105 transition">
//             <h3 className="text-2xl font-bold text-[#41B06E] mb-3">Appointment Scheduling</h3>
//             <p className="text-[#141E46]/80 mb-4">
//               Book your medical appointments anytime, anywhere, and manage your schedule with ease.
//             </p>
//             <Link
//               to="/services"
//               className="text-[#141E46] font-semibold hover:text-[#41B06E] transition"
//             >
//               Book Now →
//             </Link>
//           </div>

//           <div className="bg-[#FFF5E0] p-8 rounded-2xl shadow-lg hover:scale-105 transition">
//             <h3 className="text-2xl font-bold text-[#41B06E] mb-3">Notify me</h3>
//             <p className="text-[#141E46]/80 mb-4">
//               Stay updated with instant reminders and alerts so you’ll never miss an appointment again. <br />
            
//             </p>
//             <Link
//               to="/about"
//               className="text-[#141E46] font-semibold hover:text-[#41B06E] transition"
//             >
//               See more →
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="px-6 md:px-20 py-20 text-center bg-gradient-to-r from-[#41B06E] to-[#8DECB4] text-[#141E46]">
//         <h2 className="text-4xl font-bold mb-4">Ready to Take Charge of Your Health?</h2>
//         <p className="text-lg mb-8 max-w-2xl mx-auto">
//           Sign up today and manage your appointments with BukCare effortlessly.
//         </p>
//         <Link
//           to="/signup"
//           className="bg-[#FFF5E0] text-[#141E46] font-semibold px-10 py-3 rounded-xl shadow-md hover:bg-[#141E46] hover:text-[#FFF5E0] transition duration-300"
//         >
//           Sign Up Now
//         </Link>
//       </section>

//       {/* Footer */}
//       <footer className="bg-[#141E46] py-6 text-center text-[#FFF5E0]/80 text-sm">
//         © 2025 BukCare. All rights reserved.
//       </footer>
//     </div>
//   );
// }

import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#001F3F] to-[#004AAD] text-white">
      
      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-8 items-center px-6 md:px-20 py-20">
        {/* Text Side */}
        <div className="space-y-6">
          {/* Logo and Title */}
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            BukCare <br />
            <span className="text-[#FFC107]">
              Your Time, Your Health — Scheduled with Care
            </span>
          </h1>

          <p className="text-lg text-gray-200 max-w-lg">
            Book medical appointments online with BukCare. Simple, fast, and
            available anytime. Your health, your schedule.
          </p>

          <div className="flex gap-4">
            <Link
              to="/signup"
              className="bg-[#FFC107] text-[#001F3F] font-semibold px-8 py-3 rounded-xl shadow-md hover:bg-[#FFD54F] hover:scale-105 transition duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="animated-appointment-image mb-0.5">
          <img
            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/67c927f3-f7ef-42a0-86e1-4544e9f98ac6.png"
            alt="Patient booking appointment illustration"
            className="w-full max-w-lg mx-auto rounded-lg shadow-lg border border-[#004AAD]/40"
          />
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="px-2 md:px-20 py-20 bg-[#F3F6FF] text-[#001F3F]">
        <h2 className="text-4xl font-bold text-text-[#001F3F]/80 text-center mb-10">
          How it Works? 
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl border border-[#EAF0FF] hover:scale-105 transition">
            <h3 className="text-2xl font-bold text-[#004AAD] mb-3">
              Find a Doctor
            </h3>
            <p className="text-[#001F3F]/80 mb-4">
              Quickly connect with trusted and qualified doctors based on your
              needs and preferences—all in just a few taps.
            </p>
            <Link
              to="/contact"
              className="text-[#004AAD] font-semibold hover:text-[#FFC107] transition"
            >
              View More →
            </Link>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl border border-[#EAF0FF] hover:scale-105 transition">
            <h3 className="text-2xl font-bold text-[#004AAD] mb-3">
              Appointment Scheduling
            </h3>
            <p className="text-[#001F3F]/80 mb-4">
              Book your medical appointments anytime, anywhere, and manage your
              schedule with ease.
            </p>
            <Link
              to="/services"
              className="text-[#004AAD] font-semibold hover:text-[#FFC107] transition"
            >
              Book Now →
            </Link>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl border border-[#EAF0FF] hover:scale-105 transition">
            <h3 className="text-2xl font-bold text-[#004AAD] mb-3">
              Notify Me
            </h3>
            <p className="text-[#001F3F]/80 mb-4">
              Stay updated with instant reminders and alerts so you’ll never
              miss an appointment again.
            </p>
            <Link
              to="/about"
              className="text-[#004AAD] font-semibold hover:text-[#FFC107] transition"
            >
              See More →
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6 md:px-20 py-20 text-center bg-gradient-to-r from-[#001F3F] to-[#004AAD]">
        <h2 className="text-4xl font-bold mb-4 text-[#FFC107]">
          Ready to Take Charge of Your Health?
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-200">
          Sign up today and manage your appointments with BukCare effortlessly.
        </p>
        <Link
          to="/signup"
          className="bg-[#FFC107] text-[#001F3F] font-semibold px-10 py-3 rounded-xl shadow-md hover:bg-[#FFD54F] hover:scale-105 transition duration-300"
        >
          Sign Up Now
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-[#001F3F] py-6 text-center text-[#EAF0FF]/80 text-sm border-t border-[#002B70]/40">
        © 2025 BukCare. All rights reserved.
      </footer>
    </div>
  );
}
