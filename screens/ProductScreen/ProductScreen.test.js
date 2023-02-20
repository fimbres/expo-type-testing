/**
 * @jest-environment jsdom
 */
import React from "react";
import renderer from "react-test-renderer";
import { render, screen, fireEvent } from "@testing-library/react-native";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";

import ProductScreen from ".";
import { apiSlice } from "../../slices/apiSlice";

const product = {
  createdAt: "2022-12-08T18:54:56.243Z",
  id: 5,
  image: "https://loremflickr.com/640/480/people",
  is_redemption: true,
  points: 69814,
  product: "Rustic Rubber Bacon",
};

describe("<ProductScreen />", () => {
  it("render text correctly", () => {
    render(
      <ApiProvider api={apiSlice}>
        <ProductScreen route={{ params: { product } }} />
      </ApiProvider>
    );

    const firstText = screen.getByText("Detalles del producto:");
    const secondText = screen.getByText("Con esta compra acumulaste:");
    const thirdText = screen.getByText("Aceptar");

    expect(firstText).toBeDefined();
    expect(secondText).toBeDefined();
    expect(thirdText).toBeDefined();
  });

  it("press button", () => {
    const navigation = {
      goBack: () => {},
    };

    spyOn(navigation, "goBack");

    const { getByTestId } = render(
      <ApiProvider api={apiSlice}>
        <ProductScreen
          navigation={navigation}
          route={{ params: { product } }}
        />
      </ApiProvider>
    );

    const button = getByTestId("app-button");

    fireEvent.press(button);

    expect(navigation.goBack).toHaveBeenCalled();
  });

  it("renders correctly", () => {
    const tree = renderer
      .create(
        <ApiProvider api={apiSlice}>
          <ProductScreen route={{ params: { product } }} />
        </ApiProvider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
