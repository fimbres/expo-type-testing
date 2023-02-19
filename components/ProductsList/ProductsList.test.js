import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react-native';

import { ProductsList } from '.';

const testProducts = [
    {
        createdAt: "2022-12-08T18:54:56.243Z",
        id: 5,
        image: "https://loremflickr.com/640/480/people",
        is_redemption: true,
        points: 69814,
        product: "Rustic Rubber Bacon",
    },
    {
        createdAt: "2022-12-08T18:54:56.243Z",
        id: 5,
        image: "https://loremflickr.com/640/480/people",
        is_redemption: true,
        points: 69814,
        product: "Rustic Rubber Bacon",
    },
    {
        createdAt: "2022-12-08T18:54:56.243Z",
        id: 5,
        image: "https://loremflickr.com/640/480/people",
        is_redemption: true,
        points: 69814,
        product: "Rustic Rubber Bacon",
    }
];

describe('<ProductList />', () => {
    it('render empty state correctly', () => {
        render(
            <ProductsList
                product={[]}
                onPress={(id) => console.log("onPress", id)}
            />
        );

        const primaryText = screen.getByText('No hay movimientos registrados');
        const secondaryText = screen.getByText('Realiza una compra y vuelve más tarde');

        expect(primaryText).toBeDefined();
        expect(secondaryText).toBeDefined();
    });

    it('renders correctly', () => {
        const tree = renderer
        .create(
            <ProductsList
                product={testProducts}
                onPress={(id) => console.log("onPress", id)}
            />
        ).toJSON();

        expect(tree.children.length).toBe(1);
        expect(tree).toMatchSnapshot();
    });
});
