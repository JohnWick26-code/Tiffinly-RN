import { useMutation } from "@tanstack/react-query";
import { apiClient } from "../../../../lib/api";
import { authMutationKeys } from "../mutationKeys";
import { authApiRoutes } from "../apiRoutes";
import type { SendOtpRequest } from "./types";

export const useSendOtp = () => {
    return useMutation({
        mutationKey: [authMutationKeys.sendOtp],
        mutationFn: (data: SendOtpRequest) => {
            return apiClient.post(authApiRoutes.sendOtp, data);
        }
    });
}
