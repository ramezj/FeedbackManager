import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const authOptions = NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: 'jwt'
    },
    providers: [
        CredentialsProvider({
            type:'credentials',
            credentials: {},
            async authorize(credentials, req) {
                // find user from database.
                const user = await User
                if (user) {
                    return user
                } else {
                    return null
                }
            }
        })
    ]
}

export default NextAuth(authOptions);