import React, { Component, useState, useMemo } from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Image, SafeAreaView } from "react-native";
import { Button, Box, Center, ScrollView } from "native-base";
import dayjs from "dayjs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import LanguageSwitcher from "../languages/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";

import { Platform } from "expo-modules-core";

export const Arvatar = ({}) => {
  // initialize use navigation hook
  const navigation = useNavigation();
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
