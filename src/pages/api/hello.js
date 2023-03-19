// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client';

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  await prisma.$connect();
  const test = await prisma.user.create({
    data: {
      username: "Admin",
      email: "admin@gmail.com"
    }
  })
  res.status(200).json({test})
}
