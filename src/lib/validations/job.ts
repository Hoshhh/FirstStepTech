import * as z from "zod"

export const jobFrontSchema = z.object({
    position: z.string().trim(),
    company: z.string().max(32).trim(),
    skills: z.array(z.string().max(12).trim().toLowerCase()).transform((val) => val.filter((value) => value !== "")),
    workplace: z.string().trim(),
    location: z.string().trim(),
})

export const jobBackSchema = z.object({
    position: z.string().trim(),
    company: z.string().max(32).trim(),
    skills: z.string().trim().toLowerCase(),
    workplace: z.string().trim(),
    location: z.string().trim(),
})