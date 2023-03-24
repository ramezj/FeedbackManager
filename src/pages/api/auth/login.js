import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
    const prisma = new PrismaClient();
    const { body, method } = req;
    const { username, email, password } = req.body;
    if (method !== "POST") {
        return res.status(405).json({
            message: "Method not allowed",
          });
    }
    if (!email || !password) {
        return res.status(400).json({
            message: "missing fields",
          });
    }
    try {
        const emailExist = await prisma.user.findUnique({
            where: {
              email:req.body.email  
            }
        })
        if (!emailExist) {
            return res.status(400).json({
                message:"User doesn't exist."
            })
        } else {
            const confirmPassword = await bcrypt.compare(req.body.password, emailExist.password);
            if(confirmPassword) {
                const token = await jwt.sign({id: emailExist.id}, process.env.JWT_SECRET);
                return res.status(200).json({
                    token:token
                })
            } else {
                return res.status(400).json({
                    message:"Password Incorrect"
                })
            }
        }
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
  }