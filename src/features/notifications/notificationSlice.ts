import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export interface Notification {
  id: string;
  type: 'info' | 'warning' | 'success' | 'error';
  title: string;
  message?: string;
}

type NotificationsStore = Notification[];

const initialState: NotificationsStore = [];

export const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addNotification: (
      state,
      {
        payload: { title, message, type },
      }: PayloadAction<Omit<Notification, 'id'>>
    ) => {
      state.push({
        id: nanoid(),
        type,
        title,
        message,
      });
    },
  },
});

// Action creators are generated for each case reducer function

export const {
  actions: { addNotification },
  reducer: notificationsReducer,
} = notificationsSlice;
