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
  <div className="w-full flex items-center justify-center mt-8">
    <div className="rounded-3xs bg-gray-100 shadow-[0px_4px_32px_rgba(0,_0,_0,_0.04)] w-[25rem] h-[4.56rem] flex items-center justify-start py-[1.06rem] px-[1.06rem] gap-[1.06rem] border-[0.5px] border-solid border-gainsboro-300">
      <img className="relative w-[1.7rem] h-[1.7rem]" alt="" src={iconSrc} />
      <div className="flex-auto flex items-center h-full w-auto">
        <div className="relative bg-gainsboro-400 w-[0.06rem] h-[2.25rem]" />
        <div className="flex-1 h-full relative ml-2">
          <label className="absolute top-0 left-0 text-sm">{placeholder}</label>
          <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            className="h-full w-full px-0 pb-0 pt-4 bg-transparent border-none outline-none relative"
          />
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
      </div>
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
    <div className="w-full flex flex-col items-center">
      <form>
        <div className="text-[1.63rem] text-main-black">
          <div className="relative font-semibold">Welcome to Kanjo</div>
        </div>
        <div className=" text-[0.88rem]">
          <div className="relative">
            <p className="m-0">
              Lorem ipsum dolor sit amet consectetur. Ac in consequat sodales in
            </p>
            <p className="m-0">{`ante in gravida lobortis. `}</p>
          </div>
        </div>

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

        <div className="flex flex-col justify-center text-white mt-12 cursor-pointer items-center">
          <div className="rounded-2xl bg-royalblue-100 shadow-[8px_8px_16px_#cddbff] w-[25rem] h-[4rem] flex items-center justify-center  box-border">
            <button
              onClick={handleSubmit}
              className="relative bg-transparent border-none outline-none w-full h-full cursor-pointer"
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
  );
}
