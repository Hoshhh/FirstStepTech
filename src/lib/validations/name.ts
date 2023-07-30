import * as z from "zod"

export const nameSchema = z.object({
    firstName: z.string().min(3).max(20).trim(),
    lastName: z.string().min(2).max(20).trim()
})