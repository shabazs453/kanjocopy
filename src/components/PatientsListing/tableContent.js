import React from "react";

const columnHeadings = [
  "Patient Name",
  "Parent Name",
  "Mobile Number",
  "Email",
  "Created At",
  "Actions",
];

const peopleData = [
  {
    id: 1,
    patientName: "John Doe",
    parentName: "Jane Doe",
    mobileNumber: "123-456-7890",
    email: "john.doe@example.com",
    createdAt: "09 Oct 2023, 11:30AM",
  },
  {
    id: 2,
    patientName: "Alice Johnson",
    parentName: "Bob Johnson",
    mobileNumber: "234-567-8901",
    email: "alice.johnson@example.com",
    createdAt: "10 Oct 2023, 11:30AM",
  },
  {
    id: 3,
    patientName: "Sarah Smith",
    parentName: "David Smith",
    mobileNumber: "345-678-9012",
    email: "sarah.smith@example.com",
    createdAt: "11 Oct 2023, 11:30AM",
  },
  {
    id: 4,
    patientName: "Michael Brown",
    parentName: "Laura Brown",
    mobileNumber: "456-789-0123",
    email: "michael.brown@example.com",
    createdAt: "12 Oct 2023, 11:30AM",
  },
  {
    id: 5,
    patientName: "Emma Wilson",
    parentName: "James Wilson",
    mobileNumber: "567-890-1234",
    email: "emma.wilson@example.com",
    createdAt: "13 Oct 2023, 11:30AM",
  },
  {
    id: 6,
    patientName: "Oliver Johnson",
    parentName: "Sophia Johnson",
    mobileNumber: "678-901-2345",
    email: "oliver.johnson@example.com",
    createdAt: "14 Oct 2023, 11:30AM",
  },
  {
    id: 7,
    patientName: "Mia Davis",
    parentName: "Ethan Davis",
    mobileNumber: "789-012-3456",
    email: "mia.davis@example.com",
    createdAt: "15 Oct 2023, 11:30AM",
  },
//   {
//     id: 8,
//     patientName: "Noah Martin",
//     parentName: "Ava Martin",
//     mobileNumber: "890-123-4567",
//     email: "noah.martin@example.com",
//     createdAt: "16 Oct 2023, 11:30AM",
//   },
//   {
//     id: 9,
//     patientName: "Liam Anderson",
//     parentName: "Lily Anderson",
//     mobileNumber: "901-234-5678",
//     email: "liam.anderson@example.com",
//     createdAt: "17 Oct 2023, 11:30AM",
//   },
//   {
//     id: 10,
//     patientName: "Sophia Wilson",
//     parentName: "William Wilson",
//     mobileNumber: "012-345-6789",
//     email: "sophia.wilson@example.com",
//     createdAt: "18 Oct 2023, 11:30AM",
//   },
];

const TableContent = () => {
  return (
    <>
      <table className="min-w-full mt-10 border-collapse border-spacing-0">
        <thead className="">
          <tr>
            <th scope="col" className="w-8"></th>
            {columnHeadings &&
              columnHeadings.length > 0 &&
              columnHeadings.map((heading) => (
                <th scope="col" className=" px-6 pb-3 text-left">
                  <div className="flex items-center gap-x-2">
                    <span className="text-sm text-text_secondary font-normal">
                      {heading}
                    </span>
                  </div>
                </th>
              ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border_primary">
          {peopleData &&
            peopleData.length > 0 &&
            peopleData.map((item, index) => (
              <tr className="text-sm text-text_default">
                <td className="whitespace-nowrap border-y-[0.5px] border-solid border-border_primary ">
                  <div className="flex items-center justify-center p-6">
                    <div
                      className={`h-3 w-3 rounded-full ${
                        index % 4 === 0
                          ? "bg-bg_primary"
                          : index % 4 === 1
                          ? "bg-bg_success"
                          : index % 4 === 2
                          ? "bg-text_secondary"
                          : index % 4 === 3
                          ? "bg-bg_danger"
                          : ""
                      }`}
                    />
                  </div>
                </td>
                <td className="whitespace-nowrap border-y-[0.5px] border-solid border-border_primary">
                  <div className="px-6 p-6">
                    <div className="flex items-center">
                      <div className="grow">
                        <a
                          className="inline-flex items-center gap-x-1.5 text-sm text-bg_primary underline"
                          href="#"
                        >
                          {item.patientName}
                        </a>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="whitespace-nowrap border-y-[0.5px] border-solid border-border_primary">
                  <div className="px-6 p-6">
                    <span className="block">{item.parentName}</span>
                  </div>
                </td>
                <td className="whitespace-nowrap border-y-[0.5px] border-solid border-border_primary">
                  <div className="px-6 p-6">
                    <span className="block">{item.mobileNumber}</span>
                  </div>
                </td>
                <td className="whitespace-nowrap border-y-[0.5px] border-solid border-border_primary">
                  <div className="px-6 p-6">
                    <span className="block">{item.email}</span>
                  </div>
                </td>

                <td className="whitespace-nowrap border-y-[0.5px] border-solid border-border_primary">
                  <div className="px-6 p-6">
                    <span className="block">{item.createdAt}</span>
                  </div>
                </td>
                <td className="whitespace-nowrap border-y-[0.5px] border-solid border-border_primary">
                  <div className="px-6 py-6 flex justify-between items-center">
                    <div className="flex items-center justify-center cursor-pointer">
                      <img className="w-5 h-5" src="/icons/editMenuIcon.svg"/>
                    </div>
                    <div className="flex items-center justify-center cursor-pointer">
                      <img className="w-5 h-5" src="/icons/reportIcon.svg"/>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t">
        <div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <span className="font-semibold text-text_default dark:text-gray-200">
              6
            </span>{" "}
            results
          </p>
        </div>
        <div>
          <div className="inline-flex gap-x-2">
            <button
              type="button"
              className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
            >
              <svg
                className="w-3 h-3"
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                />
              </svg>
              Prev
            </button>
            <button
              type="button"
              className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
            >
              Next
              <svg
                className="w-3 h-3"
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableContent;
