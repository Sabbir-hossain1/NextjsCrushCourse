import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './slice/counterSlice';
import userSlice from './slice/userSlice';
import userSliceFake from './slice/userSlice';
import { postApi } from '@/app/api/services/postApi';

import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    user: userSlice,
    userfake: userSliceFake,
    [postApi.reducerPath]: postApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
