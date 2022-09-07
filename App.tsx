import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  extendTheme,
  VStack,
  Box,
  View,
} from "native-base";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Wellcome } from "./components/Screen/Wellcome";
import Nev from "./components/Navi/nev";
import nativeBaseTheme from "./components/Theme/nativeBaseTheme";
import "react-native-gesture-handler";
import useCachedResources from "./components/Hooks/useCachedResources";



// Define the config
// const config = {
//   useSystemColorMode: false,
//   initialColorMode: "dark",
// };
const config = {
  dependencies: {
    "linear-gradient": require("expo-linear-gradient").LinearGradient,
  },
};

// extend the theme

export default function App() {
  // const Stack = createNativeStackNavigator();
  // const isLoadingComplete = useCachedResources();
  // if (!isLoadingComplete) {
  //   return null;
  // } else {
    return (
      <NativeBaseProvider config={config} theme={nativeBaseTheme}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <BottomSheetModalProvider>
            <Nev/>
            <StatusBar/>
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </NativeBaseProvider>
    );
  }


