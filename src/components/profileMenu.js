"use client";

import { signOut } from "next-auth/react";
import React from "react";

const ProfileMenu = () => {
  return (
    <div className="">
      <div className="text-center">
        <div
          className="py-3 px-4 bg-white border text-sm text-gray-600 rounded-md shadow-md"
          onClick={signOut}
          role="tooltip"
        >
          <p>Sign out</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileMenu;
