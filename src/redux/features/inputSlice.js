import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  value: [{ id: 1, number: 0 }],
};

export const inputSlice = createSlice({
  name: 'values',
  initialState,
  reducers: {
    addValue: (state, action) => {
      const addValue = {
        id: nanoid(),
        number: action.payload,
      };
      state.value.push(addValue);
    },
  },
});

export const { addValue } = inputSlice.actions;

export default inputSlice.reducer;
