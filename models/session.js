import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema({
  session_token: {
    type: String,
    required: true,
  },
  user_id: {
    type: String,
    required: true,
  },
  expires: {
    type: Date,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

export default mongoose.models.Session ||
  mongoose.model("Session", sessionSchema);
