import React from 'react';

import * as S from './BirthdayItem.styles';
import { BaseButtonsForm } from '@/components/common/forms/BaseButtonsForm/BaseButtonsForm';

export const BirthdayItem: React.FC = () => {
  const dateFormat = 'DD/MM/YYYY';
  return (
    <BaseButtonsForm.Item name="birthday" label={'Birthday'}>
      <S.BirthdayPicker size='large' format={dateFormat} />
    </BaseButtonsForm.Item>
  );
};
