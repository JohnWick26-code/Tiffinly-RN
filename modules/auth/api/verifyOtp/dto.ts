export interface VerifyOtpResponseDto {
    success?: boolean;
    accessToken?: string;
    refreshToken?: string;
    user?: VerifyUserDto;
    onboardingStep?: string | null;
    isOnboardingCompleted?: boolean | null;
}

export interface VerifyUserDto {
    id: string;
    phone?: string;
    name?: string;
    email?: string;
}
