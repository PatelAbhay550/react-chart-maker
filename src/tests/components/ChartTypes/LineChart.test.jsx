import React from "react";
import { render, screen } from "@testing-library/react";
import LineChart from "../../../components/ChartTypes/LineChart";

test("renders line chart with data", () => {
  const data = [10, 20, 30];
  const options = { width: 400, height: 300 };

  render(<LineChart data={data} options={options} />);
  expect(screen.getByText(/Line Chart/i)).toBeInTheDocument();
});
