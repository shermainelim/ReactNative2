import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Child # 1</Text>
      <Text style={styles.textStyle}>Child # 2</Text>
      <Text style={styles.textStyle}>Child # 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    alignItems: "flex-end",
  },
  textStyle: {
    borderWidth: 3,
    borderColor: "red",
  },
});

export default BoxScreen;
