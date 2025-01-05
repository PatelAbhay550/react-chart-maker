import { renderHook } from "@testing-library/react";
import useResizeObserver from "../../hooks/useResizeObserver";
import { createRef } from "react";

test("returns initial dimensions", () => {
  const ref = createRef();
  const { result } = renderHook(() => useResizeObserver(ref));

  expect(result.current).toEqual({ width: 0, height: 0 });
});
