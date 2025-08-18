import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  // Dummy user data, replace with real user info from context or API
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "https://i.pravatar.cc/100",
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-600 flex flex-col items-center p-6 text-white">
      {/* Top Bar with Avatar */}
      <div className="w-full max-w-6xl flex justify-end items-center mb-4">
        <img
          src={user.avatar}
          alt="User Avatar"
          className="w-10 h-10 rounded-full border-2 border-white object-cover shadow"
        />
      </div>

      {/* Header */}
      <header className="w-full max-w-3xl flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold">My Profile</h1>
        <button
          onClick={() => navigate(-1)}
          className="bg-white text-blue-600 px-4 py-2 rounded shadow hover:bg-gray-100 transition"
        >
          Back
        </button>
      </header>

      {/* Profile Card */}
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-3xl text-gray-800 flex flex-col items-center">
        <img
          src={user.avatar}
          alt="User Avatar"
          className="w-24 h-24 rounded-full border-4 border-blue-600 mb-6"
        />
        <h2 className="text-2xl font-semibold mb-2">{user.name}</h2>
        <p className="text-gray-600 mb-6">{user.email}</p>

        <button
          onClick={() => alert("Edit profile feature coming soon!")}
          className="px-6 py-2 bg-gradient-to-r from-green-400 to-blue-600 text-white rounded hover:from-green-500 hover:to-blue-700 transition"
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
}
