"use client";

import { useState } from "react";

const ProfileLink = ({ imgSrc, profileName, emailAdd, openProfileMenu }) => {
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  return (
    <div className="w-full flex items-center justify-between p-2 bg-white rounded-lg relative">
      <div className="flex gap-2">
        <img src={imgSrc} className="h-8 w-8 rounded-lg" />
        <div>
          <p className="text-text_default">{profileName}</p>
          <p className="text-text_secondary text-[11px]">{emailAdd}</p>
        </div>
      </div>
      <div
        className="mr-2 cursor-pointer flex items-center justify-center"
        onClick={() => openProfileMenu((prev) => !prev)}
      >
        <img className="h-4 w-4" src="/icons/threeDotMenu.svg" />
      </div>
    </div>
  );
};

export default ProfileLink;
