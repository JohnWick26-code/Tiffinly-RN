import { COUNTRY_CODE, MOBILE_LENGTH } from '../constants';

export function normalizeMobile(input: string): string {
  return input.replace(/\D/g, '').slice(0, MOBILE_LENGTH);
}

export function isValidMobile(input: string): boolean {
  const digits = normalizeMobile(input);
  return digits.length === MOBILE_LENGTH && /^[6-9]/.test(digits);
}

export function formatMobile(input: string): string {
  const digits = normalizeMobile(input);
  return digits.replace(/(\d{5})(\d{1,5})/, '$1 $2').trim();
}

export function formatMobileWithCode(input: string): string {
  return `${COUNTRY_CODE} ${formatMobile(input)}`.trim();
}
