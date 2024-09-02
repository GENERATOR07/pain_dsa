abstract class Heap<T> {
  protected heap: T[];
  constructor() {
    this.heap = [];
  }
  peek(): T | null {
    return this.isEmpty() ? null : this.heap[0];
  }
  size(): number {
    return this.heap.length;
  }

  isEmpty(): boolean {
    return this.heap.length === 0;
  }
  insert(val: T) {
    this.heap.push(val);
    this.bubbleUp();
  }

  extract(): T | null {
    if (this.isEmpty()) return null;
    if (this.size() === 1) return this.heap.pop()!;
    const root = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.bubbleDown();
    return root;
  }

  showHeap(): T[] {
    return this.heap;
  }

  protected abstract bubbleUp(): void;

  protected abstract bubbleDown(): void;
}

export class MinHeap<T> extends Heap<T> {
  protected bubbleUp() {
    let index = this.size() - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] <= this.heap[index]) {
        break;
      }
      [this.heap[index], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[index],
      ];
      index = parentIndex;
    }
  }

  protected bubbleDown() {
    let index = 0;
    const length = this.size();
    while (true) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let swap: number | null = null;

      if (leftChildIndex < length) {
        if (this.heap[leftChildIndex] < this.heap[index]) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        if (
          (swap === null && this.heap[rightChildIndex] < this.heap[index]) ||
          (swap !== null &&
            this.heap[rightChildIndex] < this.heap[leftChildIndex])
        ) {
          swap = rightChildIndex;
        }
      }
      if (swap === null) break;

      [this.heap[index], this.heap[swap]] = [this.heap[swap], this.heap[index]];
      index = swap;
    }
  }
}

export class MaxHeap<T> extends Heap<T> {
  protected bubbleUp() {
    let index = this.size() - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] >= this.heap[index]) {
        break;
      }
      [this.heap[index], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[index],
      ];
      index = parentIndex;
    }
  }

  protected bubbleDown() {
    let index = 0;
    const length = this.size();
    while (true) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let swap: number | null = null;

      if (leftChildIndex < length) {
        if (this.heap[leftChildIndex] > this.heap[index]) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        if (
          (swap === null && this.heap[rightChildIndex] > this.heap[index]) ||
          (swap !== null &&
            this.heap[rightChildIndex] > this.heap[leftChildIndex])
        ) {
          swap = rightChildIndex;
        }
      }
      if (swap === null) break;

      [this.heap[index], this.heap[swap]] = [this.heap[swap], this.heap[index]];
      index = swap;
    }
  }
}
