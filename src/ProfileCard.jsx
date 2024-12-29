// src/ProfileCard.js
import React from 'react';

const ProfileCard = () => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="flex items-center justify-center h-48 bg-gray-200">
        {/* Placeholder for the picture */}
        <div className="text-gray-400">Picture Placeholder</div>
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">Faysal</h2>
        <p className="text-gray-600">Education: Hons 2nd Year</p>
        <p className="text-gray-600">Profession: Frontend Developer & UI/UX Designer</p>
      </div>
    </div>
  );
};

export default ProfileCard;
