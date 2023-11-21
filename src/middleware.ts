import { authMiddleware } from "@clerk/nextjs";


export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};


// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring the Middleware
export default authMiddleware({
    publicRoutes: ["/"],
});

