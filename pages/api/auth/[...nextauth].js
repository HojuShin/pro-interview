import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import config from '@/google.config';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: config.google.clientId,
      clientSecret: config.google.clientSecret,
    }),
  ],
  secret: config.secret,
};

export default NextAuth(authOptions); 