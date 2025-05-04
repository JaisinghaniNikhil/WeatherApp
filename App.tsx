import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";
import Home from "./Screens/Home";
import Weather from "./Screens/Weather";



const Stack = createNativeStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Weather" component={Weather}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}