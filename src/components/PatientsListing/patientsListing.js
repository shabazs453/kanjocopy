"use client";

import TableComponent from "./tableComponent";
import TableHeading from "./tableHeading";

const PatientsListing = () => {
  return (
    <>
      <div className="max-w-[85rem] text-text_default m-auto">
        <div className="flex flex-col">
          <div className="min-w-full inline-block align-middle">
            <div className="bg-white border border-gray-200  shadow-sm overflow-hidden">
              <TableHeading
                heading={"Patients Listing"}
                btnLabel={"Add Patient"}
              />
              <div className="overflow-x-auto">
                <TableComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientsListing;
