import mongoose from "mongoose";

const formSchema = new mongoose.Schema(
  {
    form_name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    form_status: {
      type: Number,
      required: true,
    },
    form_type: {
      type: String,
      required: true,
    },
    form_link: {
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
