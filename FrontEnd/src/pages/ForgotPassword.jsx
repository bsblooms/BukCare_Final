import { useState } from "react";
import { Mail } from "lucide-react";
import GradientButton from "../components/GradientButton";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Password reset link sent to:", email);
    // Add logic to send request to backend API here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Forgot Password?
        </h2>
        <p className="text-sm text-gray-600 mb-6 text-center">
          Enter your registered email to receive password reset instructions.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute top-3 left-3 text-gray-400" size={20} />
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>
          </div>

          <GradientButton type="submit">Send Reset Link</GradientButton>
        </form>

        <p className="text-center text-sm mt-6">
          <Link to="/signin" className="text-blue-600 hover:underline">
            Back to Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
