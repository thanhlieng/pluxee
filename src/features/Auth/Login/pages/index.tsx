import AxiosClient from '@/apis/AxiosClient';
import { requestOTP } from '@/apis/account/useGetToken';
import LoginForm from '@/components/LoginForm';
import * as Auth from '@/layout/AuthLayout/AuthLayout.styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();
    const handleSubmit = async (_value: { phone: string }) => {
        // LocalStorage.setToken('1');
        const res = await AxiosClient.post('/lucky_draw_api/GetOtp', {
            phoneNumber: '959695555960',
        });

        navigate('/auth/code', { state: { otp: res?.result.otp } });
    };

    return (
        <Auth.FormWrapper>
            <LoginForm handleSubmit={handleSubmit} />
        </Auth.FormWrapper>
    );
};

export default LoginPage;
