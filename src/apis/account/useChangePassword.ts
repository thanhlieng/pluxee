import { useMutation } from '@tanstack/react-query';

import { message } from 'antd';
import type { AxiosResponse } from 'axios';
import { ServerFormError } from '../types';
import { ChangePasswordParams, authService } from './auth.api';

function useChangePassword() {

    return useMutation<AxiosResponse<{}>, ServerFormError, ChangePasswordParams>({
        mutationFn: (body) => {
            return authService.changePassword(body);
        },
        onSuccess(data) {
            console.log(data);
            message.success('Update password successful!');
            return
        },
        onError(error) {
            console.log(error);
            message.error(error?.toString());
        },
    });
}

export default useChangePassword;
