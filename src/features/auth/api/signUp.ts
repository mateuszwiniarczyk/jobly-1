import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { axios } from '@/lib/axios';
import { useAppDispatch } from '@/hooks/useAppStore';

import { UserResponse } from '@/features/auth/types';
import { addNotification } from '@/features/notifications/notificationSlice';

export type SignUpCredentialsDTO = {
  email: string;
  name: string;
  password: string;
  type: 'Person' | 'Company';
  phoneNumber: string;
};

export const signUpWithEmailAndPassword = (data: SignUpCredentialsDTO) => {
  return axios.post<UserResponse>('/users', data);
};

export const useCreateUser = () => {
  const dispatch = useAppDispatch();

  return useMutation({
    mutationFn: signUpWithEmailAndPassword,
    onSuccess: (_result, variables, _context) => {
      dispatch(
        addNotification({
          type: 'success',
          title: `The user ${variables.name} has been created`,
        })
      );
    },
    onError: (error, _variables, _context) => {
      if (error instanceof AxiosError) {
        dispatch(
          addNotification({
            type: 'error',
            title: 'The user has not been created',
            message: error.response?.data?.error,
          })
        );
      }
    },
  });
};
