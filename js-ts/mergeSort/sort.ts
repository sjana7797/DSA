import { merge } from "./merge";
import { splitArray } from "./splitArray";

/*
 * @summary used to sort the array in ascending order
 * @param a Array of number
 */
export function mergeSort(a: number[]): number[] {
  if (a.length <= 1) {
    return a;
  }

  const { leftHalf, rightHalf } = splitArray(a);

  const left = mergeSort(leftHalf);
  const right = mergeSort(rightHalf);

  return merge(left, right);
}
