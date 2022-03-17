import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "@utils/mongoDB"

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: <string>process.env.GOOGLE_ID,
      clientSecret: <string>process.env.GOOGLE_SECRET,
    })
  ],

  secret: process.env.SECRET,
  adapter: MongoDBAdapter(clientPromise),

  theme: {
    colorScheme: "light",
  },

  callbacks: {
    async jwt({ token }) {
      return token
    },
  },
})