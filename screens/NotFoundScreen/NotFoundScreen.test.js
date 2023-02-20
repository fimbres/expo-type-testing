import React from "react";
import renderer from "react-test-renderer";
import { render, screen, fireEvent } from "@testing-library/react-native";

import NotFoundScreen from ".";

describe("<NotFoundScreen />", () => {
  it("render text correctly", () => {
    render(<NotFoundScreen />);

    const firstText = screen.getByText("Lo Sentimos!");
    const secondText = screen.getByText(
      "El producto que seleccionaste no existe"
    );
    const thirdText = screen.getByText("Volver a Inicio");

    expect(firstText).toBeDefined();
    expect(secondText).toBeDefined();
    expect(thirdText).toBeDefined();
  });

  it("press button", () => {
    const navigation = {
      navigate: () => {},
    };

    spyOn(navigation, "navigate");

    const { getByTestId } = render(<NotFoundScreen navigation={navigation} />);

    const button = getByTestId("app-button");

    fireEvent.press(button);

    expect(navigation.navigate).toHaveBeenCalledWith("Home", {
      initialFilter: "all",
    });
  });

  it("renders correctly", () => {
    const tree = renderer.create(<NotFoundScreen />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
