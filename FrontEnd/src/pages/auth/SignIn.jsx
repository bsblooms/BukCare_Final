// import { useState } from "react";
// import { Mail, Lock, Eye, EyeOff } from "lucide-react";
// import { Link, useNavigate } from "react-router-dom";
// import GradientButton from "@/components/GradientButton";
// import { validateEmail, validatePassword } from "@/utils/validation";
// import { signIn } from "@/services/SignInAPI"; // ✅ API call


// export default function SignIn() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     // Frontend validation
//     if (!validateEmail(email)) {
//       setError("Please enter a valid email address");
//       return;
//     }
//     if (!validatePassword(password)) {
//       setError("Password must be at least 6 characters");
//       return;
//     }

//     setIsLoading(true);

//    try {
//       const data = await signIn(email, password); // ✅ use API function

//       console.log("Sign in successful:", data);

//       // Save JWT tokens
//       localStorage.setItem("accessToken", data.access);
//       localStorage.setItem("refreshToken", data.refresh);

//       // Redirect
//       navigate("/patient/home");
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50">
//       <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
//         <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
//           Sign In to BukCare
//         </h2>

//         {error && (
//           <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm mb-4">
//             {error}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Email */}
//           <div>
//             <label className="block mb-1 text-sm font-medium text-gray-700">
//               Email
//             </label>
//             <div className="relative">
//               <Mail className="absolute top-3 left-3 text-gray-400" size={20} />
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 placeholder="Enter your email"
//                 className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
//                 disabled={isLoading}
//               />
//             </div>
//           </div>

//           {/* Password */}
//           <div>
//             <label className="block mb-1 text-sm font-medium text-gray-700">
//               Password
//             </label>
//             <div className="relative">
//               <Lock className="absolute top-3 left-3 text-gray-400" size={20} />
//               <input
//                 type={showPassword ? "text" : "password"}
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//                 placeholder="Enter your password"
//                 className="w-full pl-10 pr-10 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
//                 disabled={isLoading}
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
//                 disabled={isLoading}
//               >
//                 {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//               </button>
//             </div>
//           </div>

//           {/* Forgot Password */}
//           <div className="text-right text-sm">
//             <Link to="/forgot-password" className="text-blue-600 hover:underline">
//               Forgot password?
//             </Link>
//           </div>

//           {/* Submit Button */}
//           <GradientButton type="submit" disabled={isLoading}>
//             {isLoading ? "Signing In..." : "Sign In"}
//           </GradientButton>
//         </form>

//         {/* Footer */}
//         <p className="text-center text-sm mt-6">
//           Don’t have an account?{" "} 
//           <Link to="/signup" className="text-blue-600 hover:underline">
//             Sign Up
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import GradientButton from "@/components/GradientButton";
import { validateEmail, validatePassword } from "@/utils/validation";
import { signIn } from "@/services/SignInAPI"; // ✅ API call

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

    // Frontend validation
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
      const data = await signIn(email, password); // ✅ use API function

      console.log("Sign in successful:", data);

      // Save JWT tokens
      localStorage.setItem("accessToken", data.access);
      localStorage.setItem("refreshToken", data.refresh);

      // Redirect
      navigate("/patient/home");
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-md overflow-hidden">
        
        {/* Header */}
        <div className="bg-green-400 text-center py-6">
          <h2 className="text-2xl font-bold text-gray-900">Sign In to BukCare</h2>
          <p className="text-sm text-gray-800">
            Access your account to book appointments easily
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
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute top-3 left-3 text-gray-400" size={20} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute top-3 left-3 text-gray-400" size={20} />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Enter your password"
                  className="w-full pl-10 pr-10 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
                  disabled={isLoading}
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
            <GradientButton type="submit" disabled={isLoading}>
              {isLoading ? "Signing In..." : "Sign In"}
            </GradientButton>
          </form>
        </div>

        {/* Footer */}
        <div className="bg-blue-950 text-center py-4">
          <p className="text-sm text-white">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-green-300 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
