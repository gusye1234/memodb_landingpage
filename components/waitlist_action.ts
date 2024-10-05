'use server'

import { ResultCode } from '@/lib/utils'
import { z } from 'zod'
import { kv } from '@vercel/kv'
import { getRequestContext } from "@cloudflare/next-on-pages";

// export const runtime = "edge"

interface Result {
    type: string
    resultCode: ResultCode
}

export async function appendEmail(
    _prevState: Result | undefined,
    formData: FormData
) {
    try {
        const email = formData.get('email')
        const parsedCredentials = z
            .object({
                email: z.string().email()
            })
            .safeParse({
                email
            })

        if (parsedCredentials.success && email) {
            const today = new Date()
            const date = today.toISOString().split('T')[0]
            console.log('email success', email)
            await kv.sadd(`memobase:waitlist`, email)
            const waitlist_cf_kv = getRequestContext().env.waitlist_kv
            await waitlist_cf_kv.put(`memobase:waitlist:${email}`, date)
            return {
                type: 'success',
                resultCode: ResultCode.EmailSubmitted
            }
        } else {
            return {
                type: 'error',
                resultCode: ResultCode.InvalidSubmission
            }
        }
    } catch (error) {
        console.error("appendEmail error", error)
        return {
            type: 'error',
            resultCode: ResultCode.UnknownError
        }
    }
    return {
        type: 'error',
        resultCode: ResultCode.InvalidSubmission
    }
}
