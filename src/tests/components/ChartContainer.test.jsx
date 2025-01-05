import React from "react";
import { render, screen } from "@testing-library/react";
import ChartContainer from "../../components/ChartContainer";

test("renders error for unsupported chart type", () => {
  render(<ChartContainer type="unsupported" data={[]} options={{}} />);
  expect(screen.getByText(/error/i)).toBeInTheDocument();
});

test("renders BarChart component", () => {
  const mockData = [10, 20, 30];
  const mockOptions = { width: 400, height: 300 };

  render(<ChartContainer type="bar" data={mockData} options={mockOptions} />);
  expect(screen.getByText(/Bar Chart/i)).toBeInTheDocument();
});
