import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import config from '@/google.config';
import { connectDB } from "@/db/dababase";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: config.google.clientId,
      clientSecret: config.google.clientSecret,
    }),
  ],
  adapter : MongoDBAdapter(connectDB),
  secret: config.secret,
};

export default NextAuth(authOptions); 