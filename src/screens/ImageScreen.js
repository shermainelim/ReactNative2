import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";
import ImageDetail from "./ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Forest"
        imageScore="9"
        imageSource={require("../../assets/forest.jpg")}
      />
      <ImageDetail
        title="Beach"
        imageScore="9"
        imageSource={require("../../assets/beach.jpg")}
      />
      <ImageDetail
        title="Mountain"
        imageScore="9"
        imageSource={require("../../assets/mountain.jpg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
