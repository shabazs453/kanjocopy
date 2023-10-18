import LoginForm from "@/components/loginForm";
import Image from "next/image";

export default function Login() {
  return (
    <div className="relative rounded-11xl bg-gray-100 w-full h-[100vh]  text-center text-[1rem] text-grey font-px">
      <div className="img-section absolute top-0 left-0 w-[50vw] flex flex-col items-center">
        <div className="relative flex items-center justify-center w-[100%]">
          <img
            className="absolute  w-[25.38rem] h-[28rem] z-[3]"
            alt=""
            src="/icons/frame2.svg"
          />
          <img
            className="w-[25.38rem] h-[28rem] object-cover z-[5]"
            alt=""
            src="/images/frame3@2x.png"
          />
        </div>
        <div className=" rounded-xl bg-white box-border w-[39.25rem] flex flex-col items-center justify-center py-[1.69rem] pr-[1.56rem] pl-[1.75rem] gap-[0.94rem] text-[1.25rem] text-black border-[1px] border-solid border-aliceblue">
          <div className="relative font-semibold">
            <p className="m-0">Your personalised toolbox for supporting</p>
            <p className="m-0">children's mental health</p>
          </div>
          <div className="self-stretch relative text-[0.88rem] text-grey">
            Lorem ipsum dolor sit amet consectetur. Ac in consequat sodales in
            ante in gravida lobortis. At orci pharetra cras dui mi volutpat
            aenean.
          </div>
          <div className="w-[4.25rem] h-[0.88rem] flex flex-row items-center justify-start gap-[0.38rem]">
            <div className="w-[3rem] h-[0.88rem] overflow-hidden shrink-0 flex flex-row items-center justify-start gap-[0.25rem]">
              <div className="relative rounded-21xl bg-royalblue-100 box-border w-[1.88rem] h-[0.88rem] border-[1px] border-solid border-royalblue-100" />
              <div className="relative rounded-21xl bg-white box-border w-[0.88rem] h-[0.88rem] border-[1px] border-solid border-gainsboro-200" />
            </div>
            <div className="relative rounded-21xl bg-white box-border w-[0.88rem] h-[0.88rem] border-[1px] border-solid border-gainsboro-200" />
          </div>
        </div>
      </div>

      <div className="w-[50vw] h-full bg-white absolute top-0 right-0 flex flex-col items-center justify-between">
        <div className=" w-full flex  justify-end px-10 mt-10">
          <img
            className="relative  h-[2.12rem] object-cover"
            alt=""
            src="/images/companyLogo.png"
          />
        </div>

        <LoginForm />

        <div className="flex flex-col items-end justify-center text-[0.88rem]">
          <div className="relative inline-block w-[34.69rem] h-[2.75rem]">{`Lorem ipsum dolor sit amet consectetur. Ac in consequat sodales in ante in gravida `}</div>
        </div>
      </div>
    </div>
  );
}
