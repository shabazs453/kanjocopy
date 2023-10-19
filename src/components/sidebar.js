"use client";

import Link from "next/link";
import { useState } from "react";

const sidebarItems = [
  {
    label: "Menu",
    subItems: [
      {
        label: "Patients",
        iconSrc: "/icons/addPerson.svg",
        to: "/patiens",
      },
    ],
  },
  {
    label: "Others",
    subItems: [
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
    ],
  },
  // Other menu items can be added here if needed
];

const intialMenuItemHoverState = {
  isHover: false,
  menuInd: null,
  menuItemInd: null,
};

const Sidebar = () => {
  const [menuItemHover, setMenuItemHover] = useState(intialMenuItemHoverState);
  console.log(menuItemHover);
  return (
    <div
      id="application-sidebar"
      className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 left-0 bottom-0 z-[60] w-[15rem] bg-gray-100 border-r border-gray-200 pt-7 pb-10 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0 dark:scrollbar-y dark:bg-gray-800 dark:border-gray-700"
    >
      <div className=" w-[15rem]  text-grey flex flex-col items-end px-6">
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
        <nav className="mt-[2rem] w-[12.5rem] h-full font-px text-[0.88rem]">
          {sidebarItems &&
            sidebarItems.length > 0 &&
            sidebarItems.map((sidebarItem, index) => (
              <div>
                <div className="ml-[1.25rem] my-4 text-text_default uppercase">
                  {sidebarItem.label}
                </div>
                {sidebarItem.subItems.length > 0 &&
                  sidebarItem.subItems.map((subItem, subItemInd) => (
                    <Link
                      href={subItem.to}
                      className="text-grey w-full pl-[1.25rem] py-[0.8rem] flex items-center my-2 rounded-md hover:bg-bg_primary text-text_secondary hover:text-white cursor-pointer"
                      onMouseOver={() =>
                        setMenuItemHover({
                          isHover: true,
                          menuInd: index,
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
                            menuItemHover?.menuInd === index &&
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
            ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
