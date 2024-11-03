"use client";

import { useModal } from "@/hooks/useModalStore";
import React, { useState } from "react";

const UserProfile = () => {
  const { onOpen } = useModal();
  const [profileData] = useState({
    name: "Ansal Jain",
    email: "jainansal@gmail.com",
    phone: "9876543210",
    address: "Faridabad",
  });

  const handleUpdateProfile = () => {
    // Logic for opening update profile modal or form
    console.log("Update Profile Clicked");
  };

  const handleChangePassword = () => {
    // Logic for opening change password modal or form
    console.log("Change Password Clicked");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <div className="text-2xl font-bold mb-4 font-[Comic Sans MS]">
          My Profile
        </div>
        <div className="flex justify-between items-start">
          <div className="space-y-2">
            <p>
              <span className="font-semibold">Name:</span> {profileData.name}
            </p>
            <p>
              <span className="font-semibold">Email:</span> {profileData.email}
            </p>
            <p>
              <span className="font-semibold">Phone:</span> {profileData.phone}
            </p>
            <p>
              <span className="font-semibold">Address:</span>{" "}
              {profileData.address}
            </p>
          </div>
          <div className="w-20 h-20 bg-gray-200 rounded-full border border-gray-300"></div>
        </div>
        <div className="mt-6 space-y-2">
          <button
            onClick={() => onOpen("updateProfile", { user: profileData })}
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Update Profile
          </button>
          <button
            onClick={() => onOpen("changePassword")}
            className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600"
          >
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
