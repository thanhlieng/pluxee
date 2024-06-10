import { useMutation } from '@tanstack/react-query';

import { message } from 'antd';
import type { AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';
import { ServerFormError } from '../types';
import { SignUpParams, authService } from './auth.api';

export interface SignInResponse {
    transactionId: string;
}

function useSignUp() {
    const navigate = useNavigate()
    return useMutation<AxiosResponse<SignInResponse>, ServerFormError, SignUpParams>({
        mutationFn: (body) => {
            return authService.register(body);
        },
        onSuccess(data) {
            navigate('/auth/code', {
                state: {
                    transactionId: data.data.transactionId,
                    type: 'signUp'
                }
            })
            return
        },
        onError(error) {

            console.log(error);
            message.error(error?.toString());
        },
    });
}
export default useSignUp;
