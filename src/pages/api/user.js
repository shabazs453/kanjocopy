import User from "../../../models/user";
import Patient from "../../../models/patient";
import Clinicuser from "../../../models/clinicuser";
import "@/lib/mongodb";
import bcrypt from "bcryptjs";
import clinicuser from "../../../models/clinicuser";
// import { getServerSession } from 'next-auth/next';
// import { authOptions } from './auth/[...nextauth]';

export default async (req, res) => {
  const { method } = req;

  // const session = await getServerSession(req, res, authOptions);

  // // Check if the user is authenticated
  // if (!session) {
  //  return res.status(401).json({ error: 'Unauthorized access.' });
  // }

  switch (method) {
    case "GET":
      try {
        // const details = await User.find({})
        const { fullName, page, limit } = req.query;
        console.log(fullName);
        const { users, totalCount, pageNumber, itemsPerPage } =
          await getUsersByFullName(fullName, page, limit);
        return res.status(200).json({
          success: true,
          data: users,
          totalCount,
          currentPage: pageNumber,
          totalPages: Math.ceil(totalCount / itemsPerPage),
          message: "patient details fetched",
        });
      } catch (error) {
        return res.status(400).json({
          success: false,
          error: error.message,
        });
      }
    case "POST":
      try {
        const {
          first_name,
          last_name,
          clinic_id,
          mobile_no,
          gender,
          age,
          email,
          address,
          created_by,
          country_code,
        } = req.body;
        console.log(first_name, clinic_id, email);

        const patient = await addPatient(
          first_name,
          last_name,
          clinic_id,
          mobile_no,
          gender,
          age,
          email,
          address,
          created_by,
          country_code
        );
        console.log(patient);
        if (patient) {
          return res.status(200).json({
            success: true,
            data: req.body,
            message: patient,
          });
        } else {
          return res.status(400).json({
            success: true,
            message: "something went wrong",
          });
        }
      } catch (error) {
        return res.status(400).json({
          success: false,
          error: error.message,
        });
      }
    case "PUT":
      try {
        const id = req.query.id;
        if (!id) {
          return res.status(400).json({ error: "Invalid ID" });
        }
        const existingPatient = await Patient.findById(id);

        if (!existingPatient) {
          return res.status(404).json({ error: "Patient not found" });
        }

        const {
          first_name,
          last_name,
          mobile_no,
          gender,
          age,
          country_code,
          address,
        } = req.body;
        if (Patient.find(first_name) || Patient.find(clinic_id)) {
          await existingPatient.updateOne(id, req.body, { new: true });
          return res.status(200).json({
            success: true,
            data: req.body,
            message: "patient details updated",
          });
        } else {
          return res.status(404).json({ error: "already updated" });
        }
      } catch (error) {
        return res.status(400).json({
          success: false,
          error: error.message,
        });
      }
    default:
      res.setHeaders("Allow", ["GET", "POST", "PUT"]);
      return res
        .status(405)
        .json({ success: false })
        .end(`Method ${method} Not Allowed`);
  }
};

async function getUsersByFullName(fullName, page, limit) {
  try {
    const pageNumber = parseInt(page, 10) || 1;
    const itemsPerPage = parseInt(limit, 10) || 10;
    const skip = (pageNumber - 1) * itemsPerPage;

    let usersQuery;
    if (fullName) {
      usersQuery = Patient.find({
        $expr: {
          $regexMatch: {
            input: { $concat: ["$first_name", " ", "$last_name"] },
            regex: fullName,
            options: "i",
          },
        },
      });
    } else {
      usersQuery = Patient.find();
    }

    const users = await usersQuery.skip(skip).limit(itemsPerPage);
    const countQuery = await usersQuery.clone().countDocuments();
    const totalCount = await countQuery;

    return {
      users,
      totalCount,
      pageNumber,
      itemsPerPage,
    };
  } catch (error) {
    throw new Error(error.message);
  }
}

async function addPatient(
  first_name,
  last_name,
  clinic_id,
  mobile_no,
  gender,
  age,
  email,
  address,
  created_by,
  country_code
) {
  try {
    const user = await User.findOne({ email });
    console.log(email);
    if (!user) {
      const newUser = await User.create({
        first_name,
        last_name,
        clinic_id,
        mobile_no,
        gender,
        age,
        user_type: 2,
        user_status: 1,
        email,
        created_by,
        address,
        country_code,
      });
      const newPatient = await Patient.create({
        parent_user_id: newUser._id,
        clinic_id,
        first_name,
        last_name,
        mobile_no,
        gender,
        age,
        email,
        created_by,
        address,
        country_code,
      });
      const newUserClinic = await clinicuser.create({
        clinic_id,
        patient_id: newPatient._id,
        created_by,
      });

      return "Details added";
    } else {
      if (Patient.find(first_name) || Patient.find(clinic_id)) {
        const updatedPatient = await Patient.create({
          parent_user_id: user._id,
          clinic_id,
          first_name,
          last_name,
          mobile_no,
          gender,
          age,
          email,
          created_by,
          address,
          country_code,
        });
        await clinicuser.create({
          clinic_id,
          patient_id: updatedPatient._id,
          created_by,
        });
        return "Details added";
      } else {
        return "already exist";
      }
    }
  } catch (error) {
    throw new Error(error.message);
  }
}
