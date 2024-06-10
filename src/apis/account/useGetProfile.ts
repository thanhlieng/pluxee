import { useQuery } from '@tanstack/react-query';
import LocalStorage from '../LocalStorage';
import { authService } from './auth.api';
function useGetProfile() {

    const { data: token } = useQuery({
        queryKey: ['token'],
        queryFn: async () => {
            return await LocalStorage.getToken();
        },
    });
    return useQuery({
        queryKey: ['profile'],
        queryFn: async () => {
            return await authService.profile();
        },
        enabled: !!token,
    });


}

export default useGetProfile;