import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  KeyRound,
} from "lucide-react";
import { Link } from "react-router-dom";
import GradientButton from "@/components/GradientButton";
import {
  validateEmail,
  validatePassword,
  validateName,
} from "@/utils/validation";

export default function SignUp() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleNextStep = (e) => {
    e.preventDefault();

    // --- Basic validation per step ---
    if (step === 1 && !validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (step === 2 && otp.length < 6) {
      setError("Please enter a valid 6-digit verification code.");
      return;
    }
    if (step === 3 && (!validateName(firstName) || !validateName(lastName))) {
      setError("Please fill in all required fields correctly.");
      return;
    }
    if (step === 3 && !validatePassword(password)) {
      setError("Password must be at least 8 characters with letters and numbers.");
      return;
    }

    setError("");
    if (step < 3) setStep(step + 1);
    else navigate("/signin");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#EAF2FF] via-white to-[#F9FBFF] py-10 px-4">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-2xl overflow-hidden border border-blue-100 transition-all duration-300 hover:shadow-2xl mb-50">

        {/* Header */}
        <div className="bg-gradient-to-r from-[#0A2E75] to-[#0047BB] p-6 text-center">
          <h2 className="text-3xl font-bold text-white">Create Your BukCare Account</h2>
          <p className="text-blue-100 mt-2 text-sm">
            Sign up to schedule appointments easily
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center bg-[#EAF2FF] py-4">
          <div className="flex items-center space-x-4">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center space-x-4">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                    step >= s
                      ? "bg-gradient-to-r from-[#0A2E75] to-[#0047BB] text-white shadow-md"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {s}
                </div>
                {s < 3 && (
                  <div
                    className={`w-10 h-1 rounded transition-all ${
                      step > s
                        ? "bg-gradient-to-r from-[#0A2E75] to-[#0047BB]"
                        : "bg-gray-200"
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Container */}
        <div className="p-8 bg-white">
          {error && (
            <div className="bg-red-50 border border-red-300 text-red-700 px-4 py-3 rounded-lg text-sm mb-4">
              {error}
            </div>
          )}

          {/* Step 1: Email Verification */}
          {step === 1 && (
            <form onSubmit={handleNextStep} className="space-y-6">
              <div>
                <label className="block mb-1 text-sm font-semibold text-slate-900">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute top-3 left-3 text-slate-400" size={20} />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#0047BB] outline-none text-slate-900"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-[#FFC300] hover:bg-[#FFF5CC] text-[#0A2E75] font-semibold rounded-xl transition-all shadow-md hover:shadow-lg"
              >
                Send Verification Code
              </button>
            </form>
          )}

          {/* Step 2: OTP Verification */}
          {step === 2 && (
            <form onSubmit={handleNextStep} className="space-y-6">
              <p className="text-center text-slate-600">
                Enter the 6-digit code sent to{" "}
                <span className="font-semibold text-slate-900">{email}</span>
              </p>
              <div className="relative">
                <KeyRound className="absolute top-3 left-3 text-slate-400" size={20} />
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  maxLength={6}
                  placeholder="------"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 text-center tracking-widest focus:ring-2 focus:ring-[#0047BB] text-slate-900"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-[#FFC300] hover:bg-[#FFF5CC] text-[#0A2E75] font-semibold rounded-xl transition-all shadow-md hover:shadow-lg"
              >
                Verify Code
              </button>
            </form>
          )}

          {/* Step 3: Create Account */}
          {step === 3 && (
            <form onSubmit={handleNextStep} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 text-sm font-semibold text-slate-900">
                    First Name
                  </label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#0047BB] text-slate-900"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-sm font-semibold text-slate-900">
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last Name"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#0047BB] text-slate-900"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-1 text-sm font-semibold text-slate-900">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute top-3 left-3 text-slate-400" size={20} />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#0047BB] text-slate-900"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-3 right-3 text-slate-400 hover:text-slate-600"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-[#FFC300] hover:bg-[#FFF5CC] text-[#0A2E75] font-semibold rounded-xl transition-all shadow-md hover:shadow-lg"
              >
                Create Account
              </button>
            </form>
          )}
        </div>

        {/* Footer */}
        <div className="bg-[#EAF2FF] p-4 text-center border-t border-blue-100">
          <p className="text-sm text-slate-600">
            Already have an account?{" "}
            <Link
              to="/signin"
              className="text-[#0047BB] hover:text-[#0A2E75] font-semibold hover:underline"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
