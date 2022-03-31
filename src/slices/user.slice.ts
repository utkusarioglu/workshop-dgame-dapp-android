import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { dispatch } from "../__store";
import {
  UserState,
  LoggedInState,
  Login,
  Logout,
  SelectUserState,
} from "./user.slice.types";

const initialState: UserState = {
  loggedIn: false,
} as UserState;

const { actions, reducer, name } = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (_, { payload }: PayloadAction<LoggedInState["username"]>) => ({
      loggedIn: true,
      username: payload,
    }),
    logout: () =>
      ({
        loggedIn: false,
      } as UserState),
  },
});

export default reducer;

export const login: Login = (username) => dispatch(actions.login(username));
export const logout: Logout = () => dispatch(actions.logout());
export const selectUserState: SelectUserState = (state) => state[name];
