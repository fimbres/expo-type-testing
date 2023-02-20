import React from "react";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react-native";

import { ScreenFooter } from ".";
import { AppButton } from "../AppButton";

describe("<ScreenFooter />", () => {
  it("render children correctly", () => {
    render(
      <ScreenFooter>
        <AppButton title="Test One" onPress={console.log} />
        <AppButton title="Test Two" onPress={console.log} />
      </ScreenFooter>
    );

    const firstText = screen.getByText("Test One");
    const secondText = screen.getByText("Test Two");

    expect(firstText).toBeDefined();
    expect(secondText).toBeDefined();
  });

  it("render correctly", () => {
    const tree = renderer
      .create(
        <ScreenFooter>
          <AppButton title="Test One" onPress={console.log} />
          <AppButton title="Test Two" onPress={console.log} />
        </ScreenFooter>
      )
      .toJSON();
    expect(tree.children.length).toBe(2);
    expect(tree).toMatchSnapshot();
  });
});
