import validateSchema from "../../schemas/validateSchema";
import barChartSchema from "../../schemas/barChartSchema.json";

test("validates correct data against schema", () => {
  const validData = {
    xAxis: ["A", "B", "C"],
    yAxis: [10, 20, 30],
  };

  expect(() => validateSchema(validData, barChartSchema)).not.toThrow();
});

test("throws error for invalid data", () => {
  const invalidData = {
    xAxis: ["A", "B", "C"],
  };

  expect(() => validateSchema(invalidData, barChartSchema)).toThrow(
    "Invalid chart configuration."
  );
});
