import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
//import { fetchCount } from './counter/counterAPI';



export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: { uid:"", photoUrl:"", displayName:""},
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = {uid:"", photoUrl:"", displayName:""};
    },
  },
});

export const { login, logout } = userSlice.actions;

// userのstateを返す関数 store.ts内のreducerの識別名と紐付ける必要あり
export const selectUser = (state: RootState) => state.user.user;

export default userSlice.reducer;
