

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
  Stethoscope,
} from "lucide-react";
import AuthContext from "../../context/AuthContext";

const StaffInterface = () => {
  const { user, logout } = useContext(AuthContext);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <div className="h-screen bg-gradient-to-br from-[#001F3F] to-[#004AAD] overflow-hidden">
      {/* Header */}
      <header className="bg-[#001B48]/80 backdrop-blur-md shadow-lg border-b border-[#002C70] sticky top-0 z-50">
        <div className="w-full px-6 lg:px-12">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-9 h-9 bg-[#FFC107] rounded-lg flex items-center justify-center">
                <ClipboardList className="w-5 h-5 text-[#001B48]" />
              </div>
              <span className="text-xl font-bold text-[#FFD54F]">
                BukCare Staff
              </span>
            </div>

            {/* Search Bar */}
            <div className="hidden md:block flex-1 max-w-2xl mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search patients, records..."
                  className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFC107] transition-all duration-200"
                />
              </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <div className="relative">
                <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="relative p-2 text-white hover:text-[#FFC107] transition-colors duration-200"
                >
                  <Bell className="w-6 h-6" />
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#FFC107] text-[#001B48] text-xs font-bold rounded-full flex items-center justify-center">
                    5
                  </span>
                </button>

                {showNotifications && (
                  <div className="absolute right-0 mt-2 w-80 bg-white text-gray-800 rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                    <div className="px-4 py-2 border-b border-gray-100 font-semibold">
                      Notifications
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
                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
                >
                  <div className="w-8 h-8 bg-[#FFC107] rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-[#001B48]" />
                  </div>
                  <div className="hidden md:block text-left">
                    <p className="text-sm font-medium text-[#FFD54F]">
                      {user?.name || "Staff Member"}
                    </p>
                    <p className="text-xs text-gray-300">Hospital Staff</p>
                  </div>
                  <ChevronDown className="w-4 h-4 text-[#FFD54F]" />
                </button>

                {showProfileDropdown && (
                  <div className="absolute right-0 mt-2 w-64 bg-white text-gray-800 rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                    <div className="px-4 py-3 border-b border-gray-100">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-[#FFC107] rounded-full flex items-center justify-center">
                          <User className="w-6 h-6 text-[#001B48]" />
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
                        className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-[#FFF5E0] transition-colors"
                      >
                        <User className="w-4 h-4" />
                        <span className="text-sm">My Profile</span>
                      </a>
                      <a
                        href="#"
                        className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-[#FFF5E0] transition-colors"
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

      {/* Welcome Section */}
      <section className="ml-15 py-10">
        <h1 className="text-3xl font-bold text-[#FFD54F]">
          Welcome, Hospital Staff!
        </h1>
      </section>

      {/* Main Content */}
      <main className="px-6 lg:px-12 pb-16">
        {/* Hero Section */}
          <div className="bg-gradient-to-r from-[#001F3F] to-[#004AAD] rounded-2xl p-6 text-white text-center shadow-md border border-[#004AAD]/30 mb-10 ">
            <h1 className="text-2xl font-bold mb-1">
              Your Time, Your Health - Scheduled with Care
            </h1>
            <p className="text-[#F5F7FF]">
              Book medical appointments online with BukCare. Simple, fast, and
              available anytime. Your Health, Your Schedule.
            </p>
          </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Create Appointment */}
          <Link
            to="/staff/createappointment"
            className="bg-white text-[#001B48] rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all text-center"
          >
            <div className="w-12 h-12 mx-auto mb-3 bg-[#FFF5E0] rounded-lg flex items-center justify-center">
              <ClipboardList className="w-6 h-6 text-[#FFC107]" />
            </div>
            <h3 className="font-semibold text-lg mb-1">Create Appointment</h3>
            <p className="text-sm text-gray-600">
              Set appointments for patients without internet access.
            </p>
          </Link>

          {/* Doctor Directory */}
          <Link
            to="/staff/finddoctor"
            className="bg-white text-[#001B48] rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all text-center"
          >
            <div className="w-12 h-12 mx-auto mb-3 bg-[#E3F2FD] rounded-lg flex items-center justify-center">
              <Stethoscope className="w-6 h-6 text-[#003366]" />
            </div>
            <h3 className="font-semibold text-lg mb-1">Doctor Directory</h3>
            <p className="text-sm text-gray-600">
              View profiles, availability, and schedules.
            </p>
          </Link>

          {/* Appointments */}
          <Link
            to="/staff/appointments"
            className="bg-white text-[#001B48] rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all text-center"
          >
            <div className="w-12 h-12 mx-auto mb-3 bg-[#FFF9C4] rounded-lg flex items-center justify-center">
              <Calendar className="w-6 h-6 text-[#FFC107]" />
            </div>
            <h3 className="font-semibold text-lg mb-1">Booked Appointments</h3>
            <p className="text-sm text-gray-600">
              Track upcoming and completed patient appointments.
            </p>
          </Link>
        </div>

        {/* Activity Section */}
        <div className="mt-12 bg-white text-[#001B48] rounded-xl shadow-md p-8">
          <h2 className="text-xl font-semibold mb-4">Recent Staff Activity</h2>
          <div className="text-center py-8 text-gray-500">
            <ClipboardList className="w-8 h-8 mx-auto mb-2 text-gray-400" />
            <p className="text-sm">No recent activity</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StaffInterface;
