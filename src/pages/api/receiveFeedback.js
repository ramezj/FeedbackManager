import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import { NextRequest } from 'next/server'

export default async function handler(req, res) {
    console.log(req);
    const prisma = new PrismaClient();
    const { body, method } = req;
    if (method !== "POST") {
        return res.status(405).json({
            message: "Method not allowed",
          });
    };
    const { id } = req.query;
    try {
        const userExist = await prisma.user.findMany({
            where:{
                id:id
            }
        });
        if (userExist) {
            try {
                const newFeedback = await prisma.feedback.create({
                    data:{
                        title:'test',
                        rating:req.body.rating,
                        description:req.body.description,
                        userId:id,
                        projectId:req.body.projectId
                    }
                })
                res.status(200).json({
                    ok:true,
                    message:newFeedback
                })
            } catch (error) {
                res.status(400).json({
                    ok:false,
                    message:error
                })
            }
        } else {
            return res.status(200).json({
                ok:false,
                messsage:error
            })
        }
    } catch (error) {
        res.status(400).json({error});
        console.error(error);
    }
    console.log(id); 
  }