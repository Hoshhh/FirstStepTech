import * as z from "zod"

export const aboutSchema = z.object({
    about: z.string().max(1000).trim()
})