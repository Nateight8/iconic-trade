import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId:
        "184997089599-f9h5644h0bpgc2pbcil8jgb3hrkepk6k.apps.googleusercontent.com",
      clientSecret: "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",
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
};

export default NextAuth(authOptions);
