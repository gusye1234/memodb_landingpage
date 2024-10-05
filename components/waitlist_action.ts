'use server'

import { ResultCode } from '@/lib/utils'
import { z } from 'zod'
import { kv } from '@vercel/kv'

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

        if (parsedCredentials.success) {
            console.log('email success', email)
            await kv.sadd(`memobase:waitlist`, email)
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
