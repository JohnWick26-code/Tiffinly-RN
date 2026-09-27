import { OTP_LENGTH } from '../constants';

export function sanitizeOtp(input: string, length: number = OTP_LENGTH): string {
  return input.replace(/\D/g, '').slice(0, length);
}

export function isOtpComplete(input: string, length: number = OTP_LENGTH): boolean {
  return sanitizeOtp(input, length).length === length;
}

export function isValidOtp(input: string, length: number = OTP_LENGTH): boolean {
  return isOtpComplete(input, length);
}
