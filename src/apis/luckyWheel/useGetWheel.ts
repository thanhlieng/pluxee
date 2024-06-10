import { useQuery } from '@tanstack/react-query';
import LocalStorage from '../LocalStorage';
import { luckyWheelService } from './luckyWheel.api';

function useGetWheel() {
    const { data: token } = useQuery({
        queryKey: ['token'],
        queryFn: async () => {
            return await LocalStorage.getToken();
        },
    });
    return useQuery({
        queryKey: ['wheels'],
        queryFn: async () => {
            return await luckyWheelService.getWheels();
        },
        enabled: !!token,
    });
}

export default useGetWheel;
