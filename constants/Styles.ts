import { StyleSheet } from "react-native";

import { Colors } from "./Colors";

const fontFamilies = {
  black: "avenir-black",
  book: "avenir-book",
  roman: "avenir-roman",
};

export const Styles = StyleSheet.create({
  textHeadlineHero: {
    fontFamily: fontFamilies.black,
    fontWeight: "800",
    fontSize: 20,
    lineHeight: 27.32,
    color: Colors.black,
  },
  textHeadlineLarge: {
    fontFamily: fontFamilies.roman,
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 21.86,
    color: Colors.black,
  },
});
