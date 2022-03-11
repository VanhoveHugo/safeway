import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    })
  ],

  secret: process.env.SECRET,

  theme: {
    colorScheme: "light",
  },

  callbacks: {
    async jwt({ token }) {
      token.userRole = "admin"
      return token
    },
  },
})