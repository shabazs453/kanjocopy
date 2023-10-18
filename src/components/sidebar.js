"use client";

import Link from "next/link";

const sidebarItems = [
  {
    label: "Menu",
    subItems: [
      {
        label: "Patients",
        iconSrc: "/icons/personAddWhiteIcon.svg",
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

const Sidebar = () => {
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
              <>
                <div className=" ml-[1.25rem] my-4 text-gray-200 uppercase">
                  {sidebarItem.label}
                </div>
                {sidebarItem.subItems.length > 0 &&
                  sidebarItem.subItems.map((subItem, index) => (
                    <Link
                      href={subItem.to}
                      className="text-grey w-full pl-[1.25rem] py-[0.8rem] flex items-center my-2 rounded-md hover:bg-royalblue-100 hover:text-white cursor-pointer "
                    >
                      <img
                        className=" h-[1rem] w-[1rem]  max-w-full overflow-hidden max-h-full"
                        alt=""
                        src={subItem.iconSrc}
                      />
                      <div className="flex-1 ml-3">{subItem.label}</div>
                    </Link>
                  ))}
              </>
            ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
