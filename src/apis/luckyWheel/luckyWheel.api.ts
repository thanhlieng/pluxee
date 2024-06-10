import AxiosClient from '@/apis/AxiosClient';

export interface GetWheelItemsParams {
    wheel_id: number;
    limit: number;
}

export const luckyWheelService = {
    getWheels: () => {
        return AxiosClient.get('/lucky_draw_api/GetWheels');
    },
    getWheelItems: (body: { wheel_id: number; limit: number }) => {
        return AxiosClient.post('/lucky_draw_api/GetWheelItems', body);
    },
    chartPoint: (body: { wheel_id: number; point: number }) => {
        return AxiosClient.post('/lucky_draw_api/ChargePoint', body);
    },
};
