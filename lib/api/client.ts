import axios, {
  AxiosError,
  InternalAxiosRequestConfig,
} from 'axios';
import { getRefreshToken,getAccessToken, setTokens, logout } from '../store';
import { API_BASE_URL, API_TIMEOUT_MS } from './config';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: API_TIMEOUT_MS,
  headers: {
    'Content-Type': 'application/json',
  },
});

let refreshPromise: Promise<string> | null = null;

async function refreshAccessToken() {
  const refreshToken = getRefreshToken();

  if (!refreshToken) {
    throw new Error('No refresh token');
  }

  const { data } = await axios.post(
    `${API_BASE_URL}/auth/refresh`,
    { refreshToken },
  );

  setTokens(data);

  return data.accessToken;
}

apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = getAccessToken();
      
    if (token) {
      config.headers.set(
        'Authorization',
        `Bearer ${token}`,
      );
    }

    return config;
  },
);

apiClient.interceptors.response.use(
  response => response,
  async (error: AxiosError) => {
    const original = error.config as
      | (InternalAxiosRequestConfig & {
          _retry?: boolean;
        })
      | undefined;

    if (
      error.response?.status !== 401 ||
      !original ||
      original._retry
    ) {
      return Promise.reject(error);
    }

    original._retry = true;

    try {
      refreshPromise ??=
        refreshAccessToken();

      const token =
        await refreshPromise;

      original.headers.set(
        'Authorization',
        `Bearer ${token}`,
      );

      return apiClient(original);
    } catch (e) {
      logout();
      return Promise.reject(e);
    } finally {
      refreshPromise = null;
    }
  },
);