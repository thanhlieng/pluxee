import { FieldTimeOutlined, InfoCircleOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';
export const itemsHaveToken = [
    {
        label: 'menu.account',
        key: 'profile',
        icon: <UserOutlined style={{ fontSize: '16px' }} />,
        children: [
            {
                label: 'menu.account_info',
                key: 'profile',
                icon: <InfoCircleOutlined style={{ fontSize: '16px', marginRight: 6 }} />,
            },
            // {
            //     label: 'menu.change_password',
            //     key: 'change-password',
            //     icon: <LockOutlined style={{ fontSize: '16px', marginRight: 6 }} />,
            // },
            // {
            //     label: 'menu.order_history',
            //     key: 'history-order',
            //     icon: <ShoppingCartOutlined style={{ fontSize: '16px', marginRight: 6 }} />,
            // },
            {
                label: 'menu.lookup_history',
                key: 'history',
                icon: <FieldTimeOutlined style={{ fontSize: '16px', marginRight: 6 }} />,
            },
            {
                label: 'menu.log_out',
                key: 'exit',
                icon: <LogoutOutlined style={{ fontSize: '16px', marginRight: 6 }} />,
            },
        ],
    },
];

export const itemsNoHaveToken = [
    {
        label: 'Đăng nhập',
        key: 'exit',
        icon: <UserOutlined style={{ fontSize: '16px', marginRight: 6 }} />,
    },
];
