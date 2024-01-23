import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface UsersState {
  id: number;
  firstName: string;
  lastName: string;
}

const initialState: UsersState = {
  id: 0,
  firstName: 'Talal',
  lastName: 'Mahmud',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (
      state,
      action: PayloadAction<{
        userId: number;
        firstName: string;
        lastName: string;
      }>,
    ) => {
      const { userId, firstName, lastName } = action.payload;

      state.id = userId;
      state.firstName = firstName;
      state.lastName = lastName;
    },
  },
});

export const { updateUser } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter;

export default userSlice.reducer;
