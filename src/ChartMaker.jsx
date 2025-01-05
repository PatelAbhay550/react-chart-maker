import React, { useState, useEffect } from "react";
import { themes } from "../themes"; // Import themes
import useTooltip from "../hooks/useTooltip"; // Tooltip hook
import { randomIdGenerator } from "../utils/randomIdGenerator"; // Random ID generator
import { fadeIn } from "../animations"; // Example animation (fadeIn)
import PropTypes from "prop-types"; // For type-checking props

const ChartMaker = ({
  data,
  type = "bar", // Default chart type
  theme = "light", // Default theme
  width = 400,
  height = 300,
  tooltipFormatter = (value) => `Value: ${value}`, // Custom tooltip formatter
  animation = fadeIn(800), // Default animation for chart
}) => {
  const [currentTheme, setCurrentTheme] = useState(themes[theme]);
  const { tooltip, showTooltip, hideTooltip, tooltipStyles } = useTooltip();

  // Generate a unique ID for the chart element
  const chartId = randomIdGenerator(12);

  // Apply theme styles
  const chartStyles = {
    backgroundColor: currentTheme.chartBackground,
    color: currentTheme.textColor,
    fontFamily: currentTheme.fontFamily,
    ...animation, // Apply animation
  };

  useEffect(() => {
    // Update the theme when the `theme` prop changes
    setCurrentTheme(themes[theme]);
  }, [theme]);

  const handleMouseOver = (event, value) => {
    const { clientX, clientY } = event;
    showTooltip(clientX, clientY, tooltipFormatter(value));
  };

  const handleMouseOut = () => {
    hideTooltip();
  };

  // Render different chart types (e.g., bar, line, pie)
  const renderChart = () => {
    switch (type) {
      case "bar":
        return data.map((d, index) => (
          <rect
            key={index}
            x={index * 50}
            y={height - d.value * 10}
            width={40}
            height={d.value * 10}
            fill={currentTheme.primaryColor}
            onMouseOver={(e) => handleMouseOver(e, d.value)}
            onMouseOut={handleMouseOut}
          />
        ));
      case "line":
        return (
          <polyline
            points={data
              .map((d, index) => `${index * 50},${height - d.value * 10}`)
              .join(" ")}
            fill="none"
            stroke={currentTheme.primaryColor}
            strokeWidth="2"
          />
        );
      case "pie":
        // Implement pie chart rendering logic here
        return <circle cx="200" cy="150" r="100" fill={currentTheme.primaryColor} />;
      default:
        return null;
    }
  };

  return (
    <div style={chartStyles} id={chartId}>
      <svg width={width} height={height}>
        {renderChart()}
      </svg>
      <div style={tooltipStyles}>{tooltip.content}</div>
    </div>
  );
};

// PropTypes for type-checking
ChartMaker.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
  type: PropTypes.oneOf(["bar", "line", "pie"]),
  theme: PropTypes.oneOf(["light", "dark", "custom"]),
  width: PropTypes.number,
  height: PropTypes.number,
  tooltipFormatter: PropTypes.func,
  animation: PropTypes.object,
};

export default ChartMaker;
