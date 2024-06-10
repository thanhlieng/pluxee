import { BaseForm } from '@/components/common/forms/BaseForm/BaseForm';
import * as Auth from '@/layout/AuthLayout/AuthLayout.styles';
import { Link, useNavigate } from 'react-router-dom';
import * as S from './SignUpForm.styles';

const RegisterPage = () => {
    const navigate = useNavigate();
    const handleSubmit = async (_value: { phone: string }) => {
        navigate('/auth/code');
    };

    const initValues = {
        phone: '',
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
    };

    return (
        <Auth.FormWrapper>
            <BaseForm layout="vertical" onFinish={handleSubmit} initialValues={initValues}>
                <S.Title>{'Sign Up'}</S.Title>

                <Auth.FormItem
                    name="fullName"
                    label={'Full Name'}
                    rules={[{ required: true, message: 'This field is required!' }]}
                >
                    <Auth.FormInput size="large" placeholder={'Enter full name'} />
                </Auth.FormItem>

                <Auth.FormItem
                    name="phone"
                    label={'Phone'}
                    rules={[
                        { required: true, message: 'This field is required!' },
                        // () => ({
                        //     validator(_, value) {
                        //         if (!value) {
                        //             return Promise.resolve();
                        //         }

                        //         return Promise.reject(new Error('Wrong number'));
                        //     },
                        // }),
                    ]}
                >
                    <Auth.FormInput size="large" placeholder={'Enter phone'} />
                </Auth.FormItem>

                <Auth.FormItem
                    name="email"
                    label={'Email'}
                    rules={[
                        { required: true, message: 'This field is required!' },
                        {
                            type: 'email',
                            message: 'Please input a valid email address!',
                        },
                    ]}
                >
                    <Auth.FormInput size="large" placeholder={'Enter email'} />
                </Auth.FormItem>

                <Auth.FormItem
                    name="address"
                    label={'Address'}
                    rules={[{ required: true, message: 'This field is required!' }]}
                >
                    <Auth.FormInput size="large" placeholder={'Enter address'} />
                </Auth.FormItem>

                <Auth.FormItem
                    label={'Password'}
                    name="password"
                    rules={[{ required: true, message: 'This field is required!' }]}
                >
                    <Auth.FormInputPassword size="large" placeholder={'Enter password'} />
                </Auth.FormItem>

                <Auth.FormItem
                    label={'Confirm Password'}
                    name="confirmPassword"
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
                >
                    <Auth.FormInputPassword size="large" placeholder={'Enter confirm Password'} />
                </Auth.FormItem>

                <BaseForm.Item noStyle>
                    <Auth.SubmitButton size="large" type="primary" htmlType="submit">
                        {'Sign Up'}
                    </Auth.SubmitButton>
                </BaseForm.Item>

                <Auth.FooterWrapper>
                    <Auth.Text>
                        {'Already have an account? Log in'}{' '}
                        <Link to="/auth/login">
                            <Auth.LinkText>{'here'}</Auth.LinkText>
                        </Link>
                    </Auth.Text>
                </Auth.FooterWrapper>
            </BaseForm>
        </Auth.FormWrapper>
    );
};

export default RegisterPage;
