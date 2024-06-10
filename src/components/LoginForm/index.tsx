import { BaseForm } from '../common/forms/BaseForm/BaseForm';
import * as Auth from '@/layout/AuthLayout/AuthLayout.styles';
import * as S from './LoginForm.styles';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
const LoginForm = ({ handleSubmit }: { handleSubmit: ((values: any) => void) | undefined }) => {
    const { t } = useTranslation();
    const initValues = {
        password: '',
        confirmPassword: '',
    };
    return (
        <BaseForm layout="vertical" onFinish={handleSubmit} requiredMark="optional" initialValues={initValues}>
            <Auth.FormTitle>{t('login.login')}</Auth.FormTitle>
            <S.LoginDescription>{t('login.loginInfo')}</S.LoginDescription>
            <Auth.FormItem
                name="phone"
                label={t('login.phone')}
                rules={[{ required: true, message: t('login.requiredField') }]}
            >
                <Auth.FormInput size="large" placeholder={t('login.enter_phone')} />
            </Auth.FormItem>
            {/* <Auth.FormItem
            name="password"
            label={t('login.password')}
            rules={[{ required: true, message: t('login.requiredField') }]}
        >
            <Auth.FormInputPassword size="large" placeholder={t('login.enter_password')} />
        </Auth.FormItem> */}

            {/* <Link to="/auth/code">
            <Auth.LinkText>{'Do you want to login by get otp to your phone ?'}</Auth.LinkText>
        </Link> */}

            <BaseForm.Item noStyle>
                <Auth.SubmitButton size="large" type="primary" htmlType="submit">
                    {t('login.login')}
                </Auth.SubmitButton>
            </BaseForm.Item>
            {/* <Auth.FooterWrapper>
                <Auth.Text>
                    {`Don't have an account? Create one`}{' '}
                    <Link to="/auth/register">
                        <Auth.LinkText>{'here'}</Auth.LinkText>
                    </Link>
                </Auth.Text>
            </Auth.FooterWrapper> */}
        </BaseForm>
    );
};

export default LoginForm;
