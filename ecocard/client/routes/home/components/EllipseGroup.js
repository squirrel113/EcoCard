import React from "react";
import { View, StyleSheet } from "react-native";
import { Image } from "expo-image";

const EllipseGroup = () => {
  return (
    <View style={styles.ellipseGroup}>
      <Image
        style={styles.frameLayout}
        contentFit="cover"
        source={require("../../../assets/ellipse-5.svg")}
      />
      <Image
        style={[styles.frameItem, styles.frameLayout]}
        contentFit="cover"
        source={require("../../../assets/ellipse-5.svg")}
      />
      <Image
        style={[styles.frameItem, styles.frameLayout]}
        contentFit="cover"
        source={require("../../../assets/ellipse-5.svg")}
      />
      <Image
        style={[styles.frameItem, styles.frameLayout]}
        contentFit="cover"
        source={require("../../../assets/ellipse-5.svg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ellipseGroup: {
    marginLeft: 12,
    flexDirection: "row",
  },
  frameLayout: {
    height: 6,
    width: 6,
  },
  frameItem: {
    marginLeft: 3.5,
  },
});

export default EllipseGroup;
