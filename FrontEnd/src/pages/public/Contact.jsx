import React, { useState } from "react";
import { Link } from "react-router-dom";

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission here
//     console.log('Form submitted:', formData);
//     // You can integrate this with your API later
//     alert('Thank you for your message! We will get back to you soon.');
//     setFormData({ name: '', email: '', subject: '', message: '' });
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   return (
// //     <div className="min-h-screen bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 text-white">
// //       {/* Navigation */}
// //       <nav className="p-6">
//         <Link to="/" className="text-yellow-300 hover:text-white font-semibold">
//           ← Back to Home
//         </Link>
// //       </nav>

//       {/* Hero Section */}
//       <section className="px-6 py-20 text-center">
//         <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg">
//           Contact <span className="text-yellow-300">BukCare</span>
//         </h1>
//         <p className="max-w-3xl mx-auto text-lg sm:text-xl leading-relaxed">
//           We're here to help! Get in touch with our support team for any questions or assistance.
//         </p>
//       </section>

//       {/* Contact Information */}
//       <section className="py-20 px-6 bg-white/10">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-4xl font-bold text-center mb-12 drop-shadow-lg">
//             Get In Touch
//           </h2>
//           <div className="grid md:grid-cols-3 gap-8 mb-12">
//             <div className="bg-white/20 p-8 rounded-2xl shadow-lg text-center">
//               <div className="text-4xl mb-4">📍</div>
//               <h3 className="text-xl font-semibold mb-4">Office Location</h3>
//               <p>BukCare Healthcare Solutions</p>
//               <p>123 Medical Plaza</p>
//               <p>Cagayan de Oro City</p>
//               <p>Misamis Oriental, Philippines</p>
//             </div>
//             <div className="bg-white/20 p-8 rounded-2xl shadow-lg text-center">
//               <div className="text-4xl mb-4">📞</div>
//               <h3 className="text-xl font-semibold mb-4">Phone & Email</h3>
//               <p className="mb-2">
//                 <strong>Main Line:</strong><br />
//                 +63 88 123-4567
//               </p>
//               <p className="mb-2">
//                 <strong>Emergency:</strong><br />
//                 +63 88 987-6543
//               </p>
//               <p>
//                 <strong>Email:</strong><br />
//                 support@bukcare.com
//               </p>
//             </div>
//             <div className="bg-white/20 p-8 rounded-2xl shadow-lg text-center">
//               <div className="text-4xl mb-4">🕒</div>
//               <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
//               <p><strong>Monday - Friday:</strong><br />8:00 AM - 6:00 PM</p>
//               <p><strong>Saturday:</strong><br />9:00 AM - 4:00 PM</p>
//               <p><strong>Sunday:</strong><br />Emergency Only</p>
//               <p className="mt-4 text-sm text-yellow-300">
//                 24/7 Online Booking Available
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Form */}
//       <section className="py-20 px-6">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-4xl font-bold text-center mb-12 drop-shadow-lg">
//             Send Us a Message
//           </h2>
//           <form onSubmit={handleSubmit} className="bg-white/20 p-8 rounded-2xl shadow-lg">
//             <div className="grid md:grid-cols-2 gap-6 mb-6">
//               <div>
//                 <label htmlFor="name" className="block text-sm font-semibold mb-2">
//                   Full Name *
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//                   placeholder="Enter your full name"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="email" className="block text-sm font-semibold mb-2">
//                   Email Address *
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//                   placeholder="Enter your email address"
//                 />
//               </div>
//             </div>
//             <div className="mb-6">
//               <label htmlFor="subject" className="block text-sm font-semibold mb-2">
//                 Subject *
//               </label>
//               <select
//                 id="subject"
//                 name="subject"
//                 value={formData.subject}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
//               >
//                 <option value="" className="text-gray-800">Select a subject</option>
//                 <option value="general" className="text-gray-800">General Inquiry</option>
//                 <option value="technical" className="text-gray-800">Technical Support</option>
//                 <option value="billing" className="text-gray-800">Billing Question</option>
//                 <option value="appointment" className="text-gray-800">Appointment Issue</option>
//                 <option value="partnership" className="text-gray-800">Partnership Opportunity</option>
//                 <option value="feedback" className="text-gray-800">Feedback</option>
//               </select>
//             </div>
//             <div className="mb-6">
//               <label htmlFor="message" className="block text-sm font-semibold mb-2">
//                 Message *
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//                 rows="6"
//                 className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-vertical"
//                 placeholder="Tell us how we can help you..."
//               ></textarea>
//             </div>
//             <div className="text-center">
//               <button
//                 type="submit"
//                 className="bg-yellow-400 text-gray-900 font-semibold px-10 py-3 rounded-3xl shadow-lg hover:bg-yellow-300 hover:scale-105 transform transition duration-300"
//               >
//                 Send Message
//               </button>
//             </div>
//           </form>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="py-20 px-6 bg-white/10">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-4xl font-bold text-center mb-12 drop-shadow-lg">
//             Frequently Asked Questions
//           </h2>
//           <div className="grid md:grid-cols-2 gap-8">
//             <div className="bg-white/20 p-6 rounded-2xl shadow-lg">
//               <h3 className="text-xl font-semibold mb-4">How do I book an appointment?</h3>
//               <p>Simply create an account, search for available doctors by specialty or location, and book your preferred time slot instantly.</p>
//             </div>
//             <div className="bg-white/20 p-6 rounded-2xl shadow-lg">
//               <h3 className="text-xl font-semibold mb-4">Is my medical information secure?</h3>
//               <p>Yes, we use bank-level encryption and follow HIPAA compliance standards to ensure your medical data is completely secure.</p>
//             </div>
//             <div className="bg-white/20 p-6 rounded-2xl shadow-lg">
//               <h3 className="text-xl font-semibold mb-4">Can I cancel or reschedule appointments?</h3>
//               <p>You can cancel or reschedule appointments up to 2 hours before your scheduled time through your patient dashboard.</p>
//             </div>
//             <div className="bg-white/20 p-6 rounded-2xl shadow-lg">
//               <h3 className="text-xl font-semibold mb-4">Do you accept insurance?</h3>
//               <p>We work with most major insurance providers. Check with your doctor's office for specific coverage details.</p>
//             </div>
//             <div className="bg-white/20 p-6 rounded-2xl shadow-lg">
//               <h3 className="text-xl font-semibold mb-4">How do I become a healthcare provider on BukCare?</h3>
//               <p>Healthcare providers can apply through our partner portal. We verify all credentials and medical licenses before approval.</p>
//             </div>
//             <div className="bg-white/20 p-6 rounded-2xl shadow-lg">
//               <h3 className="text-xl font-semibold mb-4">Is there a mobile app?</h3>
//               <p>Our web platform is fully mobile-responsive. A dedicated mobile app is coming soon for iOS and Android.</p>
//             </div>
//           </div>
//         </div>
//       </section>

      {/* Emergency Contact
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-red-500/20 border-2 border-red-400 p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-red-200">🚨 Medical Emergency?</h2>
            <p className="text-lg mb-6">
              If you are experiencing a medical emergency, do not use this platform. 
              Call emergency services immediately.
            </p>
            <div className="flex justify-center gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold">911</div>
                <div className="text-sm">Emergency Services</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">+63 88 911-HELP</div>
                <div className="text-sm">BukCare Emergency Line</div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
//       <section className="py-20 px-6 text-center">
//         <h2 className="text-4xl font-bold mb-6 drop-shadow-lg">
//           Ready to Get Started?
//         </h2>
//         <p className="mb-8 max-w-2xl mx-auto text-lg">
//           Have questions? We're here to help! Contact our support team or start your BukCare journey today.
//         </p>
//         <div className="flex justify-center gap-6">
//           <Link
//             to="/signup"
//             className="bg-yellow-400 text-gray-900 font-semibold px-10 py-3 rounded-3xl shadow-lg hover:bg-yellow-300 hover:scale-105 transform transition duration-300"
//           >
//             Sign Up Now
//           </Link>
//           <Link
//             to="/about"
//             className="bg-white text-blue-600 font-semibold px-10 py-3 rounded-3xl shadow-lg hover:bg-gray-100 hover:scale-105 transform transition duration-300"
//           >
//             Learn More
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

// import React, { useState } from "react";

export default function FindDoctor() {
  const [search, setSearch] = useState("");
  
  // Example doctor data
  
  const doctors = [
    {
      id: 1,
      name: "Dr. Maria Santos",
      specialty: "Cardiologist",
      hospital: "BukCare Medical Center",
      image: "https://via.placeholder.com/150x150.png?text=Doctor+1",
    },
    {
      id: 2,
      name: "Dr. John Reyes",
      specialty: "Pediatrician",
      hospital: "BukCare Children’s Clinic",
      image: "https://via.placeholder.com/150x150.png?text=Doctor+2",
    },
    {
      id: 3,
      name: "Dr. Angela Cruz",
      specialty: "Dermatologist",
      hospital: "BukCare Skin Clinic",
      image: "https://via.placeholder.com/150x150.png?text=Doctor+3",
    },
  ];

  // Filter doctors
  const filteredDoctors = doctors.filter((doc) =>
    doc.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#141E46] via-[#41B06E] to-[#8DECB4] text-[#FFF5E0] px-20 py-20">
      {/* Back Button */}
      <a href="/" className="absolute top-10 left-10 text-sm underline">
        ← Back to Home
      </a>

    
  
    <div className="min-h-screen bg-[#FFF5E0] text-[#141E46]">
      {/* Header */}
      <section className="text-center py-16 bg-gradient-to-r from-[#41B06E] to-[#8DECB4] text-[#141E46]">
        <h1 className="text-4xl md:text-5xl font-extrabold">Find a Doctor</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Search and connect with trusted doctors at BukCare. Book your
          appointment today.
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
            className="flex-1 px-4 py-3 rounded-xl border border-[#41B06E] focus:outline-none focus:ring-2 focus:ring-[#41B06E]"
          />
          <button className="bg-[#41B06E] text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-[#8DECB4] hover:text-[#141E46] transition">
            Search
          </button>
        </div>
      </section>

      {/* Doctor Cards */}
      <section className="px-6 md:px-20 pb-20">
        {filteredDoctors.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-8">
            {filteredDoctors.map((doc) => (
              <div
                key={doc.id}
                className="bg-white rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition"
              >
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-32 h-32 mx-auto rounded-full mb-4 border-4 border-[#8DECB4]"
                />
                <h3 className="text-xl font-bold text-[#141E46]">
                  {doc.name}
                </h3>
                <p className="text-[#41B06E] font-medium">{doc.specialty}</p>
                <p className="text-[#141E46]/70 text-sm mt-2">{doc.hospital}</p>
                <button className="mt-4 bg-[#41B06E] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#8DECB4] hover:text-[#141E46] transition">
                  Book Appointment
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-lg text-[#141E46]/70">
            No doctors found.
          </p>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-[#141E46] py-6 text-center text-[#FFF5E0]/80 text-sm">
        © 2025 BukCare. All rights reserved.
      </footer>
    </div>
    </div>
  );
}
