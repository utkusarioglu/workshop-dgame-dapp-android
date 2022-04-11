import { DefaultTheme, DarkTheme } from "@react-navigation/native";

export const theme = (scheme: string | null | undefined) => {
  switch (scheme) {
    case "dark":
      return {
        ...DarkTheme,
        colors: {
          ...DarkTheme.colors,
          // primary: "rgb(100, 120, 250)",
          background: "rgb(10, 10, 10)",
        },
      };

    default:
      return DefaultTheme;
  }
};
