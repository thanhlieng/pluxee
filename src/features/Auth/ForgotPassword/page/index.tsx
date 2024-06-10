import useForgotPassword from '@/apis/account/useForgotPassword';
import { BaseForm } from '@/components/common/forms/BaseForm/BaseForm';
import * as Auth from '@/layout/AuthLayout/AuthLayout.styles';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './ForgotPassword.styles';
interface ForgotPasswordFormData {
    phone: string;
}

const initValues = {
    phone: '',
};

const ForgotPassword: React.FC = () => {
    const navigate = useNavigate();

    const { isPending, mutate } = useForgotPassword();
    const handleSubmit = (values: ForgotPasswordFormData) => {
        mutate({ phone: values.phone });
    };

    return (
        <Auth.FormWrapper>
            <BaseForm layout="vertical" onFinish={handleSubmit} requiredMark="optional" initialValues={initValues}>
                <Auth.BackWrapper onClick={() => navigate(-1)}>
                    <Auth.BackIcon />
                    {'Back'}
                </Auth.BackWrapper>
                <Auth.FormTitle>{'Reset password'}</Auth.FormTitle>
                <S.Description>
                    {'Enter your phone and we’ll send an verification code to reset your password'}
                </S.Description>
                <Auth.FormItem
                    name="phone"
                    label={'Phone'}
                    rules={[
                        { required: true, message: 'This field is required!' },
                        // () => ({
                        //     validator(_, value) {
                        //         if (value) {
                        //             return Promise.resolve();
                        //         }
                        //         return Promise.reject(new Error('Wrong number'));
                        //     },
                        // }),
                    ]}
                >
                    <Auth.FormInput size="large" placeholder={'Enter phone'} />
                </Auth.FormItem>
                <BaseForm.Item noStyle>
                    <S.SubmitButton type="primary" htmlType="submit" loading={isPending}>
                        {'Send instructions'}
                    </S.SubmitButton>
                </BaseForm.Item>
            </BaseForm>
        </Auth.FormWrapper>
    );
};

export default ForgotPassword;
