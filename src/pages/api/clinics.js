import User from "../../../models/dbSchema";
import "@/lib/mongodb";
import bcrypt from "bcryptjs";
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
                return res.status(200).json({
                    success: true
                });
            } catch (error) {
                return res.status(400).json({
                    success: false,
                });
            }
        case "POST":
            try {                
                return res.status(201).json({
                    success: true
                });
            } catch (error) {
                return res.status(400).json({
                    success: false,
          error: error.message 
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