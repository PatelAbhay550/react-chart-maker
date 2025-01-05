// Fade In Animation
export const fadeIn = (duration = 500) => {
    return {
      animation: `fadeIn ${duration}ms ease-in-out`,
    };
  };
  
  // Slide In from the left
  export const slideInLeft = (duration = 500) => {
    return {
      animation: `slideInLeft ${duration}ms ease-out`,
    };
  };
  
  // Slide In from the right
  export const slideInRight = (duration = 500) => {
    return {
      animation: `slideInRight ${duration}ms ease-out`,
    };
  };
  
  // Bounce In Animation
  export const bounceIn = (duration = 500) => {
    return {
      animation: `bounceIn ${duration}ms ease-out`,
    };
  };
  
  // Rotate Animation
  export const rotate = (duration = 500) => {
    return {
      animation: `rotate ${duration}ms ease-in-out`,
    };
  };
  
  // Define Keyframes for Animations
  export const animationStyles = `
    @keyframes fadeIn {
      0% { opacity: 0; }
      100% { opacity: 1; }
    }
  
    @keyframes slideInLeft {
      0% { transform: translateX(-100%); opacity: 0; }
      100% { transform: translateX(0); opacity: 1; }
    }
  
    @keyframes slideInRight {
      0% { transform: translateX(100%); opacity: 0; }
      100% { transform: translateX(0); opacity: 1; }
    }
  
    @keyframes bounceIn {
      0% { transform: scale(0); opacity: 0; }
      60% { transform: scale(1.2); opacity: 1; }
      100% { transform: scale(1); }
    }
  
    @keyframes rotate {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;
  
  