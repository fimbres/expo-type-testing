import React from "react";
import renderer from "react-test-renderer";

import { FilterButtons } from ".";

describe("<FilterButtons />", () => {
  it("render correctly filter different than all", () => {
    const tree = renderer
      .create(
        <FilterButtons
          filter="redemption"
          setFilter={(filter) => console.log(filter)}
        />
      )
      .toJSON();
    expect(tree.children.length).toBe(1);
    expect(tree).toMatchSnapshot();
  });

  it("render correctly filter all", () => {
    const tree = renderer
      .create(
        <FilterButtons
          filter="all"
          setFilter={(filter) => console.log(filter)}
        />
      )
      .toJSON();
    expect(tree.children).toBeUndefined();
    expect(tree).toMatchSnapshot();
  });
});
