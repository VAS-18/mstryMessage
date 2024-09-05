import { z } from 'zod'

export const usernameValidation = z.string()
    .min(4, "Must be atleast 4 characters")
    .max(10, "Must be less than 10 Characters")
    .regex(/[^a-zA-Z0-9\s]/, "Username must not contain special characters")


export const signUpSchema = z.object({

    username: usernameValidation,
    email: z.string().email({message:"invalid email address"}),
    password: z.string().min(8, {message: "Password must be 8 characters long"}).max(16,)

})