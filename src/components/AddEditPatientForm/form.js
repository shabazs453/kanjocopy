"use client";

import { useState } from "react";
import FormInput from "../globalComponents/formInput";
import FormTextarea from "../globalComponents/formTextarea";

const initialFormData = {
  firstName: "",
  lastName: "",
  gender: "",
  age: "",
  parentName: "",
  contact: "",
  email: "",
  address: "",
};

const AddEditPatientForm = () => {
  const [formValues, setFormValues] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { value, name } = e.target;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form data
    const newErrors = {};
    if (formData.username.trim() === "") {
      newErrors.username = "Username is required";
    }
    if (formData.password.trim() === "") {
      newErrors.password = "Password is required";
    }

    if (Object.keys(newErrors).length === 0) {
      // Form is valid, call the onSubmit callback
      onSubmit(formData);
      setFormData({ username: "", password: "" });
    } else {
      // Form is invalid, update the errors state
      setErrors(newErrors);
    }
  };
  return (
    <div className="p-4 sm:px-10 md:px-12 text-text_default">
      <p className="text-text_secondary">
        Some text as placeholder. In real life you can have the elements you
        have chosen. Like, text, images, lists, etc.
      </p>

      <div className="form grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-8">
        <div className="col-span-2 sm:col-span-1">
          <FormInput
            name="firstName"
            type="text"
            label="Patient First Name"
            defaultValue={formValues?.firstName}
            onChangeFunc={() => {}}
            placeholder="Enter patient first name"
            error={errors}
          />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <FormInput
            name="lastName"
            type="text"
            label="Patient Last Name"
            defaultValue={formValues?.lastName}
            onChangeFunc={() => {}}
            placeholder="Enter patient last name"
            error={errors}
          />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <div>
            <label for="gender" className="block text-sm font-medium mb-2 relative">
              Gender
              <span className="text-bg_danger ml-1">&#x2a;</span>
            </label>
            <div className="flex h-full w-full items-center gap-8">
              <div className="flex items-center py-3">
                <input
                  type="radio"
                  name="gender"
                  className="rounded-full focus:ring-0"
                  id="gender_male"
                  checked
                />
                <label for="gender_male" className="text-sm text-gray-500 ml-2">
                  Male
                </label>
              </div>

              <div className="flex items-center py-3">
                <input
                  type="radio"
                  name="gender"
                  className="rounded-full focus:ring-0"
                  id="gender_female"
                />
                <label
                  for=""
                  className="text-sm text-gray-500 ml-2 dark:text-gray-400"
                >
                  Female
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 sm:col-span-1">
          <FormInput
            name="age"
            type="number"
            label="Age"
            defaultValue={formValues?.age}
            onChangeFunc={() => {}}
            placeholder="Enter age"
            error={errors}
          />
        </div>
        <div className="col-span-2">
          <FormInput
            name="parentName"
            type="text"
            label="Parent Full Name"
            defaultValue={formValues?.parentName}
            onChangeFunc={() => {}}
            placeholder="Enter parent full name"
            error={errors}
          />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <FormInput
            name="contact"
            type="number"
            label="Mobile Number"
            defaultValue={formValues.contact}
            onChangeFunc={() => {}}
            placeholder="Enter mobile number"
            error={errors}
          />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <FormInput
            name="email"
            type="email"
            label="Email Address"
            defaultValue={formValues?.email}
            onChangeFunc={() => {}}
            placeholder="Enter email address"
            error={errors}
          />
        </div>
        <div className="col-span-2">
          <FormTextarea
            name="address"
            type="text"
            label="Address"
            defaultValue={formValues?.address}
            onChangeFunc={() => {}}
            placeholder=""
            error={errors}
          />
        </div>
      </div>

      <div className="mt-8 w-full flex justify-center items-center gap-4">
        <button className="py-3 px-4 rounded-lg text-sm font-lexend text-text_default bg-white">
          Reset
        </button>
        <button className="py-3 px-4 rounded-lg text-sm font-lexend text-white bg-text_secondary">
          Save
        </button>
      </div>
    </div>
  );
};

export default AddEditPatientForm;
