// import { ConfigureStore, configureStore } from "@reduxjs/toolkit";
// import userReducer from '../reducer/reducers'
// import { initializeUseSelector } from "react-redux/es/hooks/useSelector";

// export default configureStore({
//     reducer:{
//         user :userReducer,
//     },

// });

// store.js
// import { configureStore } from '@reduxjs/toolkit';
// import userReducer from '../reducer/reducers';

// const store = configureStore({
//   reducer: {
//     user: userReducer,
//   },
// });

// export default store;

import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../reducer/authReducer';
import userReducer from '../reducer/reducers';

const rootReducer = {
  auth: authReducer,
  user: userReducer,
};

const store = configureStore({
  reducer: rootReducer,
  // You can add additional middleware or enhancers here if needed
});

export default store;



