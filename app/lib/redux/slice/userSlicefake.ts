import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface UsersStatefake {
  id: number;
  name: string;
  email: string;
  username: string;
  address: {
    city: string;
    geo: { lat: string; lng: string };
    street: string;
    suite: string;
    zipcode: string;
  };

  company: {
    bs: string;
    catchPhrase: string;
    name: string;
  };
  website: string;
}

const initialState: UsersStatefake = {
  id: 0,
  name: '',
  email: '',
  username: '',
  address: {
    city: '',
    geo: { lat: '', lng: '' },
    street: '',
    suite: '',
    zipcode: '',
  },

  company: {
    bs: '',
    catchPhrase: '',
    name: '',
  },
  website: '',
};

export const userSliceFake = createSlice({
  name: 'userfake',
  initialState,
  reducers: {
    updateFakeUser: (state, action: PayloadAction<Any>) => {
      console.log('from slice', action.payload);
    },
  },
});

export const { updateFakeUser } = userSliceFake.actions;
export default userSliceFake.reducer;
