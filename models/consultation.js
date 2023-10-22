import mongoose from "mongoose";

const consultationSchema = new mongoose.Schema(
  {
    assessment_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Assessment",
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

export default mongoose.models.Consultation ||
  mongoose.model("Consultation", consultationSchema);
