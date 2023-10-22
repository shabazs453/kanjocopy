import mongoose from "mongoose";

const clinicuserSchema = new mongoose.Schema({
  clinic_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Clinic",
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  patient_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
    required: false,
  },
  created_at: {
    type: Date,
    required: true,
  },
  created_by: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Clinicuser ||
  mongoose.model("Clinicuser", clinicuserSchema);
