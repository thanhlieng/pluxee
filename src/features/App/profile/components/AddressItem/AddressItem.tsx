import { BaseButtonsForm } from '@/components/common/forms/BaseButtonsForm/BaseButtonsForm';
import * as Auth from '@/layout/AuthLayout/AuthLayout.styles';
import React from 'react';

export const AddressItem: React.FC = () => {
    return (
        <BaseButtonsForm.Item
            rules={[{ required: true, message: 'This field is required!' }]}
            name="address"
            label={'Address'}
        >
            <Auth.FormInput size="large" placeholder={'Enter address'} />
        </BaseButtonsForm.Item>
    );
};
