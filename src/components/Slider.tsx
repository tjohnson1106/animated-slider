import * as React from "react";
import { View, Dimensions, StyleSheet } from "react-native";
// @ts-ignore
import { DangerZone } from "expo";

import Cursor from "./Cursor";

const { Animated } = DangerZone;
const { Value, add } = Animated;
const { width: totalWidth } = Dimensions.get("window");
const count = 5;
const width = totalWidth / count;
const height = width;

export default () => {
  const x = new Value(0);
  return (
    <View style={styles.root}>
      <Animated.View
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: "#bd536d",
          borderRadius: height / 2,
          width: add(x, height),
          height
        }}
      />
      <Cursor size={height} {...{ x, count }} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: totalWidth,
    height,
    borderRadius: height / 2,
    backgroundColor: "#f1f2f6"
  }
});
