import { checkSorted } from "../test/checkSorted";
import { mergeSort } from "./sort";

const array = [
  32, 232, 12, 547, 123, 75, 21, 745, 122, 990, 12, 0, 21, 77, 42, 87,
];
console.log(array);
console.log(checkSorted(array));

const sortedArray = mergeSort(array);

console.log(sortedArray);

console.log(checkSorted(sortedArray));
