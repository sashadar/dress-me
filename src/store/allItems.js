import { createSlice } from '@reduxjs/toolkit';

const initialAllItemsState = [];

const allItemsSlice = createSlice({
  name: 'allItems',
  initialState: initialAllItemsState,
  reducers: {
    setItems(state, action) {
      return [...action.payload];
    },
    addItem(state, action) {
      state.push(action.payload);
    },

    removeItem(state, action) {
      state.splice(
        state.findIndex((item) => item.id === action.payload),
        1
      );
    },
  },
});

export const allItemsActions = allItemsSlice.actions;

export default allItemsSlice.reducer;
