import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github"; // пример, замени на свои
import { partialConfig } from 'app/auth.config';


const fullConfig = {
  ...partialConfig,
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
    // другие провайдеры
  ],
};

export default NextAuth(fullConfig).auth;

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
