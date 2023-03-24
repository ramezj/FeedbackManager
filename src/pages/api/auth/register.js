import { PrismaClient } from '@prisma/client';
import bcrypt from "bcrypt";
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
    if (!username || !email || !password) {
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
        if (emailExist) {
            return res.status(400).json({
                message:"User already exists"
            });
        } else {
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            const createUser = await prisma.user.create({
                data: {
                    username:req.body.username,
                    email:req.body.email,
                    password:hashedPassword
                }
            });
            console.log(createUser);
            const token = await jwt.sign({id: createUser.id}, process.env.JWT_SECRET);
            return res.status(200).json({
                token:token
            })
        }
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
  }