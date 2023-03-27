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
    const token = req.cookies.user;
    if (!token) {
        return res.status(400).json({
            message:"Missing token."
        });
    } else {
        try {
            const verifyToken = await jwt.verify(token, process.env.JWT_SECRET);
            if(!verifyToken) {
                return res.status(400).json({
                    message:"Couldn't Verify Token"
                })
            } else {
                const user = await prisma.user.findUnique({
                    where: {
                         id:verifyToken.id
                    }
                })
                const feedbacks = await prisma.feedback.findMany({
                    where: {
                        userId:verifyToken.id
                    }
                })
                console.log(feedbacks)
                return res.status(200).json({
                    user,
                    feedbacks
                })
            }   
        } catch (error) {
            return res.status(400).json({
                message:error.message
            })
        }
    }
  }