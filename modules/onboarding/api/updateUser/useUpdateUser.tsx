import { useMutation } from "@tanstack/react-query";
import { apiClient } from "../../../../lib/api";
import { onboardingMutationKeys } from "../mutationKeys";
import { onboardingApiRoutes } from "../apiRoutes";
import type { UpdateUserRequest } from "./types";
import type { UpdateUserResponseDto } from "./dto";
import { transformUpdateUserResponse } from "./transform";

export const useUpdateUser = () => {
    return useMutation({
        mutationKey: [onboardingMutationKeys.updateUser],
        mutationFn: async (data: UpdateUserRequest) => {
            const response = await apiClient.patch<UpdateUserResponseDto>(onboardingApiRoutes.user, data);
            return transformUpdateUserResponse(response.data);
        }
    });
}
