import { VerifyOtpResponseDto, VerifyUserDto } from './dto';
import { VerifyOtpResponseDomain, VerifyUserDomain } from './domain';

export const transformVerifyOtpResponse = (response: VerifyOtpResponseDto): VerifyOtpResponseDomain => {
    return {
        success: response.success ?? false,
        accessToken: response.accessToken ?? '',
        refreshToken: response.refreshToken ?? '',
        user: response.user ? transformVerifyUser(response.user) : null,
        onboardingStep: response.onboardingStep || null,
        isOnboardingCompleted: response.isOnboardingCompleted === true,
    };
};

export const transformVerifyUser = (user: VerifyUserDto): VerifyUserDomain => {
    return {
        id: user.id,
        phone: user.phone ?? '',
        name: user.name ?? '',
        email: user.email ?? '',
    };
}