import React, { useRef, useState, useEffect } from "react";
import { AppState } from "react-native";
import notificationService from "./notification.service";

export function useAppIsVisible() {
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  useEffect(() => {
    const subscription = AppState.addEventListener("change", (nextAppState) => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === "active"
      ) {
        // console.log("App has come to the foreground!");
      } else {
        notificationService.createAppInactiveNotification();
      }

      appState.current = nextAppState;
      setAppStateVisible(appState.current);
      // console.log("AppState", appState.current);
    });

    return () => {
      subscription.remove();
    };
  }, []);
  return appStateVisible;
}
