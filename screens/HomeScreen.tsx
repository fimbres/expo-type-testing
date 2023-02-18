import React, { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { Styles } from '../constants'
import { RootStackParamList } from '../navigation/types'

const HomeScreen: FC<NativeStackScreenProps<RootStackParamList, "Home">> = () => {
  return (
    <View style={styles.container}>
      <Text style={Styles.textHeadlineHero}>HomeScreen</Text>
      <Text style={Styles.textHeadlineLarge}>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
