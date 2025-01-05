export const normalizeData = (data, schema) => {
  // Normalize data to match schema
  return data.map((item) => ({
    ...item,
    normalized: true,
  }));
};
