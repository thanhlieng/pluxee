import { useQuery } from '@tanstack/react-query';
import { authService } from './auth.api';
function useGetToken() {
    return useQuery({
        queryKey: ['token'],
        queryFn: async () => {
            return await authService.authenticateAPI({ userNameOrEmailAddress: 'partner1', password: 'apt20!@24' });
        },
    });
}

export function requestOTP() {
    return useQuery({
        queryKey: ['otp'],
        queryFn: async () => {
            return await authService.getOTP();
        },
    });
}

export default useGetToken;
