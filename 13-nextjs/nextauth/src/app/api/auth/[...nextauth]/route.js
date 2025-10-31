import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: "Ov23liFt2aXoTReXKobg",
      clientSecret: "934a2c06ac58e3eb9ae76d23aa2d75f29f569697",
    }),
  ],
});

export { handler as GET, handler as POST };
