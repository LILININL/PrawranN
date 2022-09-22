import React, { Component, useState } from "react";
import { StyleSheet, Image } from "react-native";
import { View, Button, Container, Text, Icon, Box } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import LanguageSwitcher from "../languages/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { CallApiAxiso } from "../Api/testAxios";
import { CallApi } from "../Api/Textcall";

export const Wellcome = ({ navigation }) => {
  const { t, i18n } = useTranslation();
  // initialize loading
  const [loading, setLoading] = useState<boolean>(false);
  const logoImage = require("../image/logo.png");
  const onboardImage = require("../image/onboard/onboard.png");
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 10,
          marginTop: 25,
        }}
      >
        
        <Box>
          <Image source={logoImage} alt="Plawarn" />
        </Box>
        <Box>
          <LanguageSwitcher />
        </Box>
      </View>

      <View
        style={{
          flex: 2.5,
          alignItems: "center",
          justifyContent: "flex-end",
          marginTop: 10,
          padding: 10,
          paddingBottom: 0,
        }}
      >
        {/*  */}
        <Image
          source={onboardImage}
          resizeMode="contain"
          style={{ width: 415, height: 200 }}
        />
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          marginBottom: 15,
          padding: 10,
        }}
      >
        <Text
          style={{
            fontSize: 24,
            color: "black",
            padding: 10,
            justifyContent: "flex-start",
            marginTop: 5,
            paddingBottom: 0,
          }}
        >
          ยินดีต้อนรับสู่ ปลาวาฬ
        </Text>
        <Text
          style={{
            fontSize: 17.5,
            color: "black",
            padding: 10,
            marginBottom: 5,
          }}
        >
          เราเป็นตลาดกลางแรงงานเพื่อเชื่อมต่อระหว่างผู้ใช้แรงงานและนายจ้าง
        </Text>
        <Button
          height={50}
          width={343}
          title="Continue"
          onPress={() => {
            setLoading(true);
            setTimeout(() => {
              setLoading(true);
              navigation.navigate("LoginMobile");
            }, 1000);
          }}
        >
          เข้าใช้งาน
        </Button>
      </View>
    </>
  );
};
