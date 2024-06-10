import Lazy from '@/config/routes/Lazy.routes';
import MainLayout from '@/layout';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HistoryLuckyWheel from './App/historyLuckyWheel/index.js';
import LuckyWheelPage from './App/lucky-wheel/page/index.jsx';
import Profile from './App/profile/page';
import ForgotPassword from './Auth/ForgotPassword/page';
import LoginPage from './Auth/Login/pages';
import { NewPasswordForm } from './Auth/NewPassword';
import RegisterPage from './Auth/Register/pages';
import SecurityCode from './Auth/SecurityCode/pages';
const AuthLayoutFallback = React.lazy(() => import('@/layout/AuthLayout/AuthLayout'));

export const AppRouter: React.FC = () => {
    const protectedLayout = (
        // <RequireAuth>
        <MainLayout />
        // </RequireAuth>
    );

    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={protectedLayout}>
                    <Route path="/" element={<LuckyWheelPage />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/history" element={<HistoryLuckyWheel />} />
                </Route>
                <Route
                    path="/auth"
                    element={
                        <Lazy>
                            <AuthLayoutFallback />
                        </Lazy>
                    }
                >
                    <Route path="login" element={<LoginPage />} />
                    <Route path="register" element={<RegisterPage />} />
                    <Route path="forgot-password" element={<ForgotPassword />} />
                    <Route path="code" element={<SecurityCode />} />
                    <Route path="new-password" element={<NewPasswordForm />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
