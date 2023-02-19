import React from 'react';
import renderer from 'react-test-renderer';

import { Loader } from '.';

let tree;

describe('<Loader />', () => {
    beforeEach(() => {
        tree = renderer
            .create(
                <Loader />
            ).toJSON();
    });

    it('have 1 children', () => {
        expect(tree.children.length).toBe(1);
        expect(tree).toMatchSnapshot();
    });

    it('render correctly', () => {
        expect(tree).toBeDefined();
        expect(tree).toMatchSnapshot();
    });
});
