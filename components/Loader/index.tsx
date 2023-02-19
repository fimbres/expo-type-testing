import React, { FC } from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'

import { Colors } from '../../constants'

export const Loader: FC = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={Colors.violet} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        zIndex: 5,
        backgroundColor: Colors.black60,
    }
})