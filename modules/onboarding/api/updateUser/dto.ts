import type { UserInfoDto } from '../../../auth';

export interface UpdateUserResponseDto {
    success?: boolean | null;
    user?: UserInfoDto | null;
}
