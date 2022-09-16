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

export const birthday = ({ navigation }) => {
  // name state
  const [name, onChangename] = React.useState("");
  const [lastname, onChangelastname] = React.useState("");
  console.log("name", name);
  // initialize loading
  const [loading, setLoading] = useState<boolean>(false);
  // initialize translate hook
  const { t } = useTranslation();
  // initialize react-hook-form hook
  const { control, handleSubmit, reset, setValue, clearErrors, watch } = useForm();
  // get days in month using memo
  const daysInMonth = useMemo(() => {
    // get dayjs.months()
    // loop range 1 to 31
    const _days = Array.from({ length: 31 }, (_, i) => i + 1);

    // loop days return value and label
    return _days.map((day) => ({
      label: day.toString(),
      value: day.toString(),
    }));
  }, []);
  // get years using memo
  const years = useMemo(() => {
    // get dayjs.months()
    // loop range current year to current year - 100
    const _years = Array.from({ length: 100 }, (_, i) => dayjs().subtract(15, 'year').year() - i);

    // loop years return value and label
    return _years.map((year) => {
      // add 543 year to year
      const _year = year + 543;

      return {
        label: _year.toString(),
        value: year.toString(),
      };
    });
  }, []);
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
              <Box flex={1}>
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
                  วันเกิดและเพศ
                </Heading>

                <Stack space={6}>
                  <Box>
                    <FormControl>
                      <FormControl.Label>วันเกิด</FormControl.Label>
                      <HStack space={4}>
                        <Box width="25%">
                          <InputSelect
                            name="dateOfBirth.date"
                            label="วัน"
                            labelVisibility={false}
                            placeholder={t("วันเกิด")}
                            control={control}
                            options={daysInMonth}
                            rules={{
                              required: t("field.required"),
                            }}
                            setValue={setValue}
                            clearErrors={clearErrors}
                            watch={watch}
                          />
                        </Box>
                        {/* <Box flex={1}>
                      <InputSelect
                        name="dateOfBirth.month"
                        label="เดือน"
                        labelVisibility={false}
                        placeholder="เดือนเกิด"
                        control={control}
                        // options={months}
                        rules={{
                          required: t('field.required'),
                        }}
                        setValue={setValue}
                        clearErrors={clearErrors}
                        watch={watch}
                      />
                    </Box> */}
                    <Box flex={1}>
                      <InputSelect
                        name="dateOfBirth.year"
                        label="ปี"
                        labelVisibility={false}
                        placeholder="ปีเกิด"
                        control={control}
                        options={years}
                        rules={{
                          required: t('field.required'),
                        }}
                        setValue={setValue}
                        clearErrors={clearErrors}
                        watch={watch}
                      />
                    </Box>
                      </HStack>
                    </FormControl>
                  </Box>
                </Stack>
              </Box>
            </Flex>

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
