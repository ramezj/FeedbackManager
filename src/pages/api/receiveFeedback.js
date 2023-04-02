import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
    const prisma = new PrismaClient();
    const { body, method } = req;
    if (method !== "POST") {
        return res.status(405).json({
            message: "Method not allowed",
          });
    };
    const { id } = req.query;
    try {
        const newFeedback = await prisma.feedback.create({
            data:{
                title:'test',
                rating:req.body.rating,
                description:req.body.description,
                userId:id
            }
        })
        res.status(200).json({newFeedback})
    } catch (error) {
        res.status(400).json({error});
        console.error(error);
    }
    console.log(id); 
  }