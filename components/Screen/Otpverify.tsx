import React, { Component, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Image, SafeAreaView } from "react-native";
import {
  Button,
  Container,
  Text,
  Icon,
  Box,
  Stack,
  Center,
  VStack,
  Flex,
  Heading,
  ScrollView,
} from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import LanguageSwitcher from "../languages/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import UtilFontAwesome from "../utils/UtilFontAwesome";
import {
  faAngleLeft,
  faBookAtlas,
  faFaceAngry,
} from "@fortawesome/free-solid-svg-icons";
import { faFaceSmileBeam } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Line } from "react-native-svg";
import InputMobileNumber, { ILocaleOption } from "../input/InputMobileNumber";
import { useForm } from "react-hook-form";
import AuthOtpInput from "../input/AuthOtpInput";
import { Platform } from "expo-modules-core";

export const Otpverify = ({ navigation }) => {
  // initialize use transition hook
  const { t } = useTranslation();
  // initialize react-hook-form hook
  const { control, handleSubmit } = useForm();
  // initialize locale selected state
  const [localeSelected, setLocaleSelected] = useState<ILocaleOption>(
    {} as ILocaleOption
  );
  // handle local change
  const handleLocaleChange = (locale: ILocaleOption) => {
    setLocaleSelected(locale);
  };
  // initialize loading
  const [loading, setLoading] = useState<boolean>(false);
   // initialize otp input value state
   const [otpInputValue, setOtpInputValue] = useState<string>('');

 // handle otp input change
 const handleOtpInputChange = (otp: string) => {
    // log otp
    console.log('otp', otp);
    setOtpInputValue(otp);
  };
  return (
    <>
      <SafeAreaView edges={["bottom", "left", "right"]}>
        <StatusBar style={Platform.OS === "ios" ? "light" : "auto"}></StatusBar>
        <ScrollView contentContainerStyle={{ height: "100%" }} bounces={false}>
          <Box height="100%">
            <Button
              position="absolute"
              top={5}
              left={2}
              px={0}
              variant="unstyled"
              onPress={() => navigation.goBack()}
              zIndex={9}
            >
              <UtilFontAwesome icon={faAngleLeft} color="#045EE4" size={24} />
            </Button>

            <Flex
              flexDirection="column"
              flex={1}
              justifyContent="space-between"
              px={2}
              pt={5}
            >
              <Box>
                <Heading fontSize={24} color="#393F42" mt={60} mb={8}>
                  ยืนยันรหัส 6 หลัก
                </Heading>
                <Heading fontSize={16} mb={2} >
                  โปรดกรอกรหัสยืนยัน 6 หลักที่ส่งไปยังหมายเลข
                </Heading>
                <Box>
                  <Center mb={6} >
                    <AuthOtpInput
                      onChange={handleOtpInputChange}
                      inputCount={6}
                    />
                  </Center>
                  <Button
                    height={50}
                    width={343}
                    colorScheme="orange"
                    isLoading={loading}
                    onPress={() => {
                      setLoading(true);
                      setTimeout(() => {
                        setLoading(true);
                        navigation.navigate("profilename");
                      }, 1000);
                    }}
                  >
                    เข้าสู่ระบบ
                  </Button>

                  <Text
                    mt={3}
                    fontSize="md"
                    textAlign="center"
                    color={"#99A5B7"}
                  >
                    โดยระบบจะส่ง SMS เพื่อยืนยันในขั้นตอนถัดไป
                  </Text>
                </Box>
              </Box>
            </Flex>

            <Center>
              <Text
                style={{
                  marginTop: 5,
                  color: "#393F42",
                  padding: 10,
                  paddingBottom: 0,
                  fontSize: 16,
                  alignContent: "center",
                }}
              >
                เมื่อเข้าสู่ระบบคุณได้ยอมรับ เงื่อนไขและข้อตกลง
              </Text>
              <Text
                style={{
                  marginTop: 0,
                  color: "#393F42",
                  padding: 10,
                  paddingTop: 0,
                  fontSize: 16,
                  alignContent: "center",
                }}
              >
                และนโยบายความเป็นส่วนตัวของ ปลาวาฬ แล้ว
              </Text>
            </Center>
          </Box>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
