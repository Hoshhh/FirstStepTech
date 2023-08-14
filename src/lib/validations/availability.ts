import * as z from "zod"

export const availabilitySchema = z.object({
    availability: z.array(z.string().trim()).transform((val) => val.filter((value) => value !== "")),
})