import React, { FC } from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import Numeral from "numeral";
import moment from 'moment';
import 'moment/locale/es';

import { Colors, Styles } from '../constants'
import { RootStackParamList } from '../navigation/types'
import { AppButton, SafeAreaContainer, ScreenHeader } from '../components'
import { useSelector } from 'react-redux'
import { selectProductById } from '../stores/productsSlice'
import { IProduct } from '../types'

const ProductScreen: FC<NativeStackScreenProps<RootStackParamList, "Product">> = ({ navigation, route }) => {
    const { productId } = route.params;
    const product = useSelector<any, IProduct | undefined>(state => selectProductById(state, productId));
    const { image, product: name, points, createdAt } = product!;

    if(!product){
        navigation.navigate("NotFound");
    }

    const getDateLabel = () => {
        const momentDate = moment(createdAt);
        return `Comprado el ${momentDate.format("d")} de ${momentDate.format("MMMM, YYYY")}`
    }

    return (
        <>
            <SafeAreaContainer style={styles.statusBar} />
            <SafeAreaContainer style={{ paddingTop: 0 }}>
            <>
                <ScreenHeader title={name} style={styles.header} />
                <ScrollView style={styles.container}>
                    <View style={styles.imageContainer}>
                        <Image source={{ uri: image }} style={styles.image} />
                    </View>
                    <Text style={[styles.subtitle, { marginTop: 32, marginBottom: 19}]}>Detalles del producto:</Text>
                    <Text style={Styles.textTitleRegular}>{getDateLabel()}</Text>
                    <Text style={[styles.subtitle, { marginTop: 20, marginBottom: 32}]}>Con esta compra acumulaste:</Text>
                    <Text style={Styles.textTitleExtraLarge}>{Numeral(points).format("0,0")} puntos</Text>
                </ScrollView>
                <View style={styles.buttonContainer}>
                    <AppButton title='Aceptar' size='lg' onPress={() => navigation.goBack()} />
                </View>
            </>
            </SafeAreaContainer>
        </>
    )
}

export default ProductScreen;

const styles = StyleSheet.create({
    statusBar: {
        flex: 0,
        backgroundColor: Colors.violet,
    },
    header: {
        paddingTop: 66,
        paddingBottom: 24,
        backgroundColor: Colors.violet,
    },
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    imageContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        aspectRatio: 1,
        borderRadius: 10,
        marginTop: 19,
        backgroundColor: Colors.white,
        shadowColor: Colors.black,
        shadowOffset: {
            width: 2,
            height: 6,
        },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 3,
    },
    image: {
        width: 200,
        height: 200,
    },
    subtitle: {
        ...Styles.textTitleSmall,
        color: Colors.gray,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginBottom: 40,
        paddingHorizontal: 20,
    }
});
