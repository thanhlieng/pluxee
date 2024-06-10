import { useMutation } from '@tanstack/react-query';

import { message } from 'antd';
import type { AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';
import { ServerFormError } from '../types';
import { UpdatePasswordParams, authService } from './auth.api';

function useUpdatePassword() {
    const navigate = useNavigate()
    return useMutation<AxiosResponse<{}>, ServerFormError, UpdatePasswordParams>({
        mutationFn: (body) => {
            return authService.updatePassword(body);
        },
        onSuccess(data) {
            console.log(data);
            message.success('Update password successful!');
            navigate('/auth/login')
            return
        },
        onError(error) {
            console.log(error);
            message.error(error?.toString());
        },
    });
}

export default useUpdatePassword;
