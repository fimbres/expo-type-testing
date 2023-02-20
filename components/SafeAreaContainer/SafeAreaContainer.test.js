import React from "react";
import { Text } from "react-native";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react-native";

import { SafeAreaContainer } from ".";

describe("<SafeAreaContainer />", () => {
  it("render children correctly", () => {
    render(
      <SafeAreaContainer>
        <Text>This is a test</Text>
      </SafeAreaContainer>
    );

    const primaryText = screen.getByText("This is a test");

    expect(primaryText).toBeDefined();
  });

  it("render correctly", () => {
    const tree = renderer
      .create(
        <SafeAreaContainer>
          <Text>This is a test</Text>
        </SafeAreaContainer>
      )
      .toJSON();
    expect(tree.children.length).toBe(1);
    expect(tree).toMatchSnapshot();
  });
});
