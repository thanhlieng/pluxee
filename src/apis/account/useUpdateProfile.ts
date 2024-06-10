import { useMutation } from '@tanstack/react-query';
import { message } from 'antd';
import type { AxiosResponse } from 'axios';
import { ServerFormError } from '../types';
import { UpdateProfileParams, authService } from './auth.api';

function useUpdateProfile() {
    return useMutation<AxiosResponse<any>, ServerFormError, UpdateProfileParams>({
        mutationFn: (body) => {
            return authService.updateProfile(body);
        },
        onError(error) {
            console.log(error);
            message.error(error?.toString());
        },
    });
}

export default useUpdateProfile;
