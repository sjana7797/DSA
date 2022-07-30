import { LinkedList } from "./list";

const list = new LinkedList();

list.add(5);
list.add(34);
list.add(77);
list.add(2);
list.add(666);
list.add(12222);

console.log(list);

list.remove(3);

console.log(list);
