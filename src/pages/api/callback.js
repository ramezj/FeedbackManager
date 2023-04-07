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
    res.status(200).json(req.body)
    console.log(req.body);
  }