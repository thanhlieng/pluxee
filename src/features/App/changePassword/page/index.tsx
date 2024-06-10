import useChangePassword from '@/apis/account/useChangePassword';
import { BaseButtonsForm } from '@/components/common/forms/BaseButtonsForm/BaseButtonsForm';
import * as Auth from '@/layout/AuthLayout/AuthLayout.styles';
import { Card, Col, Row } from 'antd';
import { useCallback, useState } from 'react';
import * as S from './ChangePasswordLayout.styles';

const initialValues = {
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
};

const ChangePassword = () => {
    const [form] = BaseButtonsForm.useForm();
    const [isFieldsChanged, setFieldsChanged] = useState(false);
    const mutation = useChangePassword()

    const onFinish = useCallback(
        (values: any) => {
            mutation.mutate({ oldPassword: values.currentPassword, newPassword: values.newPassword }, {
                onSuccess() {

                },
            })
        },
        [],
    );

    return (
        <S.Wrapper>
            <Card>
                <BaseButtonsForm
                    form={form}
                    name="info"
                    initialValues={initialValues}
                    isFieldsChanged={isFieldsChanged}
                    setFieldsChanged={setFieldsChanged}
                    onFieldsChange={() => setFieldsChanged(true)}
                    onFinish={onFinish}
                    loading={mutation.isPending}
                >
                    <Row gutter={{ xs: 10, md: 15, xl: 30 }}>
                        <Col span={24}>
                            <BaseButtonsForm.Item>
                                <BaseButtonsForm.Title>{'Change Password'}</BaseButtonsForm.Title>
                            </BaseButtonsForm.Item>
                        </Col>

                        <Col xs={24} md={24}>
                            <Auth.FormItem
                                label={'Current Password'}
                                name="currentPassword"
                                rules={[{ required: true, message: 'This field is required!' }]}
                            >
                                <Auth.FormInputPassword size='large' placeholder={'Enter current password'} />
                            </Auth.FormItem>
                        </Col>

                        <Col xs={24} md={24}>
                            <Auth.FormItem
                                label={'New Password'}
                                name="newPassword"
                                rules={[{ required: true, message: 'This field is required!' }]}
                            >
                                <Auth.FormInputPassword size='large' placeholder={'Enter new password'} />
                            </Auth.FormItem>
                        </Col>

                        <Col style={{ marginBottom: '1rem' }} xs={24} md={24}>
                            <Auth.FormItem
                                label={'Confirm Password'}
                                name="confirmPassword"
                                dependencies={['newPassword']}
                                rules={[
                                    { required: true, message: 'This field is required!' },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            if (!value || getFieldValue('newPassword') === value) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject(new Error("The two passwords that you entered do not match!"));
                                        },
                                    }),
                                ]}
                            >
                                <Auth.FormInputPassword size='large' placeholder={"Enter confirm Password"} />
                            </Auth.FormItem>
                        </Col>
                    </Row>
                </BaseButtonsForm>
            </Card>
        </S.Wrapper>
    )
}
export default ChangePassword