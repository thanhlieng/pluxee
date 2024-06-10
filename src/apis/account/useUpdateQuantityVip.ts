import { useMutation } from '@tanstack/react-query';
import { message } from 'antd';
import type { AxiosResponse } from 'axios';
import { ServerFormError } from '../types';
import { authService } from './auth.api';

function useUpdateQuantityVip() {
    return useMutation<AxiosResponse<any>, ServerFormError, { quantity_vip: number }>({
        mutationFn: (body) => {
            return authService.updateQuantityVip(body);
        },
        onError(error) {
            console.log(error);
            message.error(error?.toString());
        },
    });
}

export default useUpdateQuantityVip;
