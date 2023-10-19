import StatisticCard from "./statisticCard";

const statisticData = [
  {
    imageSrc: "/icons/profileAvatar.svg",
    label: "Total Patients",
    count: "5423",
  },
  {
    imageSrc: "/icons/profileWaitingAvatar.svg",
    label: "Total Diagnostic",
    count: "5423",
  },
  {
    imageSrc: "/icons/profileSuccess.svg",
    label: "Total Reports",
    count: "5423",
  },
  {
    imageSrc: "/icons/profilePendingAvatar.svg",
    label: "Pending Diagnostic",
    count: "5423",
  },
];

const StatisticBar = () => {
  return (
    <>
      {/* Card Section */}
      <div className="max-w-[85rem] mx-auto ">
        {/* Grid */}
        <div className="grid md:grid-cols-4 border border-solid border-border_primary shadow-md rounded-xl overflow-hidden ">
          {statisticData &&
            statisticData.length > 0 &&
            statisticData.map((stats, index) => (
              <StatisticCard
                imageSrc={stats.imageSrc}
                heading={stats.label}
                count={stats.count}
                currInd={index}
                lastIndex={statisticData && statisticData?.length - 1}
              />
            ))}
        </div>
        {/* End Grid */}
      </div>
      {/* End Card Section */}
    </>
  );
};

export default StatisticBar;
