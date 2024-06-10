import CustomScrollbars from '@/components/CustomScrollbars';
import { RADIUS, SHADOW } from '@/config/theme';
import { Card } from 'antd';
import React, { ReactNode } from 'react';
import { styled } from 'styled-components';

interface ICardContentProps {
    title?: string | ReactNode;
    extra?: ReactNode;
    children: ReactNode;
    bodyStyle?: React.CSSProperties;
}

const CardContent: React.FC<ICardContentProps> = React.memo(({ title, extra, children, bodyStyle }) => {
    return (
        <CardStyled bodyStyle={{ ...bodyStyle }} title={title} extra={extra}>
            <div style={{ height: '100%' }}>
                <CustomScrollbars>{children}</CustomScrollbars>
            </div>
        </CardStyled>
    );
});

const CardStyled = styled(Card)`
    border-radius: 0px;
    margin-top: 10px;
    border-radius: ${RADIUS};
    box-shadow: ${SHADOW};
    height: 100%;
    display: flex;
    flex-direction: column;

    & .ant-card-head {
        padding: 0 12px;
    }

    & .ant-card-body {
        height: 100%;
        padding: 12px;
        overflow: hidden;
    }
`;

export default CardContent;
