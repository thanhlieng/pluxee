import React from 'react';

import { BaseButtonsForm } from '@/components/common/forms/BaseButtonsForm/BaseButtonsForm';
import * as S from './PhoneItem.styles';

interface PhoneItemsProps {
  required?: boolean;
  onClick?: () => void;
  verified?: boolean;
}

export const PhoneItem: React.FC<PhoneItemsProps> = ({ required, onClick, verified }) => {


  return (
    <BaseButtonsForm.Item
      name="phone"
      $isSuccess={verified}
      $successText={'Verified'}
      label={'Phone'}
      rules={[
        { required: true, message: 'This field is required!' },
        // () => ({
        //   validator(_, value) {
        //     // if (!value || isValidPhoneNumber(value, 'VI')) {
        //     //   return Promise.resolve();
        //     // }
        //     if (!value) {
        //       return Promise.resolve();
        //     }
        //     return Promise.reject(new Error('Wrong number'));
        //   },
        // }),
      ]}
    >
      <S.PhoneNumberInput disabled={verified} className="ant-input" onClick={onClick} />
    </BaseButtonsForm.Item>
  );
};
