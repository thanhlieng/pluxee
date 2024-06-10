import { useMutation } from '@tanstack/react-query';
import { message } from 'antd';
import type { AxiosResponse } from 'axios';
import { ServerFormError } from '../types';
import { ConfirmOtpParams, authService } from './auth.api';





function useConfirmOTP() {
    return useMutation<AxiosResponse<{}>, ServerFormError, ConfirmOtpParams>({
        mutationFn: (body) => {
            return authService.confirmOtp(body);
        },

        onError(error) {
            console.log(error);
            message.error(error?.toString());
        },
    });
}

export default useConfirmOTP;
