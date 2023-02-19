import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react-native';

import { PointsBadge } from '.';

describe('<PointsBadge />', () => {
    it('render text correctly', () => {
        render(<PointsBadge points={1000} />);
        const text = screen.getByText('1,000.00 pts');
        expect(text).toBeDefined();
    });

    it('render correctly', () => {
        const tree = renderer
        .create(
            <PointsBadge points={1000} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
