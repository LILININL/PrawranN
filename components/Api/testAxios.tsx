import axios from "axios";
import React, { useState, useEffect } from "react";
import { View, FlatList, Text, Button } from "react-native";
import Constants from "expo-constants";

export function CallApiAxiso({}) {
  const [isLoading, setLoading] = useState(true); // set loading to true
  const [data, setData] = useState([]);
  const baseUrl = "https://api2.plawarn.com";
  axios.get(`${baseUrl}/users`).then((res) => {
    // console.log(res.data);
  });
  
  return (
    <View
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}

    >
    </View>
  );
}
