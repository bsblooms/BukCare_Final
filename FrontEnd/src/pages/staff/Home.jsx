// // src/pages/staff/Home.jsx
// import Navbar from '../../components/Navbar';

// export default function Home() {
//   return (
//     <div>
//       <Navbar role="staff" />
//       <h1 className="text-2xl font-bold mt-4">Staff Home</h1>
//       <p>Welcome to your staff dashboard!</p>
//     </div>
//   );
// }

import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Bell,
  User,
  Calendar,
  Settings,
  LogOut,
  ChevronDown,
  ClipboardList,
  BedDouble,
  FileText,
  Users,
  Stethoscope,
} from "lucide-react";
import AuthContext from "../../context/AuthContext"; // adjust path

const StaffInterface = () => {
  const { user, logout } = useContext(AuthContext);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <div className="h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <ClipboardList className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-800">
                  BukCare Staff
                </span>
              </div>
            </div>

            {/* Search Bar */}
            <div className="bg-white flex-1 max-w-2xl mx-4 lg:mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search patients, records..."
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <div className="relative">
                <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="relative p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors duration-200"
                >
                  <Bell className="w-6 h-6" />
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    5
                  </span>
                </button>

                {showNotifications && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <h3 className="font-semibold text-gray-800">
                        Notifications
                      </h3>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      <div className="px-4 py-8 text-center text-gray-500">
                        <Bell className="w-8 h-8 mx-auto mb-2 text-gray-300" />
                        <p className="text-sm">No new notifications</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Profile Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div className="hidden md:block text-left">
                    <p className="text-sm font-medium text-gray-800">
                      {user?.name || "Staff Member"}
                    </p>
                    <p className="text-xs text-gray-600">Hospital Staff</p>
                  </div>
                  <ChevronDown className="w-4 h-4 text-gray-600" />
                </button>

                {showProfileDropdown && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                    <div className="px-4 py-3 border-b border-gray-100">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                          <User className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">
                            {user?.name || "Guest"}
                          </p>
                          <p className="text-sm text-gray-600">
                            {user?.email || "No email"}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="py-2">
                      <a
                        href="#"
                        className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        <User className="w-4 h-4" />
                        <span className="text-sm">My Profile</span>
                      </a>
                      <a
                        href="#"
                        className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        <Settings className="w-4 h-4" />
                        <span className="text-sm">Settings</span>
                      </a>
                    </div>

                    <div className="border-t border-gray-100 pt-2">
                      <button
                        onClick={logout}
                        className="w-full flex items-center space-x-3 px-4 py-2 text-red-600 hover:bg-red-50 transition-colors"
                      >
                        <LogOut className="w-4 h-4" />
                        <span className="text-sm">Sign Out</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Welcome */}
      <h1 className="text-2xl rounded-2xl font-bold mb-0 mt-5 ml-10">
        Welcome, Hospital Staff!
      </h1>

      {/* Main Content */}
      <main className="h-[calc(100vh-4rem)] overflow-y-auto">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-6 space-y-8">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-6 text-white text-center">
            <h1 className="text-2xl font-bold mb-2">
              Streamline Hospital Operations with BukCare
            </h1>
            <p className="text-green-100">
              Manage walk-ins, doctor schedules, and patient records all in one place.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Walk-in Appointment */}
            <Link
              to="/staff/createappointment"
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:bg-green-50 transition-all cursor-pointer text-center block"
            >
              <div className="w-12 h-12 mx-auto mb-3 bg-green-100 rounded-lg flex items-center justify-center">
                <ClipboardList className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-800">
                Create New Appointment
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Set appointments for patients without phone or internet access.
              </p>
            </Link>

            {/* Doctor On Duty */}
            <Link
              to="/staff/finddoctor"
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:bg-blue-50 transition-all cursor-pointer text-center block"
            >
              <div className="w-12 h-12 mx-auto mb-3 bg-blue-100 rounded-lg flex items-center justify-center">
                <Stethoscope className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-800">Doctor Directory</h3>
              <p className="text-sm text-gray-600 mt-1">
                View doctor profiles, duty hours, and availability.
              </p>
            </Link>

            {/* Appointment Calendar */}
            <Link
              to="/staff/appointments"
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:bg-yellow-50 transition-all cursor-pointer text-center block"
            >
              <div className="w-12 h-12 mx-auto mb-3 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="font-semibold text-gray-800">
                Booked Appointments
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                BukCare: Where health meets your schedule.
              </p>
            </Link>
          </div>

          {/* Dashboard Content */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-4 lg:p-6 border-b border-gray-100">
              <h2 className="text-lg lg:text-xl font-semibold text-gray-800">
                Recent Staff Activity
              </h2>
            </div>
            <div className="p-4 lg:p-6 space-y-4">
              <div className="text-center py-8 text-gray-500">
                <ClipboardList className="w-8 h-8 mx-auto mb-2 text-gray-300" />
                <p className="text-sm">No recent activity</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StaffInterface;
