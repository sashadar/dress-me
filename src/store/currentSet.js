import { createSlice } from '@reduxjs/toolkit';

const initialCurrentSetState = {
  shirt: {},
  pants: {},
  shoes: {},
  key: null,
  currentType: '',
};

const currentSetSlice = createSlice({
  name: 'currentSlice',
  initialState: initialCurrentSetState,
  reducers: {
    addShirt(state, action) {
      state.shirt = Object.assign({}, action.payload);
    },
    addPants(state, action) {
      state.pants = Object.assign({}, action.payload);
    },
    addShoes(state, action) {
      state.shoes = Object.assign({}, action.payload);
    },
    addKey(state, action) {
      state.key = action.payload;
    },
    setCurrentType(state, action) {
      state.currentType = action.payload;
    },
    reset(state) {
      state.shirt = {};
      state.pants = {};
      state.shoes = {};
      state.key = null;
      state.currentType = '';
    },
  },
});

export const currentSetActions = currentSetSlice.actions;

export default currentSetSlice.reducer;
