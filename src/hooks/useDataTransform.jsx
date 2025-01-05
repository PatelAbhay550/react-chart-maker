import { useMemo } from "react";

const useDataTransform = (data, type) => {
  const transformedData = useMemo(() => {
    switch (type) {
      case "bar":
        return data?.yAxis?.map((y, index) => ({
          label: data.xAxis[index],
          value: y,
        }));
      case "line":
        return data?.xAxis?.map((x, index) => ({
          x,
          y: data.yAxis[index],
        }));
      case "pie":
        return data?.data?.map((value, index) => ({
          label: data.labels[index],
          value,
        }));
      default:
        return [];
    }
  }, [data, type]);

  return transformedData;
};

export default useDataTransform;
