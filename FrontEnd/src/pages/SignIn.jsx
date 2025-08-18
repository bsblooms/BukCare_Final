import { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import GradientButton from "../components/GradientButton";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // 🔍 password visibility state

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Sign In to BukCare</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
            <div className="relative">
              <Mail className="absolute top-3 left-3 text-gray-400" size={20} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
            <div className="relative">
              <Lock className="absolute top-3 left-3 text-gray-400" size={20} />
              <input
                type={showPassword ? "text" : "password"} // 👁 toggle visibility
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
                className="w-full pl-10 pr-10 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="text-right text-sm">
            <Link to="/forgot-password" className="text-blue-600 hover:underline">
              Forgot password?
            </Link>
          </div>

          {/* Submit Button */}
          <GradientButton type="submit">Sign In</GradientButton>
        </form>

        {/* Footer */}
        <p className="text-center text-sm mt-6">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
