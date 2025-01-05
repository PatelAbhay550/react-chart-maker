const slideIn = {
  keyframes: `
      @keyframes slideIn {
        from {
          transform: translateY(100%);
        }
        to {
          transform: translateY(0);
        }
      }
    `,
  animation: "slideIn 0.5s ease-in-out",
};

export default slideIn;
