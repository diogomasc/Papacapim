import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "../screens/Welcome";
import SignIn from "../screens/SignIn";
import Register from "../screens/Register";
import DrawerRoutes from "./drawer.routes";
// import TabRoutes from "./tab.routes";

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="PrivateRoutes" component={DrawerRoutes} />
      {/* <Stack.Screen name="App" component={TabRoutes} /> */}
    </Stack.Navigator>
  );
}
