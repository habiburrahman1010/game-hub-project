import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AuthContex } from "../provider/AuthProvider";

const MyProfile = () => {
  const { user } = useContext(AuthContex);
  const navigate = useNavigate();

  const handleUpdateClick = () => {
    navigate("/update-profile"); 
  };

  return (
    <div>
      <Navbar />
      <div className="w-11/12 max-w-md mx-auto my-10 bg-base-100 p-6 shadow-md rounded-md">
        <h2 className="text-2xl font-semibold mb-4">My Profile</h2>
        
        <div className="flex flex-col items-center gap-4">
          <img
            className="w-24 h-24 rounded-full object-cover"
            src={user?.photoURL || ""}
            alt="Profile" />
          <p className="text-lg font-medium">{user?.displayName || ""}</p>
          <p className="text-gray-600">{user?.email}</p>
        </div>

        <button
          onClick={handleUpdateClick}
          className="btn btn-primary mt-6 w-full"
        >
          Update Information
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default MyProfile;
