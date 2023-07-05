import axios from "axios";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

// Next auth
export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.JWT_SECRET,
  jwt: { encryption: true },
  pages: {
    signOut: '/login',
  },
  callbacks: {
    async signIn({ user, account }) {
      const data = {
        name: user.name,
        emailId: user.email,
        image: user.image,
        googleProvider: {
          id: account.providerAccountId,
          token: account.access_token,
        },
      };
      if (account.provider === "google") {
        await axios.post(
          `https://api.favoland.com/register/google-signin`,
          data
        );
        return true;
      }
      return true;
    },

    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    //Session data here
    async session({ session, token }) {
      session.user.uid = token.sub;
      session.user.jti = token.jti;
      session.user.data = token.data;
      return session;
    },
  },
});
