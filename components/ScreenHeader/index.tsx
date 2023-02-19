import React, { FC } from 'react'
import { StyleSheet, Text, View, ViewStyle } from 'react-native'

import { Styles } from '../../constants';

interface ScreenHeaderProps {
    title: string;
    subtitle?: string;
    style?: ViewStyle;
}

export const ScreenHeader: FC<ScreenHeaderProps> = ({ title, subtitle, style }) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={subtitle ? Styles.textTitleLarge : Styles.textTitleExtraLarge}>{title}</Text>
      {subtitle && <Text style={Styles.textCaptionSmall}>{subtitle}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingTop: 24,
    }
})
