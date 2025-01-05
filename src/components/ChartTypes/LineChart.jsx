import React from "react";

const LineChart = ({ data, options }) => {
  return (
    <div style={{ width: options.width, height: options.height }}>
      <h3>Line Chart</h3>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default LineChart;
