"use client";

const FormInput = ({ name, type, label, placeholder, defaultValue, onChangeFunc, error }) => {
  return (
    <div>
      <label for={name} class="block text-sm font-medium mb-2 relative">
        {label}
        <span className="text-bg_danger ml-1">&#x2a;</span>
      </label>
      <div class="relative">
        <input
          type={type}
          id={name}
          name={name}
          //   value={defaultValue}
          class="py-3 px-4 block w-full border-[0.5px] border-border_primary bg-bg_input rounded-md text-sm focus:outline-none"
          required
          // aria-describedby="hs-validation-name-error-helper"
          placeholder={placeholder}
          onChange={onChangeFunc}
        />
        {/* <div class="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
          <svg
            class="h-5 w-5 text-red-500"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
            aria-hidden="true"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
          </svg>
        </div> */}
      </div>
      {error[name] && (
        <p
          class="text-sm text-red-600 mt-2"
          id="hs-validation-name-error-helper"
        >
          Please enter a valid email address.
        </p>
      )}
    </div>
  );
};

export default FormInput;
