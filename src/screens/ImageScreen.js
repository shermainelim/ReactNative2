import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";
import ImageDetail from "./ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail />
      <ImageDetail />
      <ImageDetail />
      <ImageDetail />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
