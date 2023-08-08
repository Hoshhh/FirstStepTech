import * as z from "zod"

export const skillsSchema = z.object({
    skills: z.array(z.string()).nonempty(),
})