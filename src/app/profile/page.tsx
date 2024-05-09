import React from "react";

const ProfilePage = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-black bg-dot-white/[0.2]">
      <div className="bg-white rounded-lg drop-shadow-md p-4 m-10 w-full flex flex-col justify-center items-center gap-4">
        <h1 className="text-2xl font-bold">Your Profile</h1>
        <h3 className="font-semibold text-xl text-gray-900">Name</h3>
        <h3 className="font-semibold text-xl text-gray-900">Email Address</h3>
      </div>
    </div>
  );
};

export default ProfilePage;
