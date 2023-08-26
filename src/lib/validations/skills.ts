import * as z from "zod"

export const skillsSchema = z.object({
    skills: z.object({
        skill1: z.string().max(12).trim().toLowerCase(),
        skill2: z.string().max(12).trim().toLowerCase(),
        skill3: z.string().max(12).trim().toLowerCase(),
        skill4: z.string().max(12).trim().toLowerCase(),
        skill5: z.string().max(12).trim().toLowerCase(),
        skill6: z.string().max(12).trim().toLowerCase(),
    })
})