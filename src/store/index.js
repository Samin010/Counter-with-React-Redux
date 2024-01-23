// import { createStore } from "redux";

// const INITIAL_VALUE = {
//   counter: 0,
//   privacy: false,
// };

// const counterReducer = (store = INITIAL_VALUE, action) => {
//   if (action.type === "INCR") {
//     return { ...store, counter: store.counter + 1 };
//   } else if (action.type === "DCR") {
//     return { ...store, counter: store.counter - 1 };
//   } else if (action.type === "ADD") {
//     return {
//       ...store,
//       counter: store.counter + Number(action.payload.num),
//     };
//   } else if (action.type === "SUB") {
//     return {
//       ...store,
//       counter: store.counter - Number(action.payload.num),
//     };
//   } else if (action.type === "PRIVACY_TOGGLE") {
//     return {
//       ...store,
//       privacy: !store.privacy,
//     };
//   }
//   return store;
// };

// const counterStore = createStore(counterReducer);

// export default counterStore;

import { configureStore, createSlice } from "@reduxjs/toolkit";
import counterSLice from "./counter";
import privacySlice from "./privacy";




const counterStore = configureStore({
  reducer: { counter: counterSLice.reducer, privacy: privacySlice.reducer },
});
export default counterStore;
