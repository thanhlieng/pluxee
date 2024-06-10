import LocalStorage from '@/apis/LocalStorage';
import { Menu, Row } from 'antd';
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { itemsHaveToken, itemsNoHaveToken } from './Sidebar.Menu';
import { useQuery, useQueryClient } from '@tanstack/react-query';

const MenuContent = React.memo(({ isInline = false }: { isInline: boolean }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const { t } = useTranslation();
    const queryClient = useQueryClient();
    const selectedKeys = location.pathname.substr(1);
    const defaultOpenKeys = selectedKeys.split('/')[1];

    const { data: token } = useQuery({
        queryKey: ['token-user'],
        queryFn: async () => {
            return await LocalStorage.getTokenUser();
        },
    });

    const items = useMemo(() => {
        if (token) {
            return itemsHaveToken;
        } else {
            return itemsNoHaveToken;
        }
    }, [token]);

    return (
        <>
            {isInline ? (
                <Menu
                    theme="dark"
                    mode={'inline'}
                    defaultOpenKeys={[defaultOpenKeys]}
                    selectedKeys={[selectedKeys]}
                    onClick={(e) => {
                        if (e.key === 'exit') {
                            LocalStorage.removeTokenUser();
                            queryClient.setQueryData(['token-user'], () => {
                                return '';
                            });
                            navigate('/auth/login');
                        } else {
                            navigate('/' + e.key);
                        }
                    }}
                >
                    {items?.map((nav: any) =>
                        nav?.children && nav?.children.length > 0 ? (
                            <Menu.SubMenu
                                level={1}
                                key={nav.key}
                                title={t(nav.label)}
                                icon={nav.icon}
                                onTitleClick={() => {}}
                                popupClassName="d-none"
                            >
                                {nav.children.map((childNav: any) => (
                                    <Menu.Item key={childNav.key} title="">
                                        <Row>
                                            {childNav?.icon}
                                            <div style={{ fontSize: '15px' }}> {t(childNav?.label)}</div>
                                        </Row>
                                    </Menu.Item>
                                ))}
                            </Menu.SubMenu>
                        ) : (
                            <Menu.Item key={nav?.key}>
                                <Row>
                                    {nav?.icon}
                                    <div style={{ fontSize: '15px' }}> {t(nav?.label)}</div>
                                </Row>
                            </Menu.Item>
                        )
                    )}
                </Menu>
            ) : (
                <Menu
                    style={{ minWidth: 150 }}
                    theme="dark"
                    defaultOpenKeys={[defaultOpenKeys]}
                    selectedKeys={[selectedKeys]}
                    mode={isInline ? 'inline' : 'horizontal'}
                    onClick={async (e) => {
                        if (e.key === 'exit') {
                            await LocalStorage.removeTokenUser();
                            //refetch();
                            queryClient.setQueryData(['token-user'], () => {
                                return '';
                            });
                            navigate('/auth/login');
                        } else {
                            navigate('/' + e.key);
                        }
                    }}
                >
                    {items?.map((nav: any) =>
                        nav?.children && nav?.children.length > 0 ? (
                            <Menu.SubMenu
                                level={1}
                                key={nav.key}
                                title={t(nav.label)}
                                icon={nav.icon}
                                style={{ backgroundColor: '#001529', fontWeight: '600' }}
                                onTitleClick={() => {}}
                                popupClassName="d-none"
                            >
                                {nav.children.map((childNav: any) => (
                                    <Menu.Item style={{ backgroundColor: '#001529' }} key={childNav.key} title="">
                                        <Row>
                                            {childNav?.icon}
                                            <div style={{ fontSize: '15px' }}> {t(childNav?.label)}</div>
                                        </Row>
                                    </Menu.Item>
                                ))}
                            </Menu.SubMenu>
                        ) : (
                            <Menu.Item style={{ backgroundColor: '#001529', fontWeight: '600' }} key={nav?.key}>
                                <Row>
                                    {nav?.icon}
                                    <div style={{ fontSize: '15px' }}> {t(nav?.label)}</div>
                                </Row>
                            </Menu.Item>
                        )
                    )}
                </Menu>
            )}
        </>
    );
});

export default MenuContent;
