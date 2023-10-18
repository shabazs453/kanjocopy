"use client";

import { useState } from "react";

const InputField = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  iconSrc,
  emailValidity,
}) => (
  <div className="flex-1 flex items-center justify-center mt-8 h-[4.6rem] w-full">
    <div className="rounded-[1rem] bg-gray-100 shadow-[0px_4px_32px_rgba(0,_0,_0,_0.04)] h-full w-full  flex items-center justify-between py-[1.06rem] px-[1.06rem] gap-[1.06rem] border-[0.5px] border-solid border-gainsboro-300">
      <img className="relative w-[27px] h-[27px]" alt="" src={iconSrc} />
      {/* <div className="flex-auto flex items-center h-full w-auto"> */}
      <div className="relative bg-text_default w-[1px] h-[2.25rem]" />
      <div className="flex-1 h-full relative">
        <label className="h-full">
          <span className="absolute  left-0 text-[0.75rem]">
            {" "}
            {placeholder}
          </span>
          <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            className="h-full w-full px-0 pb-0 bg-transparent border-none focus:outline-none focus:outline-offset-0 relative text-[1rem]"
          />
        </label>
      </div>
      {type === "email" ? (
        emailValidity === true && (
          <img
            className="relative w-[1.38rem] h-[1.38rem]"
            alt=""
            src="/icons/solidCheckIcon.svg"
          />
        )
      ) : (
        <></>
      )}
      {/* </div> */}
    </div>
  </div>
);

export default function LoginForm() {
  // const [isSignUp, setIsSignUp] = useState(false);
  // const [name, setName] = useState("");
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [isEmailValid, setIsEmailValid] = useState(null);
  const [error, setError] = useState("");

  function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    return emailPattern.test(email);
  }

  const handleChange = (evt) => {
    const { value, name } = evt.target;
    if (name === "email") {
      const emailvalidity = validateEmail(value);
      setIsEmailValid(emailvalidity);
    }
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex-1 h-full min-h-[100vh] bg-white flex flex-col items-center justify-between py-4 sm:py-6 lg:py-8 px-4 sm:px-10 lg:px-12 relative">
      <div className=" w-full flex justify-end">
        <img
          className="relative  h-[2.12rem] object-cover"
          alt=""
          src="/images/companyLogo.png"
        />
      </div>
      <div className="w-full flex flex-col items-center px-4 sm:px-10 lg:px-12">
        <div className="text-[1.63rem] text-text_default">
          <div className="relative font-semibold">Welcome to Kanjo</div>
        </div>
        <div className=" text-sm mt-2 text-text_secondary">
          <p>
            Lorem ipsum dolor sit amet consectetur. Ac in consequat sodales in
            ante in gravida lobortis.
          </p>
        </div>
        <form className="w-full md:max-w-[25rem] 2xl:max-w-[76rem]">
          {/* {isSignUp && (
          <InputField
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            iconSrc="/icons/personIcon.svg"
          />
        )} */}

          <InputField
            type="email"
            name="email"
            placeholder="Email Address"
            value={formValues.email}
            onChange={handleChange}
            iconSrc="/icons/openEmailIcon.svg"
            emailValidity={isEmailValid}
          />

          <InputField
            type="password"
            name="password"
            placeholder="Password"
            value={formValues.password}
            onChange={handleChange}
            iconSrc="/icons/closedLockIcon.svg"
          />

          <div className="flex flex-col justify-center text-white mt-8 cursor-pointer items-center w-full h-[4rem]">
            <div className="rounded-[1rem] bg-bg_primary shadow-[8px_8px_16px_#cddbff]  flex items-center justify-center box-border w-full h-full">
              <button
                onClick={handleSubmit}
                className="relative bg-transparent border-none outline-none w-full h-full cursor-pointer text-white text-sm tracking-widest"
              >
                Login
              </button>
            </div>
            {error && (
              <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                {error}
              </div>
            )}
            {/* {
            !isSignUp && (
              <p className="text-sm mt-3 text-right text-royalblue-100" onClick={() => setIsSignUp((prev) => !prev)}>
              Don't have an account? <span className="underline">Register</span>
            </p>
            )
          } */}
            {/* {
            isSignUp && (
              <p className="text-sm mt-3 text-right text-royalblue-100" onClick={() => setIsSignUp((prev) => !prev)}>
              Already a user? <span className="underline">Login</span>
            </p>
            )
          } */}
          </div>
        </form>
      </div>
      <div className="px-4 sm:px-10 lg:px-12 flex flex-col items-end justify-center text-sm text-text_secondary text-justify">
        Lorem ipsum dolor sit amet consectetur. Ac in consequat sodales in ante
        in gravida
      </div>
    </div>
  );
}
