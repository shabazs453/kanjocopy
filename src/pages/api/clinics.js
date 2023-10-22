import Clinic from "../../../models/clinic";
import User from "../../../models/user";
import Clinicuser from "../../../models/clinicuser";
import "@/lib/mongodb";
import bcrypt from "bcryptjs";
const authToken = process.env.TOKEN;
import { getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]";

export default async (req, res) => {
  const { method } = req;

  // const session = await getServerSession(req, res, authOptions);

  // // Check if the user is authenticated
  // if (!session) {
  //   return res.status(401).json({ error: "Unauthorized access." });
  // }

  switch (method) {
    case "GET":
      try {
        return res.status(200).json({
          success: true,
        });
      } catch (error) {
        return res.status(400).json({
          success: false,
        });
      }
    case "POST":
      try {
        const { headers } = req;
        const authorizationHeader = headers["authorization"];
        if (!authorizationHeader) {
          return res
            .status(401)
            .json({ message: "Authorization header is missing" });
        }

        const token = authorizationHeader.replace("Bearer ", "");

        if (token !== authToken) {
          return res.status(401).json({ message: "Unauthorized" });
        }
        const {
          clinic_name,
          clinic_address,
          first_name,
          last_name,
          mobile_no,
          country_code,
          email,
          address,
          password,
          clinic_contact_no,
        } = req.body;
        console.log(password);
        const passReg =
          /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (password.length != 0 && password.match(passReg)) {
          const userExist = await User.findOne({ email: req.body["email"] });
          //console.log(req.body["email"])
          if (!userExist) {
            const clinics = await Clinic.create({
              clinic_name,
              clinic_address,
              clinic_status: 1,
              created_by: "Admin",
              clinic_contact_no,
            });
            const hashedPassword = await bcrypt.hash(password, 10);
            const mobileReg = /^(\+\d{1,3}[- ]?)?\d{10}$/;
            const mobile = req.body["mobile_no"].toString();
            if (mobile.match(mobileReg)) {
              //console.log(clinics)
              const newUser = await User.create({
                first_name,
                last_name,
                user_type: 1,
                mobile_no,
                country_code,
                email,
                password: hashedPassword,
                address,
                user_status: 1,
                created_by: "Admin",
              });
              //console.log(newUser)
              const clinicUser = await Clinicuser.create({
                clinic_id: clinics._id,
                user_id: newUser._id,
                created_at: newUser.createdAt,
                created_by: "Admin",
              });
              //console.log(clinicUser)
            }
            return res.status(200).json({
              success: true,
              data: req.body,
              message: "registration for clinic successful",
            });
          } else {
            return res.status(400).json({
              success: false,
              message: "user already exist",
            });
          }
        } else {
          return res.status(400).json({
            success: false,
            message: "password required",
          });
        }
      } catch (error) {
        return res.status(400).json({
          success: false,
          error: error.message,
        });
      }
    default:
      res.setHeaders("Allow", ["GET", "POST"]);
      return res
        .status(405)
        .json({ success: false })
        .end(`Method ${method} Not Allowed`);
  }
};
