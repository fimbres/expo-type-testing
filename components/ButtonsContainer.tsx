import React, { FC } from 'react'
import { StyleSheet, View } from 'react-native'

import { Filter } from '../types';
import { AppButton } from './AppButton';

interface ButtonsContainerProps {
    filter: Filter;
    setFilter: (filter: Filter) => void;
}

export const ButtonsContainer: FC<ButtonsContainerProps> = ({ filter, setFilter }) => {
  return (
    <View style={styles.container}>
        {filter === "all" ? (
            <>
                <AppButton title="Ganados" onPress={() => setFilter("no-redemption")} />
                <View style={{ marginHorizontal: 6 }} />
                <AppButton title="Canjeados" onPress={() => setFilter("redemption")} />
            </>
        ) : (
            <AppButton title="Todos" size='lg' onPress={() => setFilter("all")} />
        )}
    </View>
)
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 40,
    }
})