import mongoose from "mongoose";

const clinicSchema = new mongoose.Schema(
  {
    clinic_name: {
      type: String,
      required: true,
    },
    clinic_address: {
      type: String,
      required: true,
    },
    clinic_status: {
      type: Number,
      required: true,
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

const userSchema = new mongoose.Schema(
  {
    user_type: {
      type: Number,
      required: true,
    },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    gender: { type: String, required: true },
    age: { type: Number, required: true },
    parent_full_name: { type: String, required: true },
    mobile_no: { type: Number, required: true },
    mobile_no_code: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    user_status: { type: Number, required: true },
    created_by: { type: String, required: true },
    updated_by: { type: String, required: false },
  },
  { timestamps: true }
);

const clinicuserSchema = new mongoose.Schema(
  {
    clinic_id: { type: String, required: true },
    user_id: { type: String, required: true },
    created_by: { type: String, required: true },
    updated_by: { type: String, required: false },
    clinic: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const sessionSchema = new mongoose.Schema(
  {
    session_token: { type: String, required: true },
    user_id: { type: String, required: true },
    expires: { type: DateTime, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const formSchema = new mongoose.Schema(
  {
    form_name: {
      type: String,
      required: true,
    },
    desc: { type: String, required: true },
    form_status: { type: Number, required: true },
    created_by: { type: String, required: true },
    updated_by: { type: String, required: false },
  },
  { timestamps: true }
);

const diagnosisSchema = new mongoose.Schema(
  {
    form_data: { type: Array, required: true },
    clinic_id: { type: String, required: true },
    user_id: { type: String, required: true },
    created_by: { type: String, required: true },
    updated_by: { type: String, required: false },
    clinic: { type: mongoose.Schema.Types.ObjectId, ref: "Clinic" },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

export default mongoose.models.User ||
  mongoose.model({
    Clinic: clinicSchema,
    User: userSchema,
    clinicuser: clinicuserSchema,
    form: formSchema,
    diagnosis: diagnosisSchema,
    sessions: sessionSchema,
  });
