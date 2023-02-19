import React, { FC } from 'react'
import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
// import { Entypo } from '@expo/vector-icons';

import { IProduct } from '../../types'
import { Colors, Styles } from '../../constants';
import { getDateLabel, getFormattedPoints } from '../../utils/formats';

interface ProductCellProps {
    product: IProduct;
    onPress: () => void;
}

export const ProductCell: FC<ProductCellProps> = ({ product, onPress }) => {
    const { image, product: name, createdAt, points, is_redemption } = product;

    return (
        <Pressable style={styles.cell} onPress={onPress}>
            <View style={styles.container}>
                <Image source={{ uri: image }} style={styles.image}/>
                <View>
                    <Text style={styles.primaryText}>{name}</Text>
                    <Text style={Styles.textCaptionExtraSmall}>{getDateLabel(createdAt)}</Text>
                </View>
            </View>
            <View style={styles.container}>
                <Text style={styles.pointsText}>
                    <Text style={{ color: is_redemption ? Colors.red : Colors.green }}>{is_redemption ? "-" : "+"}</Text>
                    {getFormattedPoints(points)}
                </Text>
                {/* <Entypo name="triangle-right" size={14} color="black" /> */}
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    cell: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
        paddingHorizontal: 10,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 55,
        height: 55,
        borderRadius: 10,
        marginRight: 11,
    },
    primaryText: {
        ...Styles.textTitleSmall,
        marginBottom: 7,
    },
    pointsText: {
        ...Styles.textTitleRegular,
        marginRight: 10
    }
})