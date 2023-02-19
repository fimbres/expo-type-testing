import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react-native';

import NotFoundScreen from '.';

describe('<NotFoundScreen />', () => {
    it('render text correctly', () => {
        render(
            <NotFoundScreen />
        );

        const firstText = screen.getByText('Lo Sentimos!');
        const secondText = screen.getByText('El producto que seleccionaste no existe');
        const thirdText = screen.getByText('Volver a Inicio');

        expect(firstText).toBeDefined();
        expect(secondText).toBeDefined();
        expect(thirdText).toBeDefined();
    });

    it('renders correctly', () => {
        const tree = renderer
        .create(
            <NotFoundScreen />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
