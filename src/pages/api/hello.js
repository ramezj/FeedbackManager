// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client';

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  await prisma.$connect();
  const test = await prisma.user.create({
    data: {
      rating:5,
      description: "A very good website.. quite laggy but it's okay! :D",
      userId: '641826125d893f770bbe0700'
    }
  })
  res.status(200).json({test})
}
