import React from "react";
import { render, screen } from "@testing-library/react";
import BarChart from "../../../components/ChartTypes/BarChart";

test("renders bar chart with data", () => {
  const data = [10, 20, 30];
  const options = { width: 400, height: 300 };

  render(<BarChart data={data} options={options} />);
  expect(screen.getByText(/Bar Chart/i)).toBeInTheDocument();
});
