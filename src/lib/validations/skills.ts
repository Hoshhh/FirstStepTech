import * as z from "zod"

export const skillsSchema = z.object({
    skills: z.array(z.string().max(12).trim().toLowerCase()).transform((val) => val.filter((value) => value !== "")),
})