import React from "react";

const PieChart = ({ data, options }) => {
  return (
    <div style={{ width: options.width, height: options.height }}>
      <h3>Pie Chart</h3>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default PieChart;
