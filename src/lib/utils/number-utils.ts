export const clamp = (value: number, max: number, min = 0) => {
  if (value < min ) return min;
  if (value > max) return max;
  return value;
}
