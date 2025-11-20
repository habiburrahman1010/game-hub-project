import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AuthContex } from "../provider/AuthProvider";

const UpdateProfile = () => {
  const { user, updateUser } = useContext(AuthContex);
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!name || !photo) {
      setError("Both fields are required");
      return;
    }

    updateUser({ displayName: name, photoURL: photo })
      .then(() => {
        setSuccess("Profile updated successfully!");
        setTimeout(() => navigate("/my-profile"), 1000); 
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div>
      <Navbar />
      <div className="w-11/12 max-w-md mx-auto mt-10 bg-base-100 p-6 shadow-md rounded-md">
        <h2 className="text-2xl font-semibold mb-4">Update Profile</h2>
        <form onSubmit={handleUpdate} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input 
            type="text"
            placeholder="Photo URL"
            className="input input-bordered w-full"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}/>
          <button type="submit" className="btn btn-primary w-full">
            Update Information
          </button>
        </form>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        {success && <p className="text-green-500 mt-2">{success}</p>}
      </div>
      <Footer />
    </div>
  );
};

export default UpdateProfile;
