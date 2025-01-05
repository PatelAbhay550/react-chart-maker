import { generateRandomColor, shadeColor } from "../../utils/colorUtils";

test("generateRandomColor generates valid hex color", () => {
  const color = generateRandomColor();
  expect(color).toMatch(/^#[0-9A-F]{6}$/i);
});

test("shadeColor modifies color brightness", () => {
  const color = "#123456";
  const shadedColor = shadeColor(color, 20);
  expect(shadedColor).toMatch(/^#[0-9A-F]{6}$/i);
});
