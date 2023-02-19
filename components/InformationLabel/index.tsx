import React, { FC } from 'react';
import { StyleSheet, Text, TextStyle } from 'react-native';

import { Colors, Styles } from '../../constants';

interface InformationLabelProps {
    primaryText: string;
    secondaryText: string;
    primaryTextStyle: TextStyle;
    secondaryTextStyle: TextStyle;
}

export const InformationLabel: FC<InformationLabelProps> = ({ primaryText, secondaryText, primaryTextStyle, secondaryTextStyle }) => {
  return (
    <>
        <Text style={[styles.subtitle, primaryTextStyle]}>{primaryText}</Text>
        <Text style={secondaryTextStyle}>{secondaryText}</Text>
    </>
  )
}

const styles = StyleSheet.create({
    subtitle: {
        ...Styles.textTitleSmall,
        color: Colors.gray,
    },
});
