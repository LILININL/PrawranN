import React, { Component, useState,useMemo } from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Image, SafeAreaView } from "react-native";
import {
  Button,
  Container,
  Text,
  Icon,
  Box,
  HStack,
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
import dayjs from 'dayjs';
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
import InputSelect from "../input/InputSelect";

export const Arvatar = ({ navigation }) => {

  return (
    <>
      <SafeAreaView edges={["bottom", "left", "right"]}>
        <StatusBar style={Platform.OS === "ios" ? "light" : "auto"}></StatusBar>
        <ScrollView contentContainerStyle={{ height: "100%" }} bounces={false}>
          <Box height="100%">
            <Center>
              <Button
                height={50}
                width={343}
                mb={5}
                colorScheme="orange"
                onPress={() => {}}
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
