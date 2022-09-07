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

export const LoginMobile = ({ navigation }) => {
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

  return (
    <>
      <SafeAreaView edges={["bottom", "left", "right"]}>
        <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'}></StatusBar>
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
                <Heading fontSize={24} mt={60} mb={8}>
                  ยินดีต้อนรับกลับมา
                </Heading>
                <Heading fontSize="xl" mb={2}>
                  เข้าสู่ระบบโดยใช้หมายเลขโทรศัพท์
                </Heading>
                <Box>
                  <Box mb={5}>
                    <InputMobileNumber
                      name="mobileNumber"
                      placeholder="เบอร์โทรศัพท์"
                      control={control}
                      rules={{
                        required: t("field.required"),
                      }}
                      onLocaleChange={handleLocaleChange}
                    ></InputMobileNumber>
                  </Box>
                  <Button height={50} width={343} colorScheme="orange"
                    isLoading={loading}
                    onPress={() => {
                      setLoading(true);
                      setTimeout(() => {
                        setLoading(true);
                        navigation.navigate("Otpverify");
                      }, 1000);
                    }}>
                    ดำเนินการต่อ
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
           
            <VStack space={0} mb={5}>
              <Flex
                  position="relative"
                  px={2}
                  backgroundColor="white"
                  marginBottom={2}
                  justifyContent="center"
                  _text={{ textAlign: "center", color: "#99A5B7" }}
                >
                  หรือ
              </Flex>
              <Box position="relative" style={{ padding: 10, marginBottom: 0 }}>
                <Button
                  _text={{ color: "white" }}
                  backgroundColor="#09CA48"
                  paddingLeft={6}
                  height={50}
                  width={343}
                  // leftIcon={
                  //   // UtilFontAwesome icon Line
                  //   // <FontAwesomeIcon icon={Line} size={20} color="white" />
                  // }
                >
                  เข้าสู่ระบบโดยใช้ Line
                </Button>
              </Box>
              <Box position="relative" style={{ padding: 10, marginTop: 0 }}>
                <Button
                  _text={{ color: "white" }}
                  backgroundColor="#267DFD"
                  paddingLeft={12}
                  height={50}
                  width={343}
                  leftIcon={
                    // UtilFontAwesome icon facebook
                    <FontAwesome name="facebook" size={16} color="white" />
                  }
                >
                  เข้าสู่ระบบโดยใช้ Facebook
                </Button>
              </Box>
            </VStack>

            <Center>
              <Text style={{ marginTop: 5 }}>เพิ่งเริ่มใช้ ปลาวาฬ ใช่ไหม</Text>
              <Button
                variant="link"
                colorScheme="primary"
                onPress={() => navigation.navigate("wellcome")}
              >
                สมัคสมาชิก
              </Button>
            </Center>
          </Box>
      
      </SafeAreaView>
    </>
  );
};
