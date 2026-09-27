import { AxiosError } from 'axios';
import { useQuery, type UseQueryOptions } from '@tanstack/react-query';

import { apiClient } from '../../../../lib/api';
import { setUser } from '../../../../lib/store';
import { authApiRoutes } from '../apiRoutes';
import { authQueryKeys } from '../queryKeys';
import type { UserInfoDto } from './dto';
import type { UserInfoDomain } from './domain';
import { transformUserInfo } from './transform';

type UserInfoOptions = Omit<
    UseQueryOptions<UserInfoDomain, Error, UserInfoDomain, string[]>,
    'queryKey' | 'queryFn'
>;

export async function getUserInfo(): Promise<UserInfoDomain> {
    try {
        const { data } = await apiClient.get<UserInfoDto>(authApiRoutes.userInfo);
        const user = transformUserInfo(data);
        setUser(user);
        return user;
    } catch (error) {
        if (error instanceof AxiosError) {
            throw new Error(error.response?.data?.error ?? error.message);
        }
        throw error;
    }
}

export const useUserInfo = (options?: UserInfoOptions) => {
    return useQuery({
        queryKey: [authQueryKeys.userInfo],
        queryFn: getUserInfo,
        ...options,
    });
};
