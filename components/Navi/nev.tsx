import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Wellcome } from "../Screen/Wellcome";
import { LoginMobile } from "../Screen/LoginMobile";
import { Otpverify } from "../Screen/Otpverify";
import { profilename } from "../Page/profilename";
import { birthday  } from "../Page/birthdayinput";
import { Arvatar } from "../Page/Arvatar";
export default function Nev() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleStyle: {
            fontFamily: "NotoSansThaiSemiBold",
            fontSize: 20,
          },
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
          options={{ title: "", headerShown: false }}
        />
        <Stack.Screen
          name="Otpverify"
          component={Otpverify}
          options={{ title: "", headerShown: false }}
        />
        <Stack.Screen 
          name ="profilename"
          component={profilename}
          options={{ title: "สร้างโปรไฟล์", headerShown: true , headerTintColor: '#045EE4',headerTitleAlign: 'center'}}
        />
        <Stack.Screen 
          name ="birthday"
          component={birthday}
          options={{ title: "สร้างโปรไฟล์", headerShown: true , headerTintColor: '#045EE4',headerTitleAlign: 'center'}}
        />
         <Stack.Screen 
          name ="Arvatar"
          component={Arvatar}
          options={{ title: "สร้างโปรไฟล์", headerShown: true , headerTintColor: '#045EE4',headerTitleAlign: 'center'}}
        />


      </Stack.Navigator>
    </NavigationContainer>
  );
}
