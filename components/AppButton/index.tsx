import React, { FC } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

import { Colors, Styles } from "../../constants";

interface AppButtonProps {
  title: string;
  size?: "md" | "lg";
  onPress: () => void;
}

export const AppButton: FC<AppButtonProps> = ({
  title,
  size = "md",
  onPress,
}) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        styles[size],
        pressed && styles.pressed,
      ]}
      onPress={onPress}
      testID="app-button"
    >
      <Text
        style={[
          size === "md" ? Styles.textTitleExtraSmall : Styles.textTitleRegular,
          { color: Colors.white },
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: Colors.blue,
  },
  md: {
    paddingVertical: 17,
  },
  lg: {
    paddingVertical: 14,
  },
  pressed: {
    opacity: 0.8,
  },
});
