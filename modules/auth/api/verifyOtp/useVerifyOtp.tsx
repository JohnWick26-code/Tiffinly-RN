import { useMutation } from "@tanstack/react-query";
import { apiClient } from "../../../../lib/api";
import { authMutationKeys } from "../mutationKeys";
import { authApiRoutes } from "../apiRoutes";
import type { VerifyOtpRequest } from "./types";
import type { VerifyOtpResponseDto } from "./dto";
import { transformVerifyOtpResponse } from "./transform";

export const useVerifyOtp = () => {
    return useMutation({
        mutationKey: [authMutationKeys.verifyOtp],
        mutationFn: async (data: VerifyOtpRequest) => {
            const response = await apiClient.post<VerifyOtpResponseDto>(authApiRoutes.verifyOtp, data);
            return transformVerifyOtpResponse(response.data);
        }
    });
}
