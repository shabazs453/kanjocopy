"use client"

const StatisticCard = ({imageSrc, heading, count, borderRight}) => {
  return (
    <a
            className="block p-4 md:py-8 md:px-5 relative bg-white hover:bg-gray-50 before:absolute before:top-0 before:left-0 before:w-full before:h-px md:before:w-px md:before:h-full before:bg-gray-200 before:first:bg-transparent dark:bg-slate-900 dark:hover:bg-slate-800 dark:before:bg-gray-700"
            href="#"
          >
            <div className={`flex md:grid lg:flex gap-y-3 gap-x-5 ${borderRight}`}>
              <img
                className="flex-shrink-0 w-10 h-10 text-gray-500"
                src={imageSrc}
                />
              <div className="grow">
                <p className="text-xs uppercase tracking-wide font-medium text-grey">
                  {heading}
                </p>
                <h3 className="mt-1 text-xl sm:text-2xl  text-darkslategray-200 tracking-[0.5px] leading-[1.44rem] font-medium">
                  {count}
                </h3>
                
              </div>
            </div>
          </a>
  )
}

export default StatisticCard