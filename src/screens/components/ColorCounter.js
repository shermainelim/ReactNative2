import React, { useState } from "react";
import { Text, StyleSheet, View, Button, FlatList } from "react-native";

const ColorCounter = () => {
  return (
    <View>
      <Text>Red</Text>
      <Button title="Increase Red" />
      <Button title="Decrease Red" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorCounter;
