import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
    const prisma = new PrismaClient();
    const { body, method } = req;
    const { username, email, password } = req.body;
    console.log(req.body);
    if (method !== "POST") {
        return res.status(405).json({
            ok:false,
            message: "Method not allowed",
          });
    }
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({
            ok:false,
            message: "missing field..",
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
                ok:false,
                message:"User doesn't exist."
            })
        } else {
            const confirmPassword = await bcrypt.compare(req.body.password, emailExist.password);
            if(confirmPassword) {
                const token = await jwt.sign({id: emailExist.id}, process.env.JWT_SECRET);
                return res.status(200).json({
                    ok:true,
                    token:token,
                    username:emailExist.username
                })
            } else {
                return res.status(400).json({
                    ok:false,
                    message:"Password Incorrect"
                })
            }
        }
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
  }