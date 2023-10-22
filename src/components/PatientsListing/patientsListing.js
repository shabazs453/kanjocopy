"use client";

import TableContent from "./tableContent";
import TableHeading from "./tableHeading";

const PatientsListing = ({ addPatientForm, editPatientForm }) => {
  return (
    <>
      <div className="max-w-[85rem] text-text_default m-auto">
        <div className="flex flex-col">
          <div className="min-w-full inline-block align-middle">
            <div className="bg-white overflow-hidden">
              <TableHeading
                heading={"Patients Listing"}
                btnLabel={"Add Patient"}
                onClickFunc={addPatientForm}
              />
              <div className="overflow-x-auto">
                <TableContent editPatientForm={editPatientForm} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientsListing;
