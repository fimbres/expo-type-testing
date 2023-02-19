import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react-native';

import { ScreenHeader } from '.';

describe('<ScreenHeader />', () => {
    it('render both texts correctly', () => {
        render(
            <ScreenHeader
                title='This is a title'
                subtitle='This is a subtitle'
            />
        );

        const title = screen.getByText('This is a title');
        const subtitle = screen.getByText('This is a subtitle');

        expect(title).toBeDefined();
        expect(subtitle).toBeDefined();
    });

    it('render correctly', () => {
        const tree = renderer
            .create(
                <ScreenHeader
                    title='This is a title'
                    subtitle='This is a subtitle'
                />
            ).toJSON();
        expect(tree.children.length).toBe(2);
        expect(tree).toMatchSnapshot();
    });
});
