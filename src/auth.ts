import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import dotenv from "dotenv";
dotenv.config({ path: ".env" });

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  pages: {
    signIn: "/login",
    signOut: "/logout",
  },
});
