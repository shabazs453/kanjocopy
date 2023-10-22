import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    user_type: {
      type: Number,
      required: true,
    },
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    mobile_no: {
      type: Number,
      required: true,
    },
    country_code: {
      type: Number,
      required: true,
      match: /^(?!91$)[0-9]{2,3}$/,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    },
    address: {
      type: String,
      required: true,
    },
    user_status: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: false,
      //match: /^(?=.*[a-zA-Z0-9])(?=.*[^a-zA-Z0-9]).{8}$/,
      //match:/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    },
    created_by: {
      type: String,
      required: true,
    },
    updated_by: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", userSchema);
