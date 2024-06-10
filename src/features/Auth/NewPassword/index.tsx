import useUpdatePassword from '@/apis/account/useUpdatePassword';
import { BaseForm } from '@/components/common/forms/BaseForm/BaseForm';
import * as Auth from '@/layout/AuthLayout/AuthLayout.styles';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './NewPasswordForm.styles';
interface NewPasswordFormData {
  password: string;
  confirmPassword: string;
}

const initStates = {
  password: '',
  confirmPassword: '',
};

export const NewPasswordForm: React.FC = () => {

  const navigate = useNavigate();
  const location = useLocation()
  const { transactionId, otp } = location.state;
  const { mutate, isPending } = useUpdatePassword()
  const handleSubmit = (values: NewPasswordFormData) => {
    mutate({ transactionId, otp, new_password: values.password })
  };

  return (
    <Auth.FormWrapper>
      <BaseForm layout="vertical" onFinish={handleSubmit} requiredMark="optional" initialValues={initStates}>
        <Auth.BackWrapper onClick={() => navigate(-1)}>
          <Auth.BackIcon />
          {'Back'}
        </Auth.BackWrapper>
        <Auth.FormTitle>{'Create new password'}</Auth.FormTitle>
        <S.Description>{'Your new password must be different from previous'}</S.Description>
        <Auth.FormItem
          name="password"
          label={'Password'}
          rules={[{ required: true, message: 'This field is required!' },]}
        >
          <Auth.FormInputPassword size='large' placeholder={'Enter password'} />
        </Auth.FormItem>
        <Auth.FormItem
          name="confirmPassword"
          label={'Confirm Password'}
          dependencies={['password']}
          rules={[
            { required: true, message: 'This field is required!' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The two passwords that you entered do not match!'));
              },
            }),
          ]}
          hasFeedback
        >
          <Auth.FormInputPassword size='large' placeholder={'Enter confirm password'} />
        </Auth.FormItem>
        <BaseForm.Item noStyle>
          <S.SubmitButton size='large' type="primary" htmlType="submit" loading={isPending}>
            {'Reset Password'}
          </S.SubmitButton>
        </BaseForm.Item>
      </BaseForm>
    </Auth.FormWrapper>
  );
};
