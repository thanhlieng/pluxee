import LocalStorage from '@/apis/LocalStorage';
import IconAntd from '@/components/IconAntd';
import { Avatar, Dropdown, MenuProps, Space } from 'antd';
import React from 'react';

const UserHeader = React.memo(() => {
    const itemsDropdown: MenuProps['items'] = React.useMemo(() => {
        return [
            {
                key: '1',
                label: <strong>Đăng xuất</strong>,
                icon: <IconAntd style={{ marginRight: '10px' }} size="16px" icon="LogoutOutlined" />,
                onClick: () => {
                    LocalStorage.removeToken();
                    window.location.reload();
                },
            },
        ];
    }, []);

    return (
        <Dropdown placement="bottomCenter" arrow={{ pointAtCenter: true }} menu={{ items: itemsDropdown }}>
            <Space style={{ cursor: 'pointer' }}>
                <Avatar
                    style={{ backgroundColor: '#f5f5f5' }}
                    src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=3"
                    size={35}
                />
                <div>Tên admin</div>
            </Space>
        </Dropdown>
    );
});

export default UserHeader;
