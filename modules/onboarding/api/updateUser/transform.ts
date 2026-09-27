import { transformUserInfo } from '../../../auth';
import type { UpdateUserResponseDomain } from './domain';
import type { UpdateUserResponseDto } from './dto';

export const transformUpdateUserResponse = (
    response: UpdateUserResponseDto,
): UpdateUserResponseDomain => {
    return {
        success: response?.success === true,
        user: response?.user ? transformUserInfo(response.user) : null,
    };
};
