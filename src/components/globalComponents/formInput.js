"use client";

const FormInput = ({ name, type, label, placeholder, defaultValue, onChangeFunc, error }) => {
  return (
    <div>
      <label for={name} className="block text-sm font-medium mb-2 relative">
        {label}
        <span className="text-bg_danger ml-1">&#x2a;</span>
      </label>
      <div className="relative">
        <input
          type={type}
          id={name}
          name={name}
          //   value={defaultValue}
          className="py-3 px-4 block w-full border-[0.5px] border-border_primary bg-bg_input rounded-md text-sm focus:outline-none"
          required
          // aria-describedby="hs-validation-name-error-helper"
          placeholder={placeholder}
          onChange={onChangeFunc}
        />
      </div>
      {error[name] && (
        <p
          className="text-sm text-red-600 mt-2"
          id="hs-validation-name-error-helper"
        >
          Please enter a valid email address.
        </p>
      )}
    </div>
  );
};

export default FormInput;
