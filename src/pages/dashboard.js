import MobileNav from "@/components/mobileNav";
import PatientsListing from "@/components/PatientsListing/patientsListing";
import Sidebar from "@/components/sidebar";
import StatisticBar from "@/components/StatsBar/statisticBar";

const dashboard = () => {
  return (
    <>
      <div className="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden dark:bg-gray-800 dark:border-gray-700">
        <MobileNav />
      </div>
      <Sidebar />
      <div className="flex-auto pt-10 px-4 sm:px-6 md:px-8 lg:pl-72">
        <header>
          <StatisticBar />
        </header>
      </div>
      <div className="flex-auto py-10 px-4 sm:px-6 md:px-8 lg:pl-72">
        <section>
          <PatientsListing />
        </section>
      </div>
    </>
  );
};

export default dashboard;
