import { getDateLabel, getFormattedPoints } from "./formats";

describe("Formats", () => {
  it("format date correctly", () => {
    const dateLabel = getDateLabel("2022-12-08T18:54:56.243Z");

    expect(dateLabel).toBeDefined();
    expect(dateLabel).toBe("4 de diciembre, 2022");
  });

  it("format points correctly", () => {
    const pointsLabel = getFormattedPoints(10000);

    expect(pointsLabel).toBeDefined();
    expect(pointsLabel).toBe("10,000");
  });
});
