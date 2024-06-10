import AxiosClient from '@/apis/AxiosClient';
export interface LoginResponse {
    token: string;
}

export interface SignInParams {
    phone: string;
    password: string;
}

export interface SignUpParams {
    fullName: string;
    email: string;
    phone: string;
    password: string;
}

export interface ConfirmOtpParams {
    transactionId: string;
    otp: string;
}

export interface UpdatePasswordParams {
    transactionId: string;

    otp: string;

    new_password: string;
}

export interface UpdateProfileParams {
    fullName: string;

    birthday: string;

    email: string;
}

export interface ChangePasswordParams {
    oldPassword: string;
    newPassword: string;
}

export interface AuthenticateAPIParams {
    userNameOrEmailAddress: string;
    password: string;
}

export const authService = {
    authenticateAPI: (body: AuthenticateAPIParams) => {
        return AxiosClient.post('/lucky_draw_api/AuthenticateAPI', body);
    },
    getOTP: () => {
        return AxiosClient.post('/lucky_draw_api/GetOtp', {
            phoneNumber: '959695555960',
        });
    },
    login: (body: SignInParams) => {
        return AxiosClient.post('/auth/login', body);
    },
    register: (body: SignUpParams) => {
        return AxiosClient.post('/auth/sign-up', body);
    },
    confirmOtp: (body: ConfirmOtpParams) => {
        return AxiosClient.post('/auth/sign-up-confirm', body);
    },
    forgotPassword: (body: { phone: string }) => {
        return AxiosClient.post('/auth/forgot-password', body);
    },
    confirmForgotPassword: (body: ConfirmOtpParams) => {
        return AxiosClient.post('/auth/forgot-password-confirm', body);
    },
    updatePassword: (body: UpdatePasswordParams) => {
        return AxiosClient.post('/auth/update-password', body);
    },
    profile: () => {
        return AxiosClient.get('/endUser/profile');
    },
    updateProfile: (body: UpdateProfileParams) => {
        return AxiosClient.put('/endUser/update-profile', body);
    },
    changePassword: (body: ChangePasswordParams) => {
        return AxiosClient.post('/endUser/change-password', body);
    },
    updateQuantityVip: (body: { quantity_vip: number }) => {
        return AxiosClient.put('/endUser/update-quantity-vip', body);
    },
};
