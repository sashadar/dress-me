import { createSlice } from '@reduxjs/toolkit';

const savedSetsSlice = createSlice({
  name: 'savedSets',
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    loadSets(state, action) {
      action.payload.forEach((set) => {
        state.push(set);
      });
    },

    remove(state, action) {
      state.splice(
        state.findIndex((set) => set.key === action.payload),
        1
      );
    },
  },
});

export const savedSetsActions = savedSetsSlice.actions;

export default savedSetsSlice.reducer;
