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
    clinic_contact_no: {
      type: Number,
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

// const userSchema = new mongoose.Schema({
//  user_type: {
//    type: Number,
//    required: true
//  },
//  first_name: {
//    type: String,
//    required: true
//  },
//  last_name: {
//    type: String,
//    required: true
//  },
//  gender: {
//    type: String,
//    required: true
//  },
//  age: {
//    type: Number,
//    required: true
//  },
//  parent_full_name: {
//    type: String,
//    required: true
//  },
//  mobile_no: {
//    type: Number,
//    required: true
//  },
//  mobile_no_code: {
//    type: Number,
//    required: true
//  },
//  email: {
//    type: String,
//    required: true,
//    unique: true
//  },
//  address: {
//    type: String,
//    required: true
//  },
//  user_status: {
//    type: Number,
//    required: true
//  },
//  created_by: {
//    type: String,
//    required: true
//  },
//  updated_by: {
//    type: String,
//    required: false
//  },
// }, { timestamps: true});

// const clinicuserSchema = new mongoose.Schema({
//  clinic_id: {
//    type: String,
//    required: true
//  },
//  user_id: {
//    type: String,
//    required: true
//  },
//  created_at: {
//    type: Date,
//    required: true
//  },
//  clinic: {
//    type:mongoose.Schema.Types.ObjectId,
//         ref:'Clinic'
//  },
//  user: {
//    type:mongoose.Schema.Types.ObjectId,
//         ref:'User'
//  },
// });

// const sessionSchema = new mongoose.Schema({
//  session_token: {
//    type: String,
//    required: true
//  },
//  user_id: {
//    type: String,
//    required: true
//  },
//  expires: {
//    type: Date,
//    required: true
//  },
//  user: {
//    type:mongoose.Schema.Types.ObjectId,
//         ref:'User'
//  },
// });

// const formSchema = new mongoose.Schema({
//  form_name: {
//    type: String,
//    required: true
//  },
//  description: {
//    type: String,
//    required: true
//  },
//  form_status: {
//    type: Number,
//    required: true
//  },
//  created_by: {
//    type: String,
//    required: true
//  },
//  updated_by: {
//    type: String,
//    required: false
//  },
// }, { timestamps: true});

// const diagnosisSchema = new mongoose.Schema({
//  form_data: {
//    type: Array,
//    required: true
//  },
//  clinic_id: {
//    type: String,
//    required: true
//  },
//  user_id: {
//    type: String,
//    required: true
//  },
//  created_by: {
//    type: String,
//    required: true
//  },
//  updated_by: {
//    type: String,
//    required: false
//  },
//  clinic: {
//    type:mongoose.Schema.Types.ObjectId,
//         ref:'Clinic'
//  },
//  user: {
//    type:mongoose.Schema.Types.ObjectId,
//         ref:'User'
//  },
// }, { timestamps: true});

export default mongoose.models.Clinic || mongoose.model("Clinic", clinicSchema);

// // Creating model objects
// const Clinic = mongoose.model("clinics", clinicSchema);
// const User = mongoose.model('users', userSchema);
// const Clinicuser = mongoose.model('clinicusers', clinicuserSchema);
// const Form = mongoose.model('forms', formSchema);
// const Diagnosis = mongoose.model('diagnosis', diagnosisSchema);
// const Session = mongoose.model('session', sessionSchema);

// // Exporting our model objects
// module.exports = {
//     Clinic, User, Clinicuser, Form, Diagnosis, Session
// }
