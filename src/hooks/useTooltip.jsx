import { useState, useCallback } from "react";

const useTooltip = () => {
  const [tooltip, setTooltip] = useState({
    visible: false,
    x: 0,
    y: 0,
    content: "",
  });

  // Function to show tooltip with dynamic position and content
  const showTooltip = useCallback((x, y, content) => {
    setTooltip({
      visible: true,
      x,
      y,
      content,
    });
  }, []);

  // Function to hide tooltip
  const hideTooltip = useCallback(() => {
    setTooltip({
      visible: false,
      x: 0,
      y: 0,
      content: "",
    });
  }, []);

  // Tooltip styles (positioned absolutely, invisible when not visible)
  const tooltipStyles = {
    position: "absolute",
    top: `${tooltip.y}px`,
    left: `${tooltip.x}px`,
    background: "rgba(0, 0, 0, 0.7)",
    color: "white",
    padding: "8px",
    borderRadius: "4px",
    pointerEvents: "none",
    display: tooltip.visible ? "block" : "none",
    zIndex: 1000,
    transform: "translate(-50%, -100%)", // Adjust positioning to avoid overlap
    whiteSpace: "nowrap", // Prevent text from wrapping
  };

  return { tooltip, showTooltip, hideTooltip, tooltipStyles };
};

export default useTooltip;
