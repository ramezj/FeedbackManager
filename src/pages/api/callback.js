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
      return res.status(200).json("Subscription Created Successfully!")
    } else {
      return res.status(200).json({
        message:"Couldn't Verify Subscription"
      })
    }
  }