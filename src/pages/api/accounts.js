// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client';

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  const test = await prisma.user.findMany({});
  console.log(test[0]);
  res.status(200).json({account:test[0]})
}
