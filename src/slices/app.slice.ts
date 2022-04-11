import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { dispatch } from "../__store";
import {
  AppState,
  SelectAppState,
  SetScheme,
  SelectScheme,
  ToggleScheme,
  Schemes,
} from "./app.slice.types";
import { colorSchemeHook } from "../App";

const initialState: AppState = {
  scheme: colorSchemeHook(),
} as AppState;

const { actions, reducer, name } = createSlice({
  name: "app",
  initialState,
  reducers: {
    setScheme: (state, { payload }: PayloadAction<AppState["scheme"]>) => {
      console.log("slice payload", payload);
      return {
        ...state,
        scheme: payload ?? "light",
      };
    },
    toggleScheme: (state) => ({
      ...state,
      scheme: state.scheme !== "light" ? "light" : "dark",
    }),
  },
});

export default reducer;

export const setScheme: SetScheme = (scheme) =>
  dispatch(actions.setScheme(scheme));
export const selectAppState: SelectAppState = (state) => state[name];
export const selectScheme: SelectScheme = (state) => state[name].scheme;
export const toggleScheme: ToggleScheme = () =>
  dispatch(actions.toggleScheme());
