import { configureStore } from '@reduxjs/toolkit';

import savedSetsReducer from './savedSets';
import currentSetReducer from './currentSet';
import allItemsReducer from './allItems';

const store = configureStore({
  reducer: {
    savedSets: savedSetsReducer,
    currentSet: currentSetReducer,
    allItems: allItemsReducer,
  },
});

export default store;
