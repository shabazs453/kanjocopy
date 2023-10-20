"use client";
const PrimaryButton = ({btnLabel}) => {
  return (
    <button
      className="py-2 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
      href="#"
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
