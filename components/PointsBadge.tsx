import React, { FC } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Numeral from "numeral";

import { Colors, Styles } from '../constants';

interface PointsBadgeProps {
    points: number;
}

export const PointsBadge: FC<PointsBadgeProps> = ({ points }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Diciembre</Text>
      <Text style={styles.pointsText}>{Numeral(points).format("$0,0.00")} pts</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 32,
        paddingHorizontal: 18,
        paddingTop: 21,
        paddingBottom: 49,
        borderRadius: 20,
        backgroundColor: Colors.blue,
        shadowColor: Colors.black,
        shadowOffset: {
            width: 2,
            height: 3,
        },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 3,
    },
    title: {
        ...Styles.textTitleRegular,
        color: Colors.white,
        marginBottom: 7
    },
    pointsText: {
        ...Styles.textTitleGiant,
        color: Colors.white,
        textAlign: 'center'
    }
})
