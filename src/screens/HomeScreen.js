import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go to Components Demo"
      />
      <Button
        onPress={() => navigation.navigate("ListScreen")}
        title="ListScreen"
      />
      <Button
        onPress={() => navigation.navigate("ImageScreen")}
        title="ImageScreen"
      />

      <Button
        onPress={() => navigation.navigate("Counter")}
        title="Go to Counter Screen"
      />

      <Button
        onPress={() => navigation.navigate("Color")}
        title="Go to Color Screen"
      />

      <Button
        onPress={() => navigation.navigate("Square")}
        title="Go to Square Screen"
      />

      <Button
        onPress={() => navigation.navigate("Text")}
        title="Go to Text Screen"
      />

      <Button
        onPress={() => navigation.navigate("Box")}
        title="Go to Box Screen"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
