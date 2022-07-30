export class LinkNode {
  value: number | null = null;
  nextNode: LinkNode | null = null;
  constructor(value: number) {
    this.value = value;
  }
}
