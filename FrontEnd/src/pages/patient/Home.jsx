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
  Stethoscope,
} from "lucide-react";
import AuthContext from "../../context/AuthContext";

const PatientInterface = () => {
  const { user, logout } = useContext(AuthContext);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <div className="h-screen bg-gradient-to-br from-[#001F3F] to-[#004AAD] overflow-hidden">
      {/* Header */}
      <header className="bg-[#001F3F]/90 backdrop-blur-md border-b border-[#002B70]/40 shadow-md sticky top-0 z-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-[#FFC107] rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-[#001F3F]" />
                </div>
                <span className="text-xl font-bold text-[#FFC107]">BukCare</span>
              </div>
            </div>

            {/* Search Bar */}
            <div className="bg-white flex-1 max-w-2xl mx-4 lg:mx-8 rounded-xl">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search doctors, appointments..."
                  className="w-full pl-10 pr-4 py-2.5 bg-[#F3F6FF] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFC107] focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <div className="relative">
                <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="relative p-2 text-white hover:text-[#FFC107] hover:bg-[#002B70]/50 rounded-lg transition-colors duration-200"
                >
                  <Bell className="w-6 h-6" />
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#FFC107] text-[#001F3F] text-xs rounded-full flex items-center justify-center">
                    3
                  </span>
                </button>

                {showNotifications && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <h3 className="font-semibold text-gray-800">Notifications</h3>
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
                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-[#002B70]/50 transition-colors duration-200"
                >
                  <div className="w-8 h-8 bg-[#FFC107] rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-[#001F3F]" />
                  </div>
                  <div className="hidden md:block text-left">
                    <p className="text-sm font-medium text-white">
                      {user?.name || "Juan Dela Cruz"}
                    </p>
                    <p className="text-xs text-gray-300">Patient</p>
                  </div>
                  <ChevronDown className="w-4 h-4 text-gray-300" />
                </button>

                {showProfileDropdown && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                    <div className="px-4 py-3 border-b border-gray-100">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-[#FFC107] rounded-full flex items-center justify-center">
                          <User className="w-6 h-6 text-[#001F3F]" />
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
                        className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-[#F3F6FF] transition-colors"
                      >
                        <User className="w-4 h-4" />
                        <span className="text-sm">My Profile</span>
                      </a>
                      <a
                        href="#"
                        className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-[#F3F6FF] transition-colors"
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

      {/* Welcome Message */}
      <h1 className="text-2xl font-bold mb-0 mt-5 ml-10 text-white">
        Welcome to Dashboard!
      </h1>

      {/* Main Content */}
      <main className="h-[calc(100vh-4rem)] overflow-y-auto">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-6 space-y-8">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-[#001F3F] to-[#004AAD] rounded-2xl p-6 text-white text-center shadow-md border border-[#004AAD]/30">
            <h1 className="text-2xl font-bold mb-2">
              Your Time, Your Health - Scheduled with Care
            </h1>
            <p className="text-[#F5F7FF]">
              Book medical appointments online with BukCare. Simple, fast, and
              available anytime. Your Health, Your Schedule.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/patient/doctorfind"
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:bg-[#F3F6FF] transition-all cursor-pointer text-center block"
            >
              <div className="w-12 h-12 mx-auto mb-3 bg-[#EAF0FF] rounded-lg flex items-center justify-center">
                <Stethoscope className="w-6 h-6 text-[#004AAD]" />
              </div>
              <h3 className="font-semibold text-[#001F3F]">Find a Doctor</h3>
              <p className="text-sm text-gray-600 mt-1">
                Search and connect with trusted doctors at BukCare. Book your
                appointment today.
              </p>
            </Link>

            <Link
              to="/patient/addappointments"
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:bg-[#FFF8E1] transition-all cursor-pointer text-center block"
            >
              <div className="w-12 h-12 mx-auto mb-3 bg-[#FFF3CD] rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-[#FFC107]" />
              </div>
              <h3 className="font-semibold text-[#001F3F]">
                Appointment Scheduling
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Book your medical appointments anytime, anywhere, and manage
                your schedule with ease.
              </p>
            </Link>

            <Link
              to="/patient/notifyme/"
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:bg-[#EAF0FF] transition-all cursor-pointer text-center block"
            >
              <div className="w-12 h-12 mx-auto mb-3 bg-[#EAF0FF] rounded-lg flex items-center justify-center">
                <Bell className="w-6 h-6 text-[#004AAD]" />
              </div>
              <h3 className="font-semibold text-[#001F3F]">Notify Me</h3>
              <p className="text-sm text-gray-600 mt-1">
                Stay updated with instant reminders and alerts so you’ll never
                miss an appointment again.
              </p>
            </Link>
          </div>

          {/* Dashboard Content */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-4 lg:p-6 border-b border-gray-100">
              <h2 className="text-lg lg:text-xl font-semibold text-[#001F3F]">
                Recent Activity
              </h2>
            </div>
            <div className="p-4 lg:p-6 space-y-4">
              <div className="text-center py-8 text-gray-500">
                <Calendar className="w-8 h-8 mx-auto mb-2 text-gray-300" />
                <p className="text-sm">No recent activity</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PatientInterface;
