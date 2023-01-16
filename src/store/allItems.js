import { createSlice } from '@reduxjs/toolkit';

const initialAllItemsState = [];

const allItemsSlice = createSlice({
  name: 'allItems',
  initialState: initialAllItemsState,
  reducers: {
    setItems(state, action) {
      /* state = action.payload;
      action.payload.map((item) => {
        return { ...item };
      }); */
      action.payload.forEach((element) => {
        state.push(element);
      });
    },
    addItem(state, action) {
      state.push(action.payload);
    },
  },
});

export const allItemsActions = allItemsSlice.actions;

export default allItemsSlice.reducer;
