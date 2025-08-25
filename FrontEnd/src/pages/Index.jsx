import React from "react";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 text-white overflow-y-auto scroll-smooth">

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-6 py-20 text-center">
        <h1 className="text-6xl font-extrabold mb-6 drop-shadow-lg">
          Welcome to <span className="text-yellow-300">BukCare</span>
        </h1>
        <p className="mb-12 max-w-3xl text-lg sm:text-xl leading-relaxed">
          Your trusted platform for booking medical appointments online.  
          Fast, simple, and accessible anytime, anywhere.
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <Link
            to="/signin"
            className="bg-white text-blue-600 font-semibold px-10 py-3 rounded-3xl shadow-lg hover:bg-gray-100 hover:scale-105 transform transition duration-300"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="bg-yellow-400 text-gray-900 font-semibold px-10 py-3 rounded-3xl shadow-lg hover:bg-yellow-300 hover:scale-105 transform transition duration-300"
          >
            Sign Up
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white/10">
        <h2 className="text-4xl font-bold text-center mb-12 drop-shadow-lg">
          Why Choose BukCare?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
          <div className="bg-white/20 p-8 rounded-2xl shadow-lg hover:scale-105 transform transition duration-300">
            <h3 className="text-xl font-semibold mb-3">Fast Booking</h3>
            <p>Schedule appointments in just a few clicks without waiting in line.</p>
          </div>
          <div className="bg-white/20 p-8 rounded-2xl shadow-lg hover:scale-105 transform transition duration-300">
            <h3 className="text-xl font-semibold mb-3">24/7 Access</h3>
            <p>Book or manage your appointments anytime, from anywhere.</p>
          </div>
          <div className="bg-white/20 p-8 rounded-2xl shadow-lg hover:scale-105 transform transition duration-300">
            <h3 className="text-xl font-semibold mb-3">Trusted Platform</h3>
            <p>Reliable and secure system trusted by patients and doctors alike.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-12 drop-shadow-lg">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto text-center">
          <div className="bg-white/20 p-8 rounded-2xl shadow-lg hover:scale-105 transform transition duration-300">
            <h3 className="text-xl font-semibold mb-3">Step 1: Sign Up</h3>
            <p>Create your account easily using your email and personal details.</p>
          </div>
          <div className="bg-white/20 p-8 rounded-2xl shadow-lg hover:scale-105 transform transition duration-300">
            <h3 className="text-xl font-semibold mb-3">Step 2: Choose Doctor</h3>
            <p>Select the right doctor for your needs from our verified list.</p>
          </div>
          <div className="bg-white/20 p-8 rounded-2xl shadow-lg hover:scale-105 transform transition duration-300">
            <h3 className="text-xl font-semibold mb-3">Step 3: Book Appointment</h3>
            <p>Pick a convenient time slot and confirm your booking instantly.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-white/10">
        <h2 className="text-4xl font-bold text-center mb-12 drop-shadow-lg">
          What Our Users Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
          <div className="bg-white/20 p-8 rounded-2xl shadow-lg">
            <p className="mb-4 italic">"BukCare makes booking appointments so easy and fast!"</p>
            <h4 className="font-semibold">- Maria S.</h4>
          </div>
          <div className="bg-white/20 p-8 rounded-2xl shadow-lg">
            <p className="mb-4 italic">"I can manage my whole family's appointments in one app."</p>
            <h4 className="font-semibold">- John D.</h4>
          </div>
          <div className="bg-white/20 p-8 rounded-2xl shadow-lg">
            <p className="mb-4 italic">"Reliable, secure, and very user-friendly!"</p>
            <h4 className="font-semibold">- Anne K.</h4>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 drop-shadow-lg">
          Ready to Get Started?
        </h2>
        <p className="mb-8 max-w-2xl mx-auto text-lg sm:text-xl">
          Join BukCare today and manage your health appointments effortlessly.
        </p>
        <div className="flex justify-center gap-6">
          <Link
            to="/signup"
            className="bg-yellow-400 text-gray-900 font-semibold px-10 py-3 rounded-3xl shadow-lg hover:bg-yellow-300 hover:scale-105 transform transition duration-300"
          >
            Sign Up Now
          </Link>
          <Link
            to="/signin"
            className="bg-white text-blue-600 font-semibold px-10 py-3 rounded-3xl shadow-lg hover:bg-gray-100 hover:scale-105 transform transition duration-300"
          >
            Sign In
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/30 py-6 text-center text-white/70 text-sm">
        © 2025 BukCare. All rights reserved.
      </footer>

    </div>
  );
}
