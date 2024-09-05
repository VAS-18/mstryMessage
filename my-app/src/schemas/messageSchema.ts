import { z } from "zod"


export const messageSchema = z.object({
    content: z.string().min(10, { message: "must be at least 10 characters long" }).max(400, { message: "must be less than 400 characters" })

})