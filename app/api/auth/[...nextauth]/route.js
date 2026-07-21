import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import connectDB from "@/lib/mongodb"
import User from "@/models/User"

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      await connectDB();
      const existing = await User.findOne({ email: user.email });
      if (!existing) {
        const username = user.email.split('@')[0].replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        // prevent reserved words
        const reserved = ["dashboard","login","api","admin"];
        const finalUsername = reserved.includes(username) ? username + Math.floor(Math.random()*1000) : username;
        await User.create({
          email: user.email,
          name: user.name,
          username: finalUsername,
          profilepic: user.image,
        });
      }
      return true;
    },
    async session({ session }) {
      await connectDB();
      const dbUser = await User.findOne({ email: session.user.email });
      if (dbUser) {
        session.user.username = dbUser.username;
      }
      return session;
    }
  }
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }
