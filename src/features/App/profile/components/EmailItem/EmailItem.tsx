import React from 'react';
import { FormItemProps } from 'antd';
import { BaseButtonsForm } from '@/components/common/forms/BaseButtonsForm/BaseButtonsForm';
import * as Auth from '@/layout/AuthLayout/AuthLayout.styles';

interface EmailItemProps extends FormItemProps {
  verified?: boolean;
  onClick?: () => void;
}

export const EmailItem: React.FC<EmailItemProps> = ({ required, onClick, verified, ...props }) => {

  return (
    <BaseButtonsForm.Item
      name="email"
      label={'Email'}
      rules={[
        {
          type: 'email',
          message: "Please input a valid email address!",
        },
      ]}
      {...props}
    >
      <Auth.FormInput size='large' placeholder={'Enter email'} disabled={verified} onClick={onClick} />
    </BaseButtonsForm.Item>
  );
};
