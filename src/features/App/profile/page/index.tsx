import useGetProfile from '@/apis/account/useGetProfile';
import useUpdateProfile from '@/apis/account/useUpdateProfile';
import { BaseButtonsForm } from '@/components/common/forms/BaseButtonsForm/BaseButtonsForm';
import { momentToStringDate } from '@/utils';
import { Card, Col, Row, message } from 'antd';
import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import weekday from 'dayjs/plugin/weekday';
import { useCallback, useEffect, useState } from 'react';
import { AddressItem } from '../components/AddressItem/AddressItem';
import { EmailItem } from '../components/EmailItem/EmailItem';
import { FullNameItem } from '../components/FulllNameItem/FullNameItem';
import { PhoneItem } from '../components/PhoneItem/PhoneItem';
import * as S from './ProfileLayout.styles';
dayjs.extend(weekday);
dayjs.extend(localeData);
const initialPersonalInfoValues = {
    fullName: '',
    birthday: undefined,
    language: undefined,
    phone: '+84795296216',
    email: '',
};

const Profile = () => {
    const [form] = BaseButtonsForm.useForm();
    const [isFieldsChanged, setFieldsChanged] = useState(false);
    const { data, refetch } = useGetProfile();
    const mutation = useUpdateProfile();
    const dateFormat = 'DD/MM/YYYY';

    useEffect(() => {
        if (data?.data) {
            form.setFieldsValue({
                fullName: data.data.full_name,
                birthday: dayjs(momentToStringDate(data?.data.birthday, 'revertDate'), dateFormat),
                phone: data.data.phone,
                email: data.data.email,
            });
        }
    }, [data]);

    const onFinish = useCallback((values: any) => {
        console.log(values['birthday'].format('YYYY-MM-DD'));
        mutation.mutate(
            { fullName: values.fullName, email: values.email, birthday: values['birthday'].format('YYYY-MM-DD') },
            {
                onSuccess() {
                    refetch();
                    message.success('Cập nhật thông tin thành công');
                },
            }
        );
    }, []);

    return (
        <S.Wrapper>
            <Card>
                <BaseButtonsForm
                    form={form}
                    name="info"
                    initialValues={initialPersonalInfoValues}
                    isFieldsChanged={isFieldsChanged}
                    setFieldsChanged={setFieldsChanged}
                    onFieldsChange={() => setFieldsChanged(true)}
                    onFinish={onFinish}
                    loading={mutation.isPending}
                >
                    <Row gutter={{ xs: 10, md: 15, xl: 30 }}>
                        <Col span={24}>
                            <BaseButtonsForm.Item>
                                <BaseButtonsForm.Title>{'Personal Info'}</BaseButtonsForm.Title>
                            </BaseButtonsForm.Item>
                        </Col>

                        <Col xs={24} md={12}>
                            <FullNameItem />
                        </Col>

                        <Col xs={24} md={12}>
                            <PhoneItem verified={true} />
                        </Col>

                        <Col xs={24} md={12}>
                            <EmailItem />
                        </Col>

                        <Col xs={24} md={12}>
                            <AddressItem />
                        </Col>
                    </Row>
                </BaseButtonsForm>
            </Card>
        </S.Wrapper>
    );
};

export default Profile;
