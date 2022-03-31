import { configureStore } from "@reduxjs/toolkit";
import user from "./slices/user.slice";

const store = configureStore({
  reducer: {
    user,
  },
});

export default store;
export const { dispatch, subscribe, getState } = store;
export type RootState = ReturnType<typeof store.getState>;
