import * as Auth from '@/layout/AuthLayout/AuthLayout.styles';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { BaseForm } from '../common/forms/BaseForm/BaseForm';
import * as S from './OTPForm.styles';
import { useLocation, useNavigate } from 'react-router-dom';
import LocalStorage from '@/apis/LocalStorage';
import Countdown, { CountdownRenderProps } from 'react-countdown';
import { Row, Image } from 'antd';
import { VerificationCodeInput } from '../VerificationCodeInput/VerificationCodeInput';
import VerifyEmailImage from '@/assets/images/verify-email.webp';
import { useQueryClient } from '@tanstack/react-query';
import AxiosClient from '@/apis/AxiosClient';
interface OTPFormProps {
    onBack?: () => void;
    onFinish?: () => void;
}
const OTPForm: React.FC<OTPFormProps> = ({ onBack, onFinish }) => {
    const [key] = useState(1);
    const [isSentOtp, setIsSentOtp] = useState(false);
    const { state } = useLocation();
    const { otp } = state;
    console.log('otp', otp);

    const navigate = useNavigate();
    const navigateBack = useCallback(() => navigate(-1), [navigate]);
    const [securityCode, setSecurityCode] = useState('' + otp);
    const queryClient = useQueryClient();

    const getAccessToken = async () => {
        const res = await AxiosClient.post('/lucky_draw_api/Login', {
            userNameOrPhone: '959695555960',
            password: '' + otp,
        });
        const resInfo = await AxiosClient.post(
            '/lucky_draw_api/GetUserInfo',
            {},
            { headers: { Authorization: res?.result.accessToken } }
        );

        queryClient.setQueryData(['token-user'], () => {
            return res?.result.accessToken;
        });

        console.log(res);
        console.log(resInfo);

        LocalStorage.setTokenUser(res?.result.accessToken);
    };

    useEffect(() => {
        if (securityCode.length === 6) {
            getAccessToken();
            setTimeout(() => {
                onFinish && onFinish();
            }, 3000);
        }
    }, [securityCode, onFinish]);

    const time = useMemo(() => {
        return Date.now() + 60000;
    }, [isSentOtp, key]);

    const renderer = ({ minutes, seconds, completed }: CountdownRenderProps) => {
        return (
            <>
                {completed ? (
                    <></>
                ) : (
                    <div style={{ fontWeight: 'bold', color: '#e00025', marginLeft: 5 }}>
                        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                    </div>
                )}
            </>
        );
    };

    const onClick = () => {
        if (!isSentOtp) {
            setIsSentOtp(true);
        }
    };
    return (
        <BaseForm layout="vertical" requiredMark="optional">
            <Auth.BackWrapper onClick={onBack || navigateBack}>
                <Auth.BackIcon />
                {'Back'}
            </Auth.BackWrapper>
            <S.ContentWrapper>
                <S.ImageWrapper>
                    <Image src={VerifyEmailImage} alt="Not found" preview={false} />
                </S.ImageWrapper>
                <Auth.FormTitle>{'Check your phone '}</Auth.FormTitle>
                <S.VerifyEmailDescription>{'we have sent a verification code to your phone'}</S.VerifyEmailDescription>
                <VerificationCodeInput autoFocus onChange={setSecurityCode} value={securityCode} />
                <Row style={{ alignItems: 'center', marginTop: '1rem' }}>
                    <S.NoCodeText onClick={onClick}>{`Didn't get a verification code?`}</S.NoCodeText>

                    {/* {isSentOtp && (
                        <Countdown
                            onComplete={() => {
                                setIsSentOtp(false);
                            }}
                            key={1}
                            autoStart={isSentOtp}
                            date={time}
                            renderer={renderer}
                        />
                    )} */}
                </Row>
            </S.ContentWrapper>
        </BaseForm>
    );
};

export default OTPForm;
