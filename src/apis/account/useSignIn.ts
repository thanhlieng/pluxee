import { useMutation, useQueryClient } from '@tanstack/react-query';
import { message } from 'antd';
import type { AxiosResponse } from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import LocalStorage from '../LocalStorage';
import { ServerFormError } from '../types';
import { authService } from './auth.api';
import useGetProfile from './useGetProfile';

export interface SignInParams {
  phone: string;
  password: string;
}

export interface SignInResponse {
  refresh: string;
  accessToken: string;
}

function useSignIn() {
  const queryClient = useQueryClient();
  const navigate = useNavigate()
  const location = useLocation();
  const { refetch } = useGetProfile()
  return useMutation<AxiosResponse<SignInResponse>, ServerFormError, SignInParams>({
    mutationFn: (body) => {
      return authService.login(body);
    },
    onSuccess(data) {
      console.log(data);
      LocalStorage.setToken(data.data.accessToken)
      queryClient.setQueryData(['token'], () => {
        return data.data.accessToken;
      });
      message.success('Log In successful!');
      refetch()
      navigate(location?.state?.prevUrl ? location?.state?.prevUrl : '/')
      return

    },
    onError(error) {
      console.log(error);
      message.error(error?.toString());
    },
  });
}

export default useSignIn;
