import IconAntd from '@/components/IconAntd';
import { Button, Space } from 'antd';
import React, { ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import NotificationHeader from './Notification.Header';
import UserHeader from './User.Header';
import { HeaderContainerStyled, HeaderTitleStyled } from './style';

interface IHeaderProps {
    title: any;
    extra?: ReactNode;
    style?: React.CSSProperties;
    back?: boolean;
    onBack?: () => void;
}

const HeaderComponent: React.FC<IHeaderProps> = React.memo(({ title, back, onBack }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const onHandleBack = React.useCallback(() => {
        if (onBack) return onBack();

        navigate(location?.state?.prevUrl || -1, { state: location.state });
    }, [location?.state]);

    return (
        <HeaderContainerStyled>
            {/* left */}
            <Space align="center">
                {back && (
                    <Button onClick={onHandleBack} shape="circle" ghost>
                        <IconAntd size="16px" icon="ArrowLeftOutlined" />
                    </Button>
                )}
                <HeaderTitleStyled>{title}</HeaderTitleStyled>
            </Space>

            {/* right */}
            <Space size="large" align="center">
                <Space style={{ cursor: 'pointer' }}>
                    {/* notification */}
                    <NotificationHeader />
                </Space>
                {/* user */}
                <UserHeader />
            </Space>
        </HeaderContainerStyled>
    );
});

export default HeaderComponent;
