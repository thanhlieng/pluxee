import { Form } from 'antd';
import React, { ComponentProps } from 'react';

import { ValidateErrorEntity } from 'rc-field-form/lib/interface';
import { BaseFormTitle } from '../components/BaseFormTitle/BaseFormTitle';
import { BaseFormItem } from '../components/BaseFormItem/BaseFormItem';
import { BaseFormList } from '../components/BaseFormList/BaseFormList';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type BaseFormProps = Omit<ComponentProps<typeof Form>, 'onFinish'> & { onFinish?: (values: any) => void };

export interface BaseFormInterface<T> extends React.FC<T> {
    Title: typeof BaseFormTitle;
    Item: typeof BaseFormItem;
    List: typeof BaseFormList;
    useForm: typeof Form.useForm;
    Provider: typeof Form.Provider;
}

export const BaseForm: BaseFormInterface<BaseFormProps> = ({ onFinishFailed, layout = 'vertical', ...props }) => {
    const onFinishFailedDefault = (_error: ValidateErrorEntity<unknown>) => {
        // notificationController.error({
        //   message: 'error',
        //   description: error.errorFields[0].errors,
        // });
    };

    return <Form onFinishFailed={onFinishFailed || onFinishFailedDefault} layout={layout} {...props} />;
};

BaseForm.Title = BaseFormTitle;
BaseForm.Item = BaseFormItem;
BaseForm.List = BaseFormList;
BaseForm.useForm = Form.useForm;
BaseForm.Provider = Form.Provider;
