import type { Selector } from "@reduxjs/toolkit";
import type { RootState } from "../__store";

export type Schemes = "light" | "dark" | null | undefined;

export type AppState = {
  scheme: Schemes;
};

export type SelectAppState = Selector<RootState, AppState>;

export type SetScheme = (scheme: AppState["scheme"]) => void;
export type SelectScheme = Selector<RootState, AppState["scheme"]>;
export type ToggleScheme = () => void;
