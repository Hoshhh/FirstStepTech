import { User } from "next-auth"
import { JWT } from "next-auth/jwt"

type UserId = string
type Name = String | null

declare module "next-auth/jwt" {
  interface JWT {
    id: UserId
  }
}

declare module "next-auth" {
  interface Session {
    user: User & {
      id: UserId,
      firstName: Name,
      lastName: Name
    }
  }
}