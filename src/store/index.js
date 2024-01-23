
import { configureStore, createSlice } from "@reduxjs/toolkit";
import counterSLice from "./counter";
import privacySlice from "./privacy";




const counterStore = configureStore({
  reducer: { counter: counterSLice.reducer, privacy: privacySlice.reducer },
});
export default counterStore;
