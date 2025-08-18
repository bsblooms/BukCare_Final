import React from "react";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-400 to-blue-600 text-white px-4">
      <h1 className="text-5xl font-bold mb-6">Welcome to BukCare</h1>
      <p className="mb-8 max-w-xl text-center text-lg">
        Book your appointment online with ease!
      </p>
      <div className="space-x-4">
        <Link
          to="/signin"
          className="bg-white text-green-600 font-semibold px-6 py-3 rounded hover:bg-gray-100 transition"
        >
          Sign In
        </Link>
        <Link
          to="/signup"
          className="bg-white text-green-600 font-semibold px-6 py-3 rounded hover:bg-gray-100 transition"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}
