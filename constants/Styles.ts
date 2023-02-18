import { StyleSheet } from "react-native";

import { Colors } from "./Colors";

const fontFamilies = {
  black: "avenir-black",
  book: "avenir-book",
};

export const Styles = StyleSheet.create({
  textTitleGiant: {
    fontFamily: fontFamilies.black,
    fontWeight: "800",
    fontSize: 32,
    lineHeight: 43.71,
    color: Colors.black,
  },
  textTitleExtraLarge: {
    fontFamily: fontFamilies.black,
    fontWeight: "800",
    fontSize: 24,
    lineHeight: 24,
    color: Colors.black,
  },
  textTitleLarge: {
    fontFamily: fontFamilies.black,
    fontWeight: "800",
    fontSize: 20,
    lineHeight: 27.32,
    color: Colors.black,
  },
  textTitleRegular: {
    fontFamily: fontFamilies.black,
    fontWeight: "800",
    fontSize: 16,
    lineHeight: 21.86,
    color: Colors.black,
  },
  textTitleSmall: {
    fontFamily: fontFamilies.black,
    fontWeight: "800",
    fontSize: 14,
    lineHeight: 19.12,
    color: Colors.black,
  },
  textTitleExtraSmall: {
    fontFamily: fontFamilies.black,
    fontWeight: "800",
    fontSize: 12,
    lineHeight: 16.39,
    color: Colors.black,
  },
  textCaptionSmall: {
    fontFamily: fontFamilies.book,
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 21.86,
    color: Colors.black,
  },
  textCaptionExtraSmall: {
    fontFamily: fontFamilies.book,
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 16.39,
    color: Colors.black,
  },
});
