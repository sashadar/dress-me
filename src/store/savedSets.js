import { createSlice } from '@reduxjs/toolkit';

const savedSetsSlice = createSlice({
  name: 'savedSets',
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },

    remove(state, action) {
      state = state.filter((set) => set.key !== action.payload.key);
    },
  },
});

export const savedSetsActions = savedSetsSlice.actions;

export default savedSetsSlice.reducer;
