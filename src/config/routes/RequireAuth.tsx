import React from 'react';
import { Navigate } from 'react-router-dom';

import { WithChildrenProps } from '@/types/generalTypes';
import LocalStorage from '@/apis/LocalStorage';

const RequireAuth: React.FC<WithChildrenProps> = ({ children }) => {
    const token = LocalStorage.getToken();

    return token ? <>{children}</> : <Navigate to="/auth/login" replace />;
};

export default RequireAuth;
