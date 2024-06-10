import { BaseButtonsForm } from '@/components/common/forms/BaseButtonsForm/BaseButtonsForm';
import * as Auth from '@/layout/AuthLayout/AuthLayout.styles';
import React from 'react';

export const FullNameItem: React.FC = () => {

  return (
    <BaseButtonsForm.Item rules={[{ required: true, message: 'This field is required!' }]} name="fullName" label={'Full Name'}>
      <Auth.FormInput size='large' placeholder={'Enter full name'} />
    </BaseButtonsForm.Item>
  );
};
