"use client";

import Link from "next/link";
import { useState } from "react";
import ProfileMenuCard from "./profileMenuCard";

const menuSubItems = [
  {
    label: "Patients",
    iconSrc: "/icons/addPerson.svg",
    to: "/patiens",
  },
];

const otherMenuSubItems = [
  {
    label: "Settings",
    iconSrc: "/icons/settingsIcon.svg",
    to: "/settings",
  },
  {
    label: "My Account",
    iconSrc: "/icons/personIcon.svg",
    to: "/my-account",
  },
  {
    label: "Notification",
    iconSrc: "/icons/notificationBellIcon.svg",
    to: "/notifications",
  },
  {
    label: "Help",
    iconSrc: "/icons/infoIcon.svg",
    to: "/help",
  },
];

const intialMenuItemHoverState = {
  isHover: false,
  menuItemInd: null,
};

const Sidebar = () => {
  const [menuItemHover, setMenuItemHover] = useState(intialMenuItemHoverState);
  const [othersMenuItemHover, setOthersMenuItemHover] = useState(
    intialMenuItemHoverState
  );

  return (
    <div
      id="application-sidebar"
      className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 left-0 bottom-0 z-[60] w-64 px-6 py-7 bg-bg_body border-r border-gray-200 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0"
    >
      <div className="h-full w-full flex flex-col justify-between">
        <div className="w-full text-grey flex flex-col items-end ">
          <div className=" w-full flex justify-start">
            <a
              className="flex-none text-xl font-semibold dark:text-white"
              href="#"
              aria-label="Brand"
            >
              <img
                className=" w-[6.88rem] h-[2.12rem] object-cover"
                alt=""
                src="/images/companyLogo.png"
              />
            </a>
          </div>
          <nav className="mt-[2rem] w-full font-px text-sm">
            {/* Menu Items */}
            <div>
              <div className="ml-[1.25rem] my-4 text-text_default uppercase">
                Menu
              </div>
              {menuSubItems.length > 0 &&
                menuSubItems.map((subItem, subItemInd) => (
                  <Link
                    href={subItem.to}
                    className="text-grey w-full pl-[1.25rem] py-[0.8rem] flex items-center my-2 rounded-md hover:bg-bg_primary text-text_secondary hover:text-white cursor-pointer"
                    onMouseOver={() =>
                      setMenuItemHover({
                        isHover: true,
                        menuItemInd: subItemInd,
                      })
                    }
                    onMouseOut={() =>
                      setMenuItemHover(intialMenuItemHoverState)
                    }
                  >
                    <img
                      className="h-[1rem] w-[1rem]  max-w-full overflow-hidden max-h-full"
                      style={{
                        filter:
                          menuItemHover?.isHover &&
                          menuItemHover.menuItemInd === subItemInd &&
                          "brightness(0) invert(1)",
                      }}
                      alt=""
                      src={subItem.iconSrc}
                    />
                    <div className="flex-1 ml-3 ">{subItem.label}</div>
                  </Link>
                ))}
            </div>

            {/* Other Menu Items */}
            <div className="mt-10">
              <div className="ml-[1.25rem] my-4 text-text_default uppercase">
                Others
              </div>
              {otherMenuSubItems.length > 0 &&
                otherMenuSubItems.map((subItem, subItemInd) => (
                  <Link
                    href={subItem.to}
                    className="text-grey w-full pl-[1.25rem] py-[0.8rem] flex items-center my-2 rounded-md hover:bg-bg_primary text-text_secondary hover:text-white cursor-pointer"
                    onMouseOver={() =>
                      setOthersMenuItemHover({
                        isHover: true,
                        menuItemInd: subItemInd,
                      })
                    }
                    onMouseOut={() =>
                      setOthersMenuItemHover(intialMenuItemHoverState)
                    }
                  >
                    <img
                      className="h-[1rem] w-[1rem]  max-w-full overflow-hidden max-h-full"
                      style={{
                        filter:
                          othersMenuItemHover?.isHover &&
                          othersMenuItemHover?.menuItemInd === subItemInd &&
                          "brightness(0) invert(1)",
                      }}
                      alt=""
                      src={subItem.iconSrc}
                    />
                    <div className="flex-1 ml-3 ">{subItem.label}</div>
                  </Link>
                ))}
            </div>
          </nav>
        </div>
        <div>
          <ProfileMenuCard
            imgSrc={"/images/profilePic2.png"}
            profileName={"Kaily Jane"}
            emailAdd={"abc@example.com"}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
