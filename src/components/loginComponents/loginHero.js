import React from "react";

const LoginHero = () => {
  return (
    <div className="img-section flex-1 min-h-[100vh]  py-4 sm:py-6 lg:py-8 px-4 sm:px-10 lg:px-12 relative flex flex-col items-center bg-transparent">
      {/* image section */}
      <div className="relative flex-[3] flex  justify-center items-center w-full">
        <div className=" relative min-w-[20rem] md:w-[25rem] h-full flex items-end justify-center">
          <img
            className="absolute w-full h-full z-[3]"
            alt=""
            src="/icons/frame2.svg"
          />
          <img
            className="absolute w-full h-full object-cover z-[5]"
            alt=""
            src="/images/frame3@2x.png"
          />
        </div>
      </div>

      {/* cardcontainer */}
      <div className=" rounded-xl bg-white box-border w-full xl:max-w-[76rem] flex-1 flex flex-col items-center justify-start py-[1.69rem]  px-[1.75rem] gap-[0.94rem]  border border-solid border-bg_body">
        <div className="relative text-base text-center font-semibold">
          <p className="m-0">
            Your personalised toolbox for supporting children's mental health
          </p>
        </div>
        <p className="relative text-sm text-text_secondary text-center">
          Lorem ipsum dolor sit amet consectetur. Ac in consequat sodales in
          ante in gravida lobortis. At orci pharetra cras dui mi volutpat
          aenean.
        </p>
      </div>
    </div>
  );
};

export default LoginHero;
