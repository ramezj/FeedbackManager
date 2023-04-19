import { PrismaClient } from '@prisma/client';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
    const prisma = new PrismaClient();
    const { body, method } = req;
    const { username, email, password } = req.body;
    if (method !== "POST") {
        return res.status(405).json({
            ok:false,
            message: "Method not allowed",
          });
    }
    if (!username || !email || !password) {
        return res.status(400).json({
            ok:false,
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
                ok:false,
                message:"User already exists"
            });
        } else {
            try {
                const hashedPassword = await bcrypt.hash(req.body.password, 10);
                const createUser = await prisma.user.create({
                    data: {
                        username:req.body.username,
                        email:req.body.email,
                        password:hashedPassword,
                        active:false,
                        isSubscribed:false,
                        websiteUrl:"",
                        subscription_plan : 0
                    }
                });
                const createProject = await prisma.project.create({
                    data:{
                        userId:createUser.id
                    }
                    
                })
                const createFeedbacks = await prisma.feedback.create({
                    data: {
                        title:"Welcome!",
                        rating:5,
                        description:`Hello ${createUser.username}, we are glad you decided to use FeedbackManager, Let's get you started!`,
                        userId:createUser.id,
                        projectId:createProject.id
                    }
                })
                const token = await jwt.sign({id: createUser.id}, process.env.JWT_SECRET);
                return res.status(200).json({
                    ok:true,
                    token:token,
                    username: createUser.username,
                    uid:createUser.id,
                    email:createUser.email
                })
                } catch (error) {
                    console.log(error);
                    res.status(400).json(error);
                }
            }
        } catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
    }