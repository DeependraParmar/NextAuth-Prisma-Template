import { prisma } from "@/app/libs/db";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";

const handler = NextAuth({
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
        }),
        Github({
            clientId: process.env.GITHUB_CLIENT_ID || "",
            clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
        })
    ],
    pages: {
        signIn: "/auth/login"
    },
    callbacks: {
        session: ({session, token}: any) => {
            if(session && session.user){
                session.user.id = token.sub
            }
            return session;
        },
        async signIn({ user, account }) {
            const searchedUser = await prisma.user.findFirst({
                where: {
                    id: user.id
                }
            });

            if (searchedUser)
                return true;
            else {
                await prisma.user.create({
                    data: {
                        email: user?.email || "",
                        provider: account?.provider || "",
                    }
                });
                return true;
            }
        }
    }
});

export { handler as GET, handler as POST };