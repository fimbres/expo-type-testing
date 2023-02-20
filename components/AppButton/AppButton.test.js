import React from "react";
import renderer from "react-test-renderer";

import { AppButton } from ".";

let tree;

describe("<AppButton />", () => {
  beforeEach(() => {
    tree = renderer
      .create(
        <AppButton
          title="Test Me"
          size="md"
          onPress={() => console.log("onPress")}
        />
      )
      .toJSON();
  });

  it("is defined", () => {
    expect(tree).toBeDefined();
  });

  it("has 1 child", () => {
    expect(tree.children.length).toBe(1);
  });

  it("renders correctly", () => {
    expect(tree).toMatchSnapshot();
  });
});
