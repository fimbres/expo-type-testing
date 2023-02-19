import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react-native';

import { ProductImageBadge } from '.';

describe('<ProductImageBadge />', () => {
    it('render image correctly', () => {
        render(<ProductImageBadge productImageUri='https://loremflickr.com/640/480/people' />);
        const image = screen.getByTestId('product-image');
        expect(image).toBeDefined();
    });

    it('render correctly', () => {
        const tree = renderer
        .create(
            <ProductImageBadge productImageUri='https://loremflickr.com/640/480/people' />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
