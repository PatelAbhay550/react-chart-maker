export const drawBarChart = (ctx, data, options) => {
  const { width, height } = ctx.canvas;
  const barWidth = width / data.length;

  data.forEach((value, index) => {
    const barHeight = (value / Math.max(...data)) * height;
    ctx.fillStyle = options.color || "blue";
    ctx.fillRect(index * barWidth, height - barHeight, barWidth - 2, barHeight);
  });
};

export const drawPieChart = (ctx, data, options) => {
  const total = data.reduce((acc, value) => acc + value, 0);
  let startAngle = 0;

  data.forEach((value) => {
    const sliceAngle = (value / total) * 2 * Math.PI;
    ctx.fillStyle = generateRandomColor();
    ctx.beginPath();
    ctx.moveTo(ctx.canvas.width / 2, ctx.canvas.height / 2);
    ctx.arc(
      ctx.canvas.width / 2,
      ctx.canvas.height / 2,
      Math.min(ctx.canvas.width, ctx.canvas.height) / 2,
      startAngle,
      startAngle + sliceAngle
    );
    ctx.closePath();
    ctx.fill();
    startAngle += sliceAngle;
  });
};
