import { createSlice } from '@reduxjs/toolkit';

const initialCurrentSetState = {
  shirt: {},
  pants: {},
  shoes: {},
  key: null,
  startTime: 0,
  currentType: '',
  currentPage: '',
  colorCheckboxes: [],
  sizeCheckboxes: [],
  filterStates: {},
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
    setStartTime(state, action) {
      state.startTime = action.payload;
    },
    setCurrentType(state, action) {
      state.currentType = action.payload;
    },
    resetCurrentType(state) {
      state.currentType = '';
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    initializeFilters(state, action) {
      action.payload.forEach((element) => {
        state.filterStates[element] = false;
      });
    },
    toggleFilters(state, action) {
      state.filterStates[action.payload] = !state.filterStates[action.payload];
    },

    setSizeCheckBoxes(state, action) {
      state.sizeCheckboxes = [...action.payload];
    },
    setColorCheckBoxes(state, action) {
      state.colorCheckboxes = [...action.payload];
    },

    reset(state) {
      state.shirt = {};
      state.pants = {};
      state.shoes = {};
      state.key = null;
      state.startTime = 0;
      state.currentType = '';
      state.filterStates = {};
      state.colorCheckboxes = [];
      state.sizeCheckboxes = [];
    },
  },
});

export const currentSetActions = currentSetSlice.actions;

export default currentSetSlice.reducer;
