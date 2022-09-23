import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Wellcome } from "../Screen/Wellcome";
import { LoginMobile } from "../Screen/LoginMobile";
import { Otpverify } from "../Screen/Otpverify";
import { Profilename } from "../Page/ProfileName";
import { Birthday } from "../Page/BirthdayInput";
import { Avatar } from "../Page/Avatar";
export default function Nev() {
  const Stack = createNativeStackNavigator();
  return (
    // headerTitleStyle: {
    //   fontFamily: "NotoSansThaiSemiBold",
    //   fontSize: 20,
    // },
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerBackTitleVisible: false,
          contentStyle: { backgroundColor: "#ffffff" },
        }}
        initialRouteName="wellcome"
      >
        <Stack.Screen
          name="wellcome"
          component={Wellcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginMobile"
          component={LoginMobile}
          options={{ title: "", headerShown: true }}
        />
        <Stack.Screen
          name="Otpverify"
          component={Otpverify}
          options={{ title: "", headerShown: true }}
        />
        <Stack.Screen
          name="profilename"
          component={Profilename}
          options={{
            title: "สร้างโปรไฟล์",
            headerShown: true,
            headerTintColor: "#045EE4",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="birthday"
          component={Birthday}
          options={{
            title: "สร้างโปรไฟล์",
            headerShown: true,
            headerTintColor: "#045EE4",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Avatar"
          component={Avatar}
          options={{
            title: "สร้างโปรไฟล์",
            headerShown: true,
            headerTintColor: "#045EE4",
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
