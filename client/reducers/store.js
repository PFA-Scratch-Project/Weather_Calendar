import { configureStore } from '@reduxjs/toolkit';
// import weatherSliceReducer from './weatherSlice.js';
import taskReducer from './taskSlice.js';
import { setupListeners } from '@reduxjs/toolkit/query';
//import { taskApi } from './taskSlice.js';

// configureStore requires a reducer argument
const store = configureStore({ 
  reducer: {
    task: taskReducer,
    //[taskApi.reducerPath]: taskApi.reducer
  }
});
setupListeners(store.dispatch);

export default store;