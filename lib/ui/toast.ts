import Toast from 'react-native-toast-message';

import { Colors } from './theme/colors';

interface ToastOptions {
  title: string;
  message?: string;
}

export const showSuccessToast = ({ title, message }: ToastOptions) =>
  Toast.show({
    type: 'success',
    text1: title,
    text2: message,
    position: 'bottom',
    bottomOffset: 80,
  });

export const showErrorToast = ({ title, message }: ToastOptions) =>
  Toast.show({
    type: 'error',
    text1: title,
    text2: message,
    position: 'bottom',
    bottomOffset: 80,
  });

export const hideToast = () => Toast.hide();

export const toastAccent = Colors.primary[600];
