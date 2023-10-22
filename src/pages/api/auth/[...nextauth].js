import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "../../../../models/user";
import "@/lib/mongodb";

const THIRTY_DAYS = 30 * 24 * 60 * 60;

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},

      async authorize(credentials) {
        const { email, password } = credentials;

        try {
          const user = await User.findOne({ email });

            if (!user) {
              console.log("Couldn't find user");
            return null;
          }
          console.log(user);
          const passwordsMatch = await bcrypt.compare(password, user.password);
          console.log(passwordsMatch);
          if (!passwordsMatch) {
            return null;
          }

          return user;
        } catch (error) {
          console.log("Error: ", error);
          return error;
        }
      },
    }),
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET,
    // }),
    // ...add more providers here
  ],
  session: {
    strategy: "jwt",
    maxAge: THIRTY_DAYS,
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
  callbacks: {
    jwt: async ({ token, trigger, user, session }) => {
      if (user) {
        token.user = {
          id: user._id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          age: user.age,
        };
      }
      // if (trigger === "update") {
      //   if (session.newUserData) {
      //     token.user = session.newUserData;
      //   }
      // }
      return token;
    },
    session: async ({ session, token }) => {
      session.user = token.user;
      return session;
    },
  },
};
export default NextAuth(authOptions);
