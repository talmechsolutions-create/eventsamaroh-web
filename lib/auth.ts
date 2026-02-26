import CredentialsProvider from "next-auth/providers/credentials"
import { NextAuthOptions } from "next-auth"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { prisma } from "@/lib/prisma"
import bcrypt from "bcryptjs"

/* ================= ROLE TYPE ================= */

export type AppUserRole = "ADMIN" | "USER"

/* ================= NEXTAUTH OPTIONS ================= */

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },

  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email.toLowerCase() },
        })

        if (!user) return null

        const passwordValid = await bcrypt.compare(
          credentials.password,
          user.password
        )

        if (!passwordValid) return null

        return {
          id: user.id,
          email: user.email,
          role: user.role as AppUserRole,
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as any).role
      }
      return token
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role as AppUserRole
      }
      return session
    },
  },

  pages: {
    signIn: "/auth/login",
  },

  secret: process.env.NEXTAUTH_SECRET,
}

/* ================= REQUIRE ADMIN HELPER ================= */

export async function requireAdmin() {
  const session = await getServerSession(authOptions)

  if (!session || session.user?.role !== "ADMIN") {
    redirect("/auth/login")
  }

  return session
}