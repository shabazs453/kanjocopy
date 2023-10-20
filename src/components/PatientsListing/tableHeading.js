"use Client";

import PrimaryButton from "../gloabalComponents/primaryButton";
import SearchBox from "../gloabalComponents/searchBox";

const TableHeading = ({ heading, btnLabel }) => {
  return (
    <div className="w-full flex flex-col items-start justify-start gap-4 lg:gap-0 lg:flex-row lg:justify-between lg:items-center ">
      <div>
        <p className="text-[1.125rem]">{heading}</p>
      </div>
      <div className="w-full lg:w-max">
        <div className="inline-flex gap-x-4 w-full">
          <SearchBox placeholder={"Search by patients name"} />
          <PrimaryButton btnLabel={btnLabel} />
        </div>
      </div>
    </div>
  );
};

export default TableHeading;
