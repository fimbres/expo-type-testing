/**
 * @jest-environment jsdom
 */
import React from "react";
import { act, render, waitFor } from "@testing-library/react-native";

import Navigation from "./";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { apiSlice } from "../slices/apiSlice";

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper.js");
jest.mock("expo-linking");

describe("<Navigation />", () => {
  test("navigation should render the HomeScreen first", async () => {
    await act(async () => {
      const { getByText } = await waitFor(() =>
        render(
          <ApiProvider api={apiSlice}>
            <Navigation />
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
  });
});
