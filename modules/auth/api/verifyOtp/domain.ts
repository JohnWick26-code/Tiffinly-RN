export interface VerifyOtpResponseDomain {
    success: boolean;
    accessToken: string;
    refreshToken: string;
    user: VerifyUserDomain | null;
    onboardingStep: string | null;
    isOnboardingCompleted: boolean;
}

export interface VerifyUserDomain {
    id: string;
    phone: string;
    name: string;
    email: string;
}
