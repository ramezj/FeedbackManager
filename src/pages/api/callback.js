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
    if(req.body.alert_name == "subscription_created") {
      // Update User Logic Here. 
      try {
        const userExist = await prisma.user.findUnique({
          where: {
            id:req.body.passthrough
          }
        });
        if(userExist) {
          const updateUser = await prisma.user.update({
            where:{
              id:req.body.passthrough
            },
            data: {
              isSubscribed:true
            }
          });
          if(updateUser) {
            res.status(200).json({ok:true, message:"Subscribed Successfully! :D"});
          } else {
            res.status(401).json({ok:false, message:"Couldn't subscribe user.."})
          }
        } else {
          return res.status(404).json({message:"Couldn't find User.."})
        }
      } catch (error) {
        res.status(400).json({error});
      }
      return res.status(200).json("Subscription Created Successfully!")
    } else {
      return res.status(200).json({
        message:"Couldn't Verify Subscription"
      })
    }
  }