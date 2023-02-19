import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react-native';

import { InformationLabel } from '.';

describe('<InformationLabel />', () => {
    it('render both texts correctly', () => {
        render(
            <InformationLabel
                primaryText='This is a test'
                secondaryText='And should pass'
                primaryTextStyle={{}}
                secondaryTextStyle={{}}
            />
        );

        const primaryText = screen.getByText('This is a test');
        const secondaryText = screen.getByText('And should pass');

        expect(primaryText).toBeDefined();
        expect(secondaryText).toBeDefined();
    });

    it('render correctly', () => {
        const tree = renderer
            .create(
                <InformationLabel
                primaryText='This is a test'
                secondaryText='And should pass'
                primaryTextStyle={{}}
                secondaryTextStyle={{}}
            />
            ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
