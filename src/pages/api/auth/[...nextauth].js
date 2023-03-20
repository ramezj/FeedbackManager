import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import * as Prisma from "@prisma/client";

const prisma = new Prisma.PrismaClient();

const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
          })
    ],
    adapter: PrismaAdapter(prisma),
    secret:"HELLOWORLDJUSTTESTING123"
}

export default NextAuth(authOptions);