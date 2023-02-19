import React, { FC, ReactNode } from 'react'
import { StyleSheet, View, ViewStyle } from 'react-native'

interface ScreenFooterProps {
    children: ReactNode;
    style?: ViewStyle;
}

export const ScreenFooter: FC<ScreenFooterProps> = ({ children, style }) => {
  return (
    <View style={[styles.container, style]}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 40,
    }
})