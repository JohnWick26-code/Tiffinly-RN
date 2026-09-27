import type { UserInfoDomain } from '../../../auth';

export interface UpdateUserResponseDomain {
    success: boolean;
    user: UserInfoDomain | null;
}
