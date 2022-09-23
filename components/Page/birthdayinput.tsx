import React, {
  Component,
  useState,
  useMemo,
  useEffect,
  useCallback,
} from "react";
import dayjs from "dayjs";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Image, SafeAreaView } from "react-native";
import {
  Button,
  Box,
  HStack,
  Stack,
  Center,
  Flex,
  Heading,
  ScrollView,
  FormControl,
} from "native-base";

import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import LanguageSwitcher from "../languages/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import UtilFontAwesome from "../utils/UtilFontAwesome";
import InputMobileNumber, { ILocaleOption } from "../input/InputMobileNumber";
import { useForm } from "react-hook-form";
import AuthOtpInput from "../input/AuthOtpInput";
import { Platform } from "expo-modules-core";
import InputSelect from "../input/InputSelect";
import { UserGenderEnum } from "../user/interfaces/user.interface";
import { ProfileUpdateDto } from "../profile/dots/profile-update.dto";
import { ProfileService } from "../profile/profile.service";

export const Birthday = ({}) => {
  // initialize use navigation hook
  const navigation = useNavigation();
  // initialize loading
  const [loading, setLoading] = useState<boolean>(false);
  // initialize translate hook
  const { t } = useTranslation();
  // initialize react-hook-form hook
  const { control, handleSubmit, reset, setValue, clearErrors, watch } =
    useForm();
  // get months name from dayjs using memo
  const months = useMemo(() => {
    // get dayjs.months()
    // const months = dayjs.months();

    // // loop months return value and label
    // return months.map((month, index) => {
    //   // initialize value
    //   const value = index + 1;
    //   return { label: month, value: value.toString() };
    // });

    const months = Array.from({ length: 12 }, (_, i) => i + 1);
    return months.map((months) => ({
      label: months.toString(),
      value: months.toString(),
    }));
  }, []);
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
    const _years = Array.from(
      { length: 100 },
      (_, i) => dayjs().subtract(15, "year").year() - i
    );

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

  
  // // initialize auth user
  // const { user } = auth;
  //
  //  // listen user and set form value
  //  useEffect(() => {
  //   if (user) {
  //     // log user.gender
  //     console.log('user.gender', user.gender);

  //     // set form value
  //     reset({
  //       gender: user.gender,
  //       dateOfBirth: {
  //         date: user.dateOfBirth?.date || '',
  //         month: user.dateOfBirth?.month || '',
  //         year: user.dateOfBirth?.year || '',
  //       },
  //     });
  //   }
  // }, [user]);

  // handle form submit
  const handleFormSubmit = useCallback(async (payload: ProfileUpdateDto) => {
    // try catch error
    try {
      // log payload
      console.log(payload);

      // set loading true
      setLoading(true);

      // initialize profile service
      const profileService = new ProfileService();

      // update profile
      const updateProfileResponseData = await profileService.update({
        gender: payload.gender,
        dateOfBirth: {
          date: payload.dateOfBirth?.date || "",
          month: payload.dateOfBirth?.month || "",
          year: payload.dateOfBirth?.year || "",
        },
      });

      // log updateProfileResponseData
      console.log("updateProfileResponseData", updateProfileResponseData);

      // // update user
      // auth.updateUser(updateProfileResponseData);

      // navigate to ProfileSetupAvatarScreen
      navigation.navigate("Arvatar");
    } catch (error) {
      // catch error
      catchError(error);
    } finally {
      // set loading false
      setLoading(false);
    }
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
                        <Box flex={1}>
                          <InputSelect
                            name="dateOfBirth.month"
                            label="เดือน"
                            labelVisibility={false}
                            placeholder="เดือนเกิด"
                            control={control}
                            options={months}
                            rules={{
                              required: t("field.required"),
                            }}
                            setValue={setValue}
                            clearErrors={clearErrors}
                            watch={watch}
                          />
                        </Box>
                        <Box flex={1}>
                          <InputSelect
                            name="dateOfBirth.year"
                            label="ปี"
                            labelVisibility={false}
                            placeholder="ปีเกิด"
                            control={control}
                            options={years}
                            rules={{
                              required: t("field.required"),
                            }}
                            setValue={setValue}
                            clearErrors={clearErrors}
                            watch={watch}
                          />
                        </Box>
                      </HStack>
                    </FormControl>
                  </Box>
                  <Box>
                    <InputSelect
                      name="gender"
                      label="เพศ"
                      placeholder="เพศของคุณ"
                      control={control}
                      options={[
                        { label: "ชาย", value: UserGenderEnum.MALE },
                        { label: "หญิง", value: UserGenderEnum.FEMALE },
                        { label: "อื่นๆ", value: UserGenderEnum.OTHER },
                        {
                          label: "ไม่ระบุ",
                          value: UserGenderEnum.NOT_SPECIFIED,
                        },
                      ]}
                      rules={{
                        required: t("field.required"),
                      }}
                      setValue={setValue}
                      clearErrors={clearErrors}
                      watch={watch}
                    />
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
                onPress={handleSubmit(handleFormSubmit)}
                isLoading={loading}
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
