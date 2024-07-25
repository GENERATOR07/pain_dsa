export class Queue<T> {
  private items: T[];

  constructor(initialItems?: T[]) {
    this.items = initialItems ? initialItems : [];
  }

  enqueue(item: T): void {
    this.items.push(item);
  }

  dequeue(): T | null {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift() as T;
  }

  peek(): T | null {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[0];
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
