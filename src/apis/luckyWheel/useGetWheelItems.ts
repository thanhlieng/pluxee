import { useMutation } from '@tanstack/react-query';

import { message } from 'antd';
import type { AxiosResponse } from 'axios';
import { ServerFormError } from '../types';
import { GetWheelItemsParams, luckyWheelService } from './luckyWheel.api';

function useGetWheelItems() {
    return useMutation<AxiosResponse<any>, ServerFormError, GetWheelItemsParams>({
        mutationFn: (body) => {
            return luckyWheelService.getWheelItems(body);
        },
        onError(error) {
            console.log(error);
            message.error(error?.toString());
        },
    });
}

export default useGetWheelItems;
