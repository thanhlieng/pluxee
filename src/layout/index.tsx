import ErrorBoundary from '@/features/Error/ErrorBoundary';
import { Layout } from 'antd';
import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from './SideBar';

const MainLayout: React.FC = () => {
    return (
        <Layout>
            <Header />
            <ErrorBoundary>
                <LayoutContent>
                    <Outlet />
                </LayoutContent>
            </ErrorBoundary>
        </Layout>
    );
};

const LayoutContent = styled(Layout.Content)`
    overflow-x: hidden;
    flex: 1;
    &::-webkit-scrollbar {
        width: 0px;
    }
`;

export default MainLayout;
