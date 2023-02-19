import React, { FC, ReactNode } from "react";
import { SafeAreaView, StyleSheet, StyleProp, ViewStyle, Platform } from "react-native";
import Constants from "expo-constants";

import { Colors } from "../../constants";

interface SafeAreaContainerProps {
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
}

export const SafeAreaContainer: FC<SafeAreaContainerProps> = ({ style, children }) => {
  return (
    <SafeAreaView
      style={[styles.container, style]}
    >
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bone,
    paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
  },
});
