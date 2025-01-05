import React from "react";

const BarChart = ({ data, options }) => {
  // Render bar chart using canvas/SVG
  return (
    <div style={{ width: options.width, height: options.height }}>
      {/* Replace this with actual chart rendering */}
      <h3>Bar Chart</h3>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default BarChart;
