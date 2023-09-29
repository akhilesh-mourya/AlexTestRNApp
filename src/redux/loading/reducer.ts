import {
  createSlice,
  isAnyOf,
  isFulfilled,
  isPending,
  isRejected,
} from '@reduxjs/toolkit';
import {Alert} from 'custom_top_alert';
import {LoadingProps} from './type';

const initialState = {
  isLoading: false,
} as LoadingProps;

let apiCallCount = 0;

export const handleLoading = (state: any, action: any) => {
  try {
    if (apiCallCount === 0) {
      state.isLoading = false;
    }
    if (action?.payload?.status === 401) {
      apiCallCount = 0;
      state.isLoading = false;
      return;
    }
    const hideLoader =
      action?.meta?.arg?.endpointName === 'createChatMessage' || false;
    if (action?.type?.endsWith('/pending')) {
      state.isLoading = !hideLoader;
      ++apiCallCount;
    } else if (
      action?.type?.endsWith('/fulfilled') ||
      action?.type?.endsWith('/rejected')
    ) {
      --apiCallCount;
    }
    if (apiCallCount === 0) {
      state.isLoading = false;
    }
  } catch (error: any) {
    Alert.showError(error?.message || error);
    state.isLoading = false;
  }
};

const LoadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    show: state => {
      state.isLoading = true;
    },
    hide: state => {
      state.isLoading = false;
    },
  },
  extraReducers: builder => {
    return builder.addMatcher(
      isAnyOf(isPending, isFulfilled, isRejected),
      handleLoading,
    );
  },
});

export const {show, hide} = LoadingSlice.actions;
export default LoadingSlice.reducer;
