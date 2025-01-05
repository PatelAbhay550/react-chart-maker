import { useState, useEffect } from "react";

const useAnimation = (animationType = "fadeIn", duration = 300) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), duration);
    return () => clearTimeout(timer);
  }, [animationType, duration]);

  const animationClass = isAnimating ? `animate-${animationType}` : "";

  return animationClass;
};

export default useAnimation;
