import React, { FC } from 'react'
import { View } from 'react-native'

import { Filter } from '../../types';
import { AppButton } from '../AppButton'

interface FilterButtonsProps {
    filter: Filter;
    setFilter: (filter: Filter) => void;
}

export const FilterButtons: FC<FilterButtonsProps> = ({ filter, setFilter }) => {
  return filter === "all" ?
    (
        <>
            <AppButton title="Ganados" onPress={() => setFilter("no-redemption")} />
            <View style={{ marginHorizontal: 6 }} />
            <AppButton title="Canjeados" onPress={() => setFilter("redemption")} />
        </>
    ) : (
        <AppButton title="Todos" size='lg' onPress={() => setFilter("all")} />
    )
}
