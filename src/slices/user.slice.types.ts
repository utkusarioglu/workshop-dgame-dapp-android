import type { Selector } from "@reduxjs/toolkit";
import type { RootState } from "../__store";

export type LoggedInState = {
  loggedIn: true;
  username: string;
};

type LoggedOutState = {
  loggedIn: false;
};

export type UserState = LoggedInState | LoggedOutState;

export type Login = (username: string) => void;
export type Logout = () => void;
export type SelectUserState = Selector<RootState, UserState>;
