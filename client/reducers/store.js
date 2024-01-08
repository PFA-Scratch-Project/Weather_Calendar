import { configureStore } from '@reduxjs/toolkit';
// import weatherSliceReducer from './weatherSlice.js';
import taskReducer from './taskSlice.js';

// configureStore requires a reducer argument
export default configureStore({ 
  reducer: {
    task: taskReducer,
  }
});