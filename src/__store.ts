import { configureStore } from "@reduxjs/toolkit";
import app from "./slices/app.slice";
import user from "./slices/user.slice";

const store = configureStore({
  reducer: {
    app,
    user,
  },
});

export default store;
export const { dispatch, subscribe, getState } = store;
export type RootState = ReturnType<typeof store.getState>;
