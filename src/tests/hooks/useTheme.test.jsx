import { renderHook, act } from "@testing-library/react";
import useTheme from "../../hooks/useTheme";

test("default theme is applied", () => {
  const { result } = renderHook(() => useTheme("light"));
  expect(result.current[0]).toBe("light");
});

test("theme changes correctly", () => {
  const { result } = renderHook(() => useTheme("light"));
  act(() => {
    result.current[1]("dark");
  });
  expect(result.current[0]).toBe("dark");
});
