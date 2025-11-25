/**
 * 计算“漂亮”的刻度间隔和数值
 * 基于图形学常用的 Nice Numbers 算法
 */

function niceNum(range: number, round: boolean): number {
  const exponent = Math.floor(Math.log10(range));
  const fraction = range / Math.pow(10, exponent);
  let niceFraction: number;

  if (round) {
    if (fraction < 1.5) niceFraction = 1;
    else if (fraction < 3) niceFraction = 2;
    else if (fraction < 7) niceFraction = 5;
    else niceFraction = 10;
  } else {
    if (fraction <= 1) niceFraction = 1;
    else if (fraction <= 2) niceFraction = 2;
    else if (fraction <= 5) niceFraction = 5;
    else niceFraction = 10;
  }

  return niceFraction * Math.pow(10, exponent);
}

export function calculateTicks(min: number, max: number, maxTicks: number = 10): number[] {
  if (min === max) return [min];
  
  const range = niceNum(max - min, false);
  const tickSpacing = niceNum(range / (maxTicks - 1), true);
  
  const niceMin = Math.ceil(min / tickSpacing) * tickSpacing;
  const niceMax = Math.floor(max / tickSpacing) * tickSpacing;

  const ticks: number[] = [];
  // 使用 epsilon 避免浮点数精度问题
  const epsilon = tickSpacing / 10000;
  
  for (let x = niceMin; x <= niceMax + epsilon; x += tickSpacing) {
    // 处理 -0 的情况
    const val = Math.abs(x) < epsilon ? 0 : x;
    ticks.push(val);
  }
  
  return ticks;
}

