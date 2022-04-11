import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AppearanceSettingsScreen from "src/screens/AppearanceSettings.screen";
import NotificationSettingsScreen from "src/screens/NotificationSettings.screen";
import SystemSettingsScreen from "src/screens/SystemSettings.screen";

const Tab = createMaterialTopTabNavigator();

const SettingsNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Appearance" component={AppearanceSettingsScreen} />
      <Tab.Screen name="Notifications" component={NotificationSettingsScreen} />
      <Tab.Screen name="System" component={SystemSettingsScreen} />
    </Tab.Navigator>
  );
};

export default SettingsNavigator;
