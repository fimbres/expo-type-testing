/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";

import HomeScreen from ".";
import { apiSlice } from "../../slices/apiSlice";

describe("<HomeScreen />", () => {
  it("render text correctly", async () => {
    const { getByText } = await waitFor(() =>
      render(
        <ApiProvider api={apiSlice}>
          <HomeScreen route={{ params: { initialFilter: "all" } }} />
        </ApiProvider>
      )
    );

    const firstText = getByText("Bienvenido de vuelta!");
    const secondText = getByText("Ruben Rodriguez");
    const thirdText = getByText("Tus Puntos");
    const fourthText = getByText("Tus Movimientos");

    expect(firstText).toBeDefined();
    expect(secondText).toBeDefined();
    expect(thirdText).toBeDefined();
    expect(fourthText).toBeDefined();
  });

  it("press filter buttons", async () => {
    const { getAllByTestId } = await waitFor(() =>
      render(
        <ApiProvider api={apiSlice}>
          <HomeScreen route={{ params: { initialFilter: "all" } }} />
        </ApiProvider>
      )
    );

    const button = getAllByTestId("app-button");

    fireEvent.press(button[0]);
  });

  it("renders correctly", async () => {
    const tree = await waitFor(() =>
      render(
        <ApiProvider api={apiSlice}>
          <HomeScreen route={{ params: { initialFilter: "all" } }} />
        </ApiProvider>
      )
    );

    expect(tree).toMatchSnapshot();
  });
});
