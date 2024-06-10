import { useMutation } from '@tanstack/react-query';

import { message } from 'antd';
import type { AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';
import { ServerFormError } from '../types';
import { authService } from './auth.api';

export interface ForgotPasswordParams {
    phone: string;
}

export interface ForgotPasswordResponse {
    transactionId: string;
}

function useForgotPassword() {
    const navigate = useNavigate();
    return useMutation<AxiosResponse<ForgotPasswordResponse>, ServerFormError, ForgotPasswordParams>({
        mutationFn: (body) => {
            return authService.forgotPassword(body);
        },
        onSuccess(data) {
            console.log(data.data.transactionId);
            navigate('/auth/code', {
                state: {
                    transactionId: data.data.transactionId,
                    type: 'forgotPassword',
                },
            });
            return;
        },
        onError(error) {
            console.log(error);
            message.error(error?.toString());
        },
    });
}

export default useForgotPassword;
