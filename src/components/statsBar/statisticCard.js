"use client";

const StatisticCard = ({ imageSrc, heading, count, currInd, lastIndex }) => {
  return (
    <a
      className="flex md:justify-center items-center p-4 md:py-8 md:px-5 relative bg-white hover:bg-gray-50 before:absolute before:top-0 before:left-0 before:w-full before:h-px md:before:w-px md:before:h-full before:bg-gray-200 before:first:bg-transparent"
      href="#"
    >
      <div
        className={`flex md:flex-col lg:flex-row gap-y-3 gap-x-5 overflow-hidden`}
      >
        <img className="flex-shrink-0 w-10 h-10 text-gray-500" src={imageSrc} />
        <div className="grow">
          <p className="text-sm text-text_secondary">{heading}</p>
          <h3 className="mt-1 text-xl sm:text-2xl  text-text_default leading-[1.44rem] font-medium">
            {count}
          </h3>
        </div>
      </div>
      {
        currInd !== lastIndex && (
          <div className="absolute right-0 w-[1px] h-[80%] bg-border_primary md:block hidden"/>
        )
      }
    </a>
  );
};

export default StatisticCard;
