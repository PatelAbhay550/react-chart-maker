import React from "react";
import { render, screen } from "@testing-library/react";
import PieChart from "../../../components/ChartTypes/PieChart";

test("renders pie chart with data", () => {
  const data = [10, 20, 30];
  const options = { width: 400, height: 300 };

  render(<PieChart data={data} options={options} />);
  expect(screen.getByText(/Pie Chart/i)).toBeInTheDocument();
});
