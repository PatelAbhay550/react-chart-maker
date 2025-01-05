import React from "react";
import ChartContainer from "./components/ChartContainer";

const ChartMaker = ({ type, data, options }) => {
  return <ChartContainer type={type} data={data} options={options} />;
};

export default ChartMaker;
