export class Stack<T> {
  private items: T[];

  constructor(initialItems?: T[]) {
    this.items = initialItems ? initialItems : [];
  }

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | null {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.pop() as T;
  }

  peek(): T | null {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }

  clear(): void {
    this.items = [];
  }
  toArray(): T[] {
    return this.items.slice();
  }
  print(): void {
    console.log(this.items.toString());
  }
}
