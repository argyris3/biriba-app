import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  value1: [{ id: 1, number: 0 }],
};

export const input1Slice = createSlice({
  name: 'values1',
  initialState,
  reducers: {
    addValue1: (state, action) => {
      const addValue1 = {
        id: nanoid(),
        number: action.payload,
      };
      state.value1.push(addValue1);
    },
  },
});

export const { addValue1 } = input1Slice.actions;

export default input1Slice.reducer;
