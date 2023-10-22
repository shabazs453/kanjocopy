"use client";

const PrimaryButton = ({ btnLabel, onClickFunc }) => {
  return (
    <button
      className="py-2 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-bg_primary text-white hover:bg-bg_hover focus:outline-none  transition-all text-sm cursor-pointer"
      onClick={onClickFunc}
    >
      <svg
        className="w-3 h-3"
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M2.63452 7.50001L13.6345 7.5M8.13452 13V2"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
        />
      </svg>
      {btnLabel}
    </button>
  );
};

export default PrimaryButton;
