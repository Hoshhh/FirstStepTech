import { User } from "next-auth"
import { JWT } from "next-auth/jwt"
import { UserRole } from "@prisma/client"

type UserId = string
type Name = string | null

declare module "next-auth/jwt" {
  interface JWT {
    id: UserId
    role: UserRole
  }
}

declare module "next-auth" {
  interface Session {
    user: User & {
      id: UserId,
      firstName: Name,
      lastName: Name,
      role: UserRole
    }
  }
}