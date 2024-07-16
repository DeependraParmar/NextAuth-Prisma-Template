import authConfig from "@/auth.config";
import NextAuth from "next-auth";
import { publicRoutes, apiAuthPrefix, authRoutes, DEFAULT_LOGIN_REDIRECT } from "@/routes";
const { auth } = NextAuth(authConfig);

export default auth((req): void | Response | Promise<void | Response> => {
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth;

    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
    const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
    const isAuthRoute = authRoutes.includes(nextUrl.pathname);

    if(isApiAuthRoute){
        return Promise.resolve();
    }

    if(isAuthRoute){
        if(isLoggedIn)
            return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));

        return Promise.resolve();
    }

    if(!isLoggedIn && !isPublicRoute){
        return Response.redirect(new URL('/auth/login', nextUrl));
    }

    return Promise.resolve();
});

export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};