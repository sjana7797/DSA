import { LinkNode } from "./node";
const util = require("util");

export class LinkedList {
  head: LinkNode | null;
  constructor() {
    this.head = null;
  }

  [util.inspect.custom]() {
    let nodes = [];
    let current = this.head;
    while (current) {
      if (current === this.head) {
        nodes.push(`Head is ${current.value}`);
      } else if (current.nextNode === null) {
        nodes.push(`Tail is ${current.value}`);
      } else {
        nodes.push(`${current.value}`);
      }
      current = current.nextNode;
    }
    return nodes.join("->") || "";
  }
  isEmpty() {
    return this.head === null;
  }
  size() {
    let current = this.head;
    let count = 0;
    while (current) {
      count++;
      current = current.nextNode;
    }
    return count;
  }
  add(value: number) {
    const newNode = new LinkNode(value);
    newNode.nextNode = this.head;
    this.head = newNode;
  }
  search(key: number) {
    let current = this.head;
    while (current) {
      current.value === key ? current : (current = current.nextNode);
    }
    return null;
  }
  insert(index: number, value: number) {
    const newNode = new LinkNode(value);
    if (index === 0) {
      this.add(value);
    } else if (index > 0) {
      let current = this.head;
      let position = index;
      while (position > 1) {
        if (current) current = current.nextNode;
        position--;
      }
      if (newNode && current) {
        newNode.nextNode = current.nextNode;
        current.nextNode = newNode;
      }
    }
  }

  remove(index: number) {
    let current: LinkNode | null = this.head;
    let previous: LinkNode | null = null;
    if (index === 0) {
      if (current) {
        this.head = current.nextNode;
        return current;
      }
    } else if (index > 0) {
      let position = index;
      while (position > 0) {
        if (!current) return `Position provided is out of bound`;
        previous = current;
        current = current.nextNode;
        position--;
      }
      if (previous && current) {
        previous.nextNode = current.nextNode;
        console.log(`${current.value} has been removed from position ${index}`);
        return current;
      }
    } else {
      return `Please provide the correct position`;
    }
  }
}
