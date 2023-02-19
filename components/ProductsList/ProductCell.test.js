import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react-native';

import { ProductCell } from './ProductCell';

const testProduct = {
    createdAt: "2022-12-08T18:54:56.243Z",
    id: 5,
    image: "https://loremflickr.com/640/480/people",
    is_redemption: true,
    points: 69814,
    product: "Rustic Rubber Bacon",
};

describe('<ProductCell />', () => {
    it('render items correctly', () => {
        render(
            <ProductCell
                product={testProduct}
                onPress={() => console.log("onPress")}
            />
        );

        const productName = screen.getByText('Rustic Rubber Bacon');
        const dateLabel = screen.getByText('4 de diciembre, 2022');
        const pointsText = screen.getByText('-69,814');

        expect(productName).toBeDefined();
        expect(dateLabel).toBeDefined();
        expect(pointsText).toBeDefined();
    });

    it('renders correctly', () => {
        const tree = renderer
            .create(
                <ProductCell
                    product={testProduct}
                    onPress={() => console.log("onPress")}
                />
            ).toJSON();
        expect(tree.children.length).toBe(2);
        expect(tree).toMatchSnapshot();
    });
});
