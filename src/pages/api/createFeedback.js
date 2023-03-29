import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
    const prisma = new PrismaClient();
    const { body, method } = req;
    const { username, email, password } = req.body;
    if (method !== "GET") {
        return res.status(405).json({
            message: "Method not allowed",
          });
    }

    const test = await prisma.feedback.create({
        data: {
                    title:"Welcome!",
                    rating:5,
                    description:`Hello createFeedback Test, we are glad you decided to use FeedbackManager, Let's get you started!`,
                    userId:"6423f761cbba9ea1e625b04f"
                }
    })
    return res.status(200).json({
        test
    })
    // const token = req.cookies.user;
    // if (!token) {
    //     return res.status(400).json({
    //         message:"Missing token."
    //     });
    // } else {
    //     try {
    //         const verifyToken = await jwt.verify(token, process.env.JWT_SECRET);
    //         if(!verifyToken) {
    //             return res.status(400).json({
    //                 message:"Couldn't Verify Token"
    //             })
    //         } else {
    //             const feedbacks = await prisma.feedback.findMany({
    //                 where: {
    //                     userId:verifyToken.id
    //                 }
    //             })
    //             if (!feedbacks) {
    //                 console.log("Backend Response: No feedback Found.")
    //                 return res.status(200).json({
    //                     message:"Backend Response: No feedback Found."
    //                 })
    //             }
    //             return res.status(200).json({
    //                 feedbacks
    //             })
    //         }   
    //     } catch (error) {
    //         console.log(error);
    //         return res.status(400).json({
    //             message:error.message
    //         })
    //     }
    // }
  }