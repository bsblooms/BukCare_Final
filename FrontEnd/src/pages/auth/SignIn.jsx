
import { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { validateEmail, validatePassword } from "@/utils/validation";
import { signIn } from "@/services/SignInAPI";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }
    if (!validatePassword(password)) {
      setError("Password must be at least 6 characters");
      return;
    }

    setIsLoading(true);
    try {
      const data = await signIn(email, password);
      localStorage.setItem("accessToken", data.access);
      localStorage.setItem("refreshToken", data.refresh);
      navigate("/patient/home");
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#EAF2FF] via-white to-[#F9FBFF]">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-blue-100 overflow-hidden transition-all duration-300 hover:shadow-2xl mb-50">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0A2E75] to-[#0047BB] text-center py-8">
          <h1 className="text-3xl font-bold text-white tracking-tight">BukCare</h1>
          <p className="text-sm text-blue-100 mt-1">
            Trusted medical appointments made easy
          </p>
        </div>

        {/* Body */}
        <div className="p-8">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block mb-2 text-sm font-semibold text-slate-900">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute top-3 left-3 text-slate-400" size={20} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-[#0047BB] outline-none transition-all"
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block mb-2 text-sm font-semibold text-slate-900">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute top-3 left-3 text-slate-400" size={20} />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Enter your password"
                  className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-gray-300 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-[#0047BB] outline-none transition-all"
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-3 right-3 text-slate-400 hover:text-slate-600"
                  disabled={isLoading}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Forgot Password */}
            <div className="text-right text-sm">
              <Link
                to="/forgot-password"
                className="text-[#0047BB] hover:text-[#0A2E75] hover:underline font-medium"
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-2.5 bg-[#FFC300] hover:bg-[#FFF5CC] text-[#0A2E75] font-semibold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
            >
              {isLoading ? "Signing In..." : "Sign In"}
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="bg-[#EAF2FF] text-center py-4 border-t border-blue-100">
          <p className="text-sm text-slate-600">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-[#0047BB] hover:text-[#0A2E75] hover:underline font-semibold"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
