import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Chat,
  Chats,
  Intro,
  Welcome,
  Status,
  Calls,
  Calling,
  CallInfo,
} from "../screens";
import BottomTabNavigation from "./BottomTabNavigation";
import Settings from "../screens/Settings";

const Stack = createNativeStackNavigator();

const AppNavigations = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Intro"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Chats" component={Chats} />
        <Stack.Screen name="Status" component={Status} />
        <Stack.Screen name="Calls" component={Calls} />
        <Stack.Screen name="Calling" component={Calling} />
        <Stack.Screen name="CallInfo" component={CallInfo} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Main" component={BottomTabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigations;
