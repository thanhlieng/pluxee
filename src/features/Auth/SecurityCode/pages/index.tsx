import OTPForm from '@/components/OTPForm';
import * as Auth from '@/layout/AuthLayout/AuthLayout.styles';
import React from 'react';
import { useNavigate } from 'react-router-dom';
interface SecurityCodeFormProps {
    onBack?: () => void;
}
const SecurityCode: React.FC<SecurityCodeFormProps> = ({ onBack }) => {
    const navigate = useNavigate();
    const onFinish = () => {
        navigate('/');
    };
    return (
        <Auth.FormWrapper>
            <OTPForm onBack={onBack} onFinish={onFinish} />
        </Auth.FormWrapper>
    );
};

export default SecurityCode;
