import React, {
  Component,
  useState,
  useMemo,
  useEffect,
  useCallback,
} from "react";
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
import { useForm } from "react-hook-form";
import { NavigationContainer } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { Platform } from "expo-modules-core";
import { ProfileUpdateDto } from "../profile/dots/profile-update.dto";
import InputTextGroup from "../input/InputTextGroup";

export const Profilename = ({ navigation }) => {
  // initialize use transition hook
  const { t } = useTranslation();
  // name state
  // const [name, onChangename] = React.useState("");
  // const [lastname, onChangelastname] = React.useState("");
  // console.log("name", name);
  // console.log("lastname", lastname);
  // initialize loading
  const [loading, setLoading] = useState<boolean>(false);
  // initialize react-hook-form hook
  const { control, handleSubmit, reset } = useForm();

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
        firstName: payload.firstName,
        lastName: payload.lastName,
      });

      // log updateProfileResponseData
      console.log("updateProfileResponseData", updateProfileResponseData);
      // navigate to profile setup birthday
      navigation.navigate("birthday");
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
                      <InputTextGroup
                        name="firstName"
                        placeholder={t("ชื่อของคุณ")}
                        control={control}
                        autoFocus={true}
                        rules={{
                          required: t("กรุณากรอกชื่อของคุณ"),
                        }}
                      />
                    </FormControl>
                    <FormControl isInvalid w="95%" maxW="343px">
                      <FormControl.Label>นามสกุล</FormControl.Label>
                      <InputTextGroup
                        name="lastName"
                        placeholder={t("นามสกุลของคุณ")}
                        control={control}
                        rules={{
                          required: t("กรุณากรอกนามสกุลของคุณ"),
                        }}
                      />
                    </FormControl>
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
