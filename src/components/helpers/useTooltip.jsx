import { useState, useEffect, useRef } from "react";

const useChartDimensions = (initialDimensions = {}) => {
  const ref = useRef();
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
    margin: { top: 20, right: 20, bottom: 40, left: 50 },
    ...initialDimensions,
  });

  useEffect(() => {
    const calculateDimensions = () => {
      if (!ref.current) return;

      const { width, height } = ref.current.getBoundingClientRect();
      setDimensions((prev) => ({
        ...prev,
        width: width - prev.margin.left - prev.margin.right,
        height: height - prev.margin.top - prev.margin.bottom,
      }));
    };

    calculateDimensions();

    const resizeObserver = new ResizeObserver(() => calculateDimensions());
    resizeObserver.observe(ref.current);

    return () => resizeObserver.disconnect();
  }, [ref]);

  return [ref, dimensions];
};

export default useChartDimensions;
