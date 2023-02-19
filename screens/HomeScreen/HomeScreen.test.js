import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen, fireEvent, act } from '@testing-library/react-native';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';

import HomeScreen from '.';
import { apiSlice } from '../../slices/apiSlice';

describe('<HomeScreen />', () => {
    it('render text correctly', () => {
        render(
            <ApiProvider api={apiSlice}>
                <HomeScreen route={{ params: { initialFilter: "all" }}} />
            </ApiProvider>
        );

        const firstText = screen.getByText('Bienvenido de vuelta!');
        const secondText = screen.getByText('Ruben Rodriguez');
        const thirdText = screen.getByText('Tus Puntos');
        const fourthText = screen.getByText('Tus Movimientos');

        expect(firstText).toBeDefined();
        expect(secondText).toBeDefined();
        expect(thirdText).toBeDefined();
        expect(fourthText).toBeDefined();
    });

    it('press filter buttons', () => {
        const { getAllByTestId } = render(
            <ApiProvider api={apiSlice}>
                <HomeScreen route={{ params: { initialFilter: "redemption" }}}/>
            </ApiProvider>
        );

        const button = getAllByTestId('app-button');

        act(() => {
            fireEvent.press(button[0]);
        })
    });

    it('renders correctly', () => {
        const tree = renderer
        .create(
            <ApiProvider api={apiSlice}>
                <HomeScreen route={{ params: { initialFilter: "all" }}} />
            </ApiProvider>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
