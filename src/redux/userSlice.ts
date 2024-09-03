import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { baseURL } from '@/data/constants';
import { UserState } from '@/interfaces/user.interfaces';
import { getAccessToken } from '@/utils/supportFunctions';

const initialState: UserState = {
  isAuthorized: false,
  isLoggingIn: false,
  isLoading: false,
  isFirstLoad: true,
  userInfo: {
    usedCompanyCount: 0,
    companyLimit: 0,
  },
  loginServerError: '',
};

export const loginUser = createAsyncThunk(
  'user/login',
  async (data: { login: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await fetch(`${baseURL}/api/v1/account/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const serverError = await response.json();
        return rejectWithValue(serverError.message);
      }

      const result = await response.json();
      return result;
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue('Произошла неизвестная ошибка');
      }
    }
  }
);

export const getUserInfo = createAsyncThunk('user/getUserInfo', async (_, { rejectWithValue }) => {
  try {
    const accessToken = getAccessToken();
    if (accessToken === null) {
      return rejectWithValue('Нет токена');
    }

    const response = await fetch(`${baseURL}/api/v1/account/info`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      const serverError = await response.json();
      return rejectWithValue(serverError.message);
    }

    const result = await response.json();
    return result;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    } else {
      return rejectWithValue('Произошла неизвестная ошибка');
    }
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthorized: (state, action) => {
      state.isAuthorized = action.payload;
    },
    logout: (state) => {
      localStorage.removeItem('tokenData');
      state.isAuthorized = false;
      state.userInfo = {
        usedCompanyCount: 0,
        companyLimit: 0,
      };
    },
    checkUserAuthorization: (state) => {
      const tokenData = localStorage.getItem('tokenData');
      if (tokenData) {
        const { accessToken, expire } = JSON.parse(tokenData);
        const expireDate = new Date(expire);
        if (accessToken && expireDate > new Date()) {
          state.isAuthorized = true;
        } else {
          state.isAuthorized = false;
        }
      } else {
        state.isAuthorized = false;
      }
      state.isFirstLoad = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        localStorage.setItem('tokenData', JSON.stringify(action.payload));
        state.isAuthorized = true;
        state.loginServerError = '';
        state.isLoggingIn = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loginServerError = action.payload as string;
        state.isLoggingIn = false;
      })
      .addCase(loginUser.pending, (state) => {
        state.loginServerError = '';
        state.isLoggingIn = true;
      })
      .addCase(getUserInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userInfo = action.payload.eventFiltersInfo;
      })
      .addCase(getUserInfo.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getUserInfo.pending, (state) => {
        state.isLoading = true;
      });
  },
});

export const { setAuthorized, checkUserAuthorization, logout } = userSlice.actions;
export default userSlice.reducer;
