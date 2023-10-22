import mongoose from "mongoose";

const assessmentSchema = new mongoose.Schema(
  {
    form_data: {
      type: Array,
      required: false,
    },
    form_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Form",
    },
    clinic_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Clinic",
    },
    parent_user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    patient_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
    },
    assessments_status: {
      type: String,
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

export default mongoose.models.Assessment ||
  mongoose.model("Assessment", assessmentSchema);
