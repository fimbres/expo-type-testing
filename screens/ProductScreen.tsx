import React, { FC } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useSelector } from 'react-redux'

import { Colors, Styles } from '../constants'
import { IProduct, RootState } from '../types'
import { RootStackParamList } from '../navigation/types'
import { AppButton, ProductImageBadge, SafeAreaContainer, InformationLabel, ScreenHeader, ScreenFooter } from '../components'
import { selectProductById } from '../slices/productsSlice'
import { getDateLabel, getFormattedPoints } from '../utils/formats';

const ProductScreen: FC<NativeStackScreenProps<RootStackParamList, "Product">> = ({ navigation, route }) => {
    const { productId } = route.params;
    const product = useSelector<RootState, IProduct | undefined>(state => selectProductById(state, productId));
    const { image, product: name, points, createdAt } = product!;

    if(!product){
        navigation.navigate("NotFound");
    }

    return (
        <>
            <SafeAreaContainer style={styles.statusBar} />
            <SafeAreaContainer style={{ paddingTop: 0 }}>
                <>
                    <ScreenHeader title={name} style={styles.header} />
                    <ScrollView style={styles.container}>
                        <ProductImageBadge productImageUri={image} />
                        <InformationLabel
                            primaryText="Detalles del producto:"
                            primaryTextStyle={{ marginTop: 32, marginBottom: 19 }}
                            secondaryText={`Comprado el ${getDateLabel(createdAt)}`}
                            secondaryTextStyle={Styles.textTitleRegular}
                        />
                        <InformationLabel
                            primaryText="Con esta compra acumulaste:"
                            primaryTextStyle={{ marginTop: 20, marginBottom: 32 }}
                            secondaryText={`${getFormattedPoints(points)} puntos`}
                            secondaryTextStyle={Styles.textTitleExtraLarge}
                        />
                    </ScrollView>
                    <ScreenFooter style={{ paddingHorizontal: 20 }}>
                        <AppButton title='Aceptar' size='lg' onPress={() => navigation.goBack()} />
                    </ScreenFooter>
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
    buttonContainer: {
        flexDirection: 'row',
        marginBottom: 40,
        paddingHorizontal: 20,
    }
});
