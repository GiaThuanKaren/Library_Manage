import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId:
        "22792954187-0kgia3rbn2j066baj3e4vk1cckton43d.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    // ...add more providers here
  ],
  callbacks: {
    session: async ({
      session,
      token,
      user,
    }: {
      session: any;
      token: any;
      user: any;
    }) => {
      if (session?.user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
  secret: "giathuanDoAnPython",
};
export default NextAuth(authOptions);
