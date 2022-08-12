export function binarySearch(arr: number[], target: number): boolean {
  const length = arr.length;
  let start = 0;
  let end = length - 1;
  let midPoint = Math.floor(end / 2);
  while (midPoint >= 0) {
    if (target === arr[midPoint]) {
      return true;
    } else if (target <= arr[midPoint]) {
      end = midPoint - 1;
    } else {
      start = midPoint + 1;
    }
    if (start > end) {
      return false;
    }
    midPoint = Math.floor((start + end) / 2);
  }
  return false;
}
