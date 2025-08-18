import { useState } from "react";
import { Mail, Lock, User, Eye, EyeOff, Phone, Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import GradientButton from "../components/GradientButton";

export default function SignUp() {
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    mname: "",
    email: "",
    password: "",
    confirm_password: "",
    sex: "true",
    dob: "",
    contact_number: ""
  });
  

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form); // Replace with actual API call
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Sign Up for BukCare</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* First Name */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">First Name</label>
            <input
              type="text"
              name="fname"
              value={form.fname}
              onChange={handleChange}
              required
              placeholder="Enter your first name"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              name="lname"
              value={form.lname}
              onChange={handleChange}
              required
              placeholder="Enter your last name"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          {/* Middle Name */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Middle Name</label>
            <input
              type="text"
              name="mname"
              value={form.mname}
              onChange={handleChange}
              placeholder="Enter your middle name"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={form.dob}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          {/* Sex */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Sex</label>
            <select
              name="sex"
              value={form.sex}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
            >
              <option value="true">Male</option>
              <option value="false">Female</option>
            </select>
          </div>

          {/* Contact Number */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Contact Number</label>
            <div className="relative">
              <Phone className="absolute top-3 left-3 text-gray-400" size={20} />
              <input
                type="tel"
                name="contact_number"
                value={form.contact_number}
                onChange={handleChange}
                required
                placeholder="09XXXXXXXXX"
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
            <div className="relative">
              <Mail className="absolute top-3 left-3 text-gray-400" size={20} />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
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
              type={showPassword ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={handleChange}
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

        {/* Confirm Password */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Confirm Password</label>
          <div className="relative">
            <Lock className="absolute top-3 left-3 text-gray-400" size={20} />
            <input
              type={showPassword ? "text" : "password"}
              name="confirm_password"
              value={form.confirm_password}
              onChange={handleChange}
              required
              placeholder="Re-enter your password"
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


          {/* Submit */}
          <GradientButton type="submit">Sign Up</GradientButton>
        </form>

        <p className="text-center text-sm mt-6">
          Already have an account?{" "}
          <Link to="/signin" className="text-blue-600 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
