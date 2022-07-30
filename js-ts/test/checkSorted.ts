export function checkSorted(a: number[]): boolean {
  const length = a.length;
  if (length === 0 || length === 1) {
    return true;
  }
  return a[0] <= a[1] && checkSorted(a.slice(1));
}
