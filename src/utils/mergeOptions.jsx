export const mergeOptions = (defaultOptions, userOptions) => {
  return {
    ...defaultOptions,
    ...userOptions,
    grid: {
      ...defaultOptions.grid,
      ...userOptions.grid,
    },
  };
};
