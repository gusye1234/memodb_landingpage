import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export enum ResultCode {
  InvalidCredentials = 'INVALID_CREDENTIALS',
  InvalidSubmission = 'INVALID_SUBMISSION',
  UserAlreadyExists = 'USER_ALREADY_EXISTS',
  UnknownError = 'UNKNOWN_ERROR',
  UserCreated = 'USER_CREATED',
  UserLoggedIn = 'USER_LOGGED_IN',
  EmailSubmitted = 'EMAIL_SUBMITTED'
}

export const getMessageFromCode = (resultCode: string) => {
  switch (resultCode) {
    case ResultCode.InvalidCredentials:
      return 'Invalid credentials. Please try again.'
    case ResultCode.InvalidSubmission:
      return 'Invalid submission. Please try again.'
    case ResultCode.EmailSubmitted:
      return 'Email submitted!'
    case ResultCode.UserAlreadyExists:
      return 'User already exists!'
    case ResultCode.UserCreated:
      return 'User created!'
    case ResultCode.UnknownError:
      return 'Unknown error. Please try again later.'
    case ResultCode.UserLoggedIn:
      return 'logged in!'
  }
}