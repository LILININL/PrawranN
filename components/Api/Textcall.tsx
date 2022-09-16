import React, { useState, useEffect } from "react";
import { View, FlatList ,Layout, Text, Button} from "react-native";


export function CallApi({ navigation }) {
  const [isLoading, setLoading] = useState(true); // set loading to true
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api2.plawarn.com/users")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  console.log(data);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {isLoading ? 
        <Text>Loading ...</Text> : (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          initialParams={{ item: 1 }}
          renderItem={({ item }) => (
            <Text category="h1" style={{ fontSize: 24 ,color: "black" }}>
              Nmae: {item.name}
              {"\n"}
              Email: {item.phone}
              {"\n"}
            </Text>
          )}
        /> 
        </View>
      )}
      
    </View>
  );
}
