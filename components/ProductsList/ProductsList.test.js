import React from 'react';
import renderer from 'react-test-renderer';

import { ProductsList } from '.';

const testProducts = [
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
    it('has 1 child', () => {
        const tree = renderer
            .create(
                <ProductsList
                    product={testProducts}
                    onPress={(id) => console.log("onPress", id)}
                />
            ).toJSON();
        expect(tree.children.length).toBe(1);
    });

    it('renders correctly', () => {
        const tree = renderer
            .create(
                <ProductsList
                    product={testProducts}
                    onPress={(id) => console.log("onPress", id)}
                />
            ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});