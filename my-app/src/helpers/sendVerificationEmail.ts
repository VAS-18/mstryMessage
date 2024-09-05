import { resend } from "@/lib/resend"

import PlaidVerifyIdentityEmail from "../../emails/verificationEmail"

import { ApiResponse } from "@/types/ApiResponse"

export async function sendVerificationEmail(
    email: string,
    username: string,
    verifyCode: string,

):Promise<ApiResponse> {
    try {
        const { data, error } = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ['delivered@resend.dev'],
            subject: 'Verification Code',
            react: PlaidVerifyIdentityEmail({ name: 'John' , validationCode: verifyCode }),
          });
        return {success: true, message: "Verification Email Sent Successfully"}
    } catch (emailError) {
        console.error("Error Sending Verification Email", emailError)
        return {success: false, message: "Failed to send verification Email"}
    }
}