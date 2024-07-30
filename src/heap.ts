export class MinHeap<T> {
  private heap: T[];
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
  bubbleUp() {
    let index = this.size() - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
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
  extract() {
    if (this.isEmpty()) return null;
    if (this.size() === 1) return this.heap.pop();
    let root = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.bubbleDown();
    return root;
  }
  bubbleDown() {
    let index = 0;
    let length = this.size();
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let swap = null;
      let leftChild: T, rightChild: T;
      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex];
        if (leftChild < this.heap[index]) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];
        if (
          (swap == null && rightChild < this.heap[index]) ||
          (swap != null && rightChild < leftChild!)
        ) {
          swap = rightChildIndex;
        }
      }
      if (swap == null) break;

      [this.heap[index], this.heap[swap]] = [this.heap[swap], this.heap[index]];
      index = swap;
    }
  }
  showHeap() {
    return this.heap;
  }
}
