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
  TextField,
  Flex,
  Heading,
  Input,
  ScrollView,
  FormControl,
  WarningOutlineIcon,
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


export const Profilename = ({ navigation }) => {
   // initialize use transition hook
   const { t } = useTranslation();
  // name state
  const [name, onChangename] = React.useState("");
  const [lastname, onChangelastname] = React.useState("");
  console.log("name", name);
  console.log("lastname", lastname);
  // initialize loading
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <>
      <SafeAreaView edges={["bottom", "left", "right"]}>
        <StatusBar style={Platform.OS === "ios" ? "light" : "auto"}></StatusBar>
        <ScrollView contentContainerStyle={{ height: "100%" }} bounces={false}>
          <Box height="100%">
            <Flex
              flexDirection="column"
              flex={1}
              justifyContent="space-between"
              px={2}
              pt={5}
            >
              {/*  */}
              <Box>
                <Heading
                  fontSize={24}
                  textAlign="center"
                  color="#393F42"
                  mt={1}
                  mb={3}
                >
                  มาเริ่มสร้างโปรไฟล์กันเถอะ
                </Heading>
                <Heading textAlign="center" fontSize={18} mb={5}>
                  ชื่อของคุณ
                </Heading>
                <Box>
                  <Center mb={6} mt={-1}>
                    <FormControl isInvalid w="95%" maxW="343px">
                      <FormControl.Label>ชื่อ</FormControl.Label>
                      <Input
                        placeholder="ชื่อ"
                        rules={{
                          required: t("กรุณากรอกชื่อ"),
                        }}
                        onChangeText={onChangename}
                        value={name}
                      />
                      {/* <FormControl.ErrorMessage
                        leftIcon={<WarningOutlineIcon size="xs" />}
                      >
                        กรุณากรอกชื่อ
                      </FormControl.ErrorMessage> */}
                    </FormControl>
                    <FormControl isInvalid w="95%" maxW="343px">
                      <FormControl.Label>นามสกุล</FormControl.Label>
                      <Input
                        placeholder="นามสกุล"
                        rules={{
                          required: t("กรุณากรอกนามสกุล"),
                        }}
                        onChangeText={onChangelastname}
                        value={lastname}
                      />
                      {/* <FormControl.ErrorMessage
                        leftIcon={<WarningOutlineIcon size="xs" />}
                      >
                        กรุณากรอกนามสกุล
                      </FormControl.ErrorMessage> */}
                    </FormControl>
                    {/* <Input mb={5}
                    
                      size="xl"
                      placeholder="ชื่อ"
                      onChangeText={onChangename}
                      value={name}
                    />
                    <Input mb={5}
                      size="xl"
                      placeholder="ชื่อ"
                      onChangeText={onChangename}
                      value={name}
                    /> */}
                  </Center>
                </Box>
              </Box>
            </Flex>

            <Center>
              <Button
                height={50}
                width={343}
                mb={5}
                colorScheme="orange"
                onPress={() => {
                  setLoading(true);
                  setTimeout(() => {
                    setLoading(true);
                    navigation.navigate("birthday");
                  }, 1000);
                }}
              >
                ดำเนินการต่อ
              </Button>
            </Center>
          </Box>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
