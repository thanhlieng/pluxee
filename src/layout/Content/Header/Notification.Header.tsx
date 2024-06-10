import IconAntd from '@/components/IconAntd';
import { Avatar, Badge, Button, Dropdown, Space, theme } from 'antd';
import React from 'react';

const NotificationHeader = React.memo(() => {
    const { token } = theme.useToken();

    const contentStyle = {
        backgroundColor: token.colorBgElevated,
        borderRadius: token.borderRadiusLG,
        boxShadow: token.boxShadowSecondary,
    };

    return (
        <Dropdown
            arrow={{ pointAtCenter: true }}
            placement="bottomCenter"
            dropdownRender={() => (
                <div style={contentStyle}>
                    <Space style={{ padding: 8 }}>
                        <Button type="primary">Click me!</Button>
                    </Space>
                </div>
            )}
        >
            <Badge count={1}>
                <Avatar style={{ backgroundColor: '#e9e9e9' }} shape="square" icon={<IconAntd icon="BellOutlined" />} />
            </Badge>
        </Dropdown>
    );
});

export default NotificationHeader;
