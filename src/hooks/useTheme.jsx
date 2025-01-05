import { useState, useEffect } from "react";

const useTheme = (initialTheme = "light") => {
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return [theme, setTheme, toggleTheme];
};

export default useTheme;
