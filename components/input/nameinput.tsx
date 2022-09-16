import React from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Box } from "native-base";

function Nameinput() {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);
  return (
    <Box>
      <TextInput>
        style={styles.input}
        onChangeText={(name) => onChangeText(name)}
        value={text}{" "}
      </TextInput>
    </Box>
  );
}



export default Nameinput;
