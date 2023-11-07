import {createSlice, isAnyOf} from '@reduxjs/toolkit';
import type {ChatProps, Messages} from './type';
import {ChatApi} from './api';
import {Alert} from 'custom_top_alert';

const initialState = {
  nextCursor: null,
  data: [],
  success: false,
  loggedInUserId: 1,
} as ChatProps;

const getChatFulfilledReducer = (state: ChatProps, action: any) => {
  try {
    const {data, nextCursor: cursor, success} = action.payload;
    state.nextCursor = cursor;

    if (success && state.nextCursor !== null && data) {
      state.data = state.data
        ? [...state.data, ...(data as [Messages])]
        : [...(data as [Messages])];
    }
  } catch (error: any) {
    Alert.showError(error?.message || error);
  }
};

export const ChatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(
      isAnyOf(ChatApi.endpoints.getChats.matchFulfilled),
      getChatFulfilledReducer,
    );
  },
});

export default ChatSlice.reducer;
