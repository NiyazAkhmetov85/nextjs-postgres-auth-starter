import type { NextAuthConfig } from "next-auth";
import type { User } from "next-auth";
import type { Session } from "next-auth";

// Определяем тип JWT вручную, так как он больше не экспортируется из "next-auth/jwt"
type JWT = {
  name?: string | null;
  email?: string | null;
  picture?: string | null;
  sub?: string;
  iat?: number;
  exp?: number;
  jti?: string;
  role?: string;
  id?: string;
};

export const authConfig: Partial<NextAuthConfig> = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }: { token: JWT; user?: User }) {
      if (user) {
        token.role = (user as any).role;
        token.id = (user as any).id;
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      if (session.user) {
        (session.user as any).role = token.role;
        (session.user as any).id = token.id;
      }
      return session;
    },
  },
};
