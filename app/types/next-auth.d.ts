import NextAuth from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      email: string
      role: "client" | "provider"
    }
  }

  interface User {
    id: string
    role: "client" | "provider"
  }

  interface JWT {
    id: string
    role: "client" | "provider"
  }
}
