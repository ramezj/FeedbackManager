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
        const updateUser = await prisma.user.update({
          where:{
            id:req.body.passthrough
          },
          data: {
            isSubscribed:true,
            subscription_id: req.body.subscription_id,
            subscription_update_url:req.body.update_url,
            subscription_cancel_url:req.body.cancel_url
          }
        });
        if(updateUser) {
          return res.status(200).json({ok:true, message:"Subscribed Succesfully"})
        } else {
          return res.status(400).json({ok:false, message:"Couldn't Subscribe"})
        }
      } catch (error) {
        return res.status(404).json({ok:false, error});
      }
    } 

    if (req.body.alert_name == "subscription_payment_succeeded") {
      // Stay Subscribed
    }

    

    if (req.body.alert_name == "subscription_cancelled") {
      // Remove Subscription from User.
      try {
        const updateUser = await prisma.user.update({
          where:{
            id:req.body.passthrough
          },
          data: {
            isSubscribed:false,
            subscription_id: "",
            subscription_update_url:"",
            subscription_cancel_url:""
          }
        });
        if (updateUser) {
          return res.status(200).json({ok:true, message:"Cancelled Subscription Successfully."})
        } else {
          return res.status(400).json({ok:false, message:"Couldn't Cancel Subscription"})
        }
      } catch (error) {
        return res.status(404).json({ok:false, error});
      }
    }
  }