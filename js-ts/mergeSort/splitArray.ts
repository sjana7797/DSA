export function splitArray(arr: number[]) {
  const midPoint = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, midPoint);
  const rightHalf = arr.slice(midPoint);

  return { leftHalf, rightHalf };
}
