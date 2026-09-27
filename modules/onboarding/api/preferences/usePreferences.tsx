import { AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';

import { apiClient } from '../../../../lib/api';
import { onboardingApiRoutes } from '../apiRoutes';
import { onboardingQueryKeys } from '../queryKeys';
import type { PreferenceStep, PreferencesDomain } from './domain';
import type { PreferencesDto } from './dto';
import { transformPreferences } from './transform';

export async function getPreferences(
    step: PreferenceStep,
): Promise<PreferencesDomain> {
    try {
        const { data } = await apiClient.get<PreferencesDto>(
            onboardingApiRoutes.preferences,
            { params: { step } },
        );

        return transformPreferences(data);
    } catch (error) {
        if (error instanceof AxiosError) {
            throw new Error(error.response?.data?.error ?? error.message);
        }

        throw error;
    }
}

export const usePreferences = (step: PreferenceStep) => {
    return useQuery({
        queryKey: [onboardingQueryKeys.preferences, step],
        queryFn: () => getPreferences(step),
    });
};
