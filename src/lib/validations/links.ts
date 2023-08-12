import * as z from "zod"

export const linksSchema = z.object({
    links: z.array(z.string().trim().toLowerCase()).transform((val) => val.filter((value) => value !== "")),
})