"use client";

// import { useRouter } from "next/router";
// import { useSession } from "next-auth/react";

import AddEditPatientForm from "@/components/AddEditPatientForm/form";
import FormLayout from "@/components/formLayout";
import MobileNav from "@/components/mobileNav";
import PatientsListing from "@/components/PatientsListing/patientsListing";
import Sidebar from "@/components/sidebar";
import StatisticBar from "@/components/StatsBar/statisticBar";
import { useState } from "react";

const dashboard = () => {
  const [openAddPatientForm, setOpenAddPatientForm] = useState(false);
  const [openEditPatientForm, setOpenEditPatientForm] = useState(false);

  // const { data: session } = useSession();
  // const router = useRouter();

  // if (!session) {
  //   router.push('/')
  //   return null;
  // }

  return (
    <div className="relative">
      <div className="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden ">
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
          <PatientsListing
            addPatientForm={() => setOpenAddPatientForm(true)}
            editPatientForm={() => setOpenEditPatientForm(true)}
          />
        </section>
      </div>
      <div
        className={`w-full h-full ${
          openAddPatientForm
            ? "block"
            : openEditPatientForm
            ? "block"
            : "hidden"
        } opacity-50 bg-text_default absolute top-0 left-0 z-[61]`}
        onClick={() => {
          setOpenAddPatientForm(false);
          setOpenEditPatientForm(false);
        }}
      />
      <FormLayout
        formContent={<AddEditPatientForm />}
        formTitle="Add Patient"
        open={openAddPatientForm}
        closeForm={() => setOpenAddPatientForm(false)}
      />

      <FormLayout
        formContent={<AddEditPatientForm />}
        formTitle="Edit Patient"
        open={openEditPatientForm}
        closeForm={() => setOpenEditPatientForm(false)}
      />
    </div>
  );
};

export default dashboard;
