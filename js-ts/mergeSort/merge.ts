/*
 * @return Array of number
 */
export function merge(left: number[], right: number[]) {
  const a: number[] = [];

  let i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      a.push(left[i]);
      i++;
    } else {
      a.push(right[j]);
      j++;
    }
  }

  while (i < left.length) {
    a.push(left[i]);
    i++;
  }

  while (j < right.length) {
    a.push(right[j]);
    j++;
  }

  return a;
}
