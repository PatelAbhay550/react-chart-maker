// Default Light Theme
export const lightTheme = {
    chartBackground: "#ffffff",
    textColor: "#000000",
    axisColor: "#4A4A4A",
    gridColor: "#E0E0E0",
    primaryColor: "#4A90E2", // Blue for chart elements
    secondaryColor: "#7ED321", // Green for secondary elements
    tooltipBackground: "rgba(0, 0, 0, 0.7)",
    tooltipTextColor: "#ffffff",
    fontFamily: "'Helvetica', 'Arial', sans-serif",
  };
  
  // Default Dark Theme
  export const darkTheme = {
    chartBackground: "#2C2C2C",
    textColor: "#ffffff",
    axisColor: "#B0B0B0",
    gridColor: "#4A4A4A",
    primaryColor: "#4A90E2", // Blue for chart elements
    secondaryColor: "#7ED321", // Green for secondary elements
    tooltipBackground: "rgba(0, 0, 0, 0.8)",
    tooltipTextColor: "#ffffff",
    fontFamily: "'Helvetica', 'Arial', sans-serif",
  };
  
  // Customizable Theme Example
  export const customTheme = (primaryColor = "#F5A623", secondaryColor = "#7ED321") => ({
    chartBackground: "#ffffff",
    textColor: "#000000",
    axisColor: "#4A4A4A",
    gridColor: "#E0E0E0",
    primaryColor: primaryColor,  // Use passed primary color
    secondaryColor: secondaryColor, // Use passed secondary color
    tooltipBackground: "rgba(0, 0, 0, 0.7)",
    tooltipTextColor: "#ffffff",
    fontFamily: "'Helvetica', 'Arial', sans-serif",
  });
  
  // Export all themes
  export const themes = {
    light: lightTheme,
    dark: darkTheme,
    custom: customTheme,
  };
  