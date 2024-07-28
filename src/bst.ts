class TreeNode<T> {
  val: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;

  constructor(value: T) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

export class BST<T> {
  private root: TreeNode<T> | null;
  private count: number;

  constructor() {
    this.root = null;
    this.count = 0;
  }

  private insertNode(node: TreeNode<T>, newNode: TreeNode<T>): void {
    if (newNode.val < node.val) {
      if (node.left) this.insertNode(node.left, newNode);
      else node.left = newNode;
    } else {
      if (node.right) this.insertNode(node.right, newNode);
      else node.right = newNode;
    }
  }
  insert(val: T): void {
    const newNode = new TreeNode<T>(val);
    if (this.root) this.insertNode(this.root, newNode);
    else this.root = newNode;
    this.count++;
  }
  find(val: T): boolean {
    if (!this.root) return false;
    else {
      let ptr: TreeNode<T> | null = this.root;
      while (ptr) {
        if (ptr.val == val) return true;
        else if (ptr.val < val) ptr = ptr.right;
        else ptr = ptr.left;
      }
    }
    return false;
  }
  delete(value: T) {}
  private deleteNode(node: TreeNode<T> | null, value: T) {
    if (!node) return null;
    if (node.val < value) {
      node.right = this.deleteNode(node.right, value);
      return node;
    } else if (node.val > value) {
      node.left = this.deleteNode(node.left, value);
      return node;
    } else {
      if (!node.left) return node.right;
      else if (!node.right) return node.left;

      node.val = this.minValue(node.right);
      node.right = this.deleteNode(node.right, node.val);
    }
    return node;
  }

  private minValue(node: TreeNode<T>): T {
    let minv = node.val;
    while (node.left !== null) {
      node = node.left;
      minv = node.val;
    }
    return minv;
  }

  inOrderTraversal() {
    const result: T[] = [];
    this.inOrderTraverse(this.root, result);
    return result;
  }
  private inOrderTraverse(node: TreeNode<T> | null, result: T[]) {
    if (!node) return;
    this.inOrderTraverse(node.left, result);
    result.push(node.val);
    this.inOrderTraverse(node.right, result);
  }
  preOrderTraversal(): T[] {
    const result: T[] = [];
    this.preOrderTraverse(this.root, result);
    return result;
  }

  private preOrderTraverse(node: TreeNode<T> | null, result: T[]): void {
    if (node !== null) {
      result.push(node.val);
      this.preOrderTraverse(node.left, result);
      this.preOrderTraverse(node.right, result);
    }
  }

  postOrderTraversal(): T[] {
    const result: T[] = [];
    this.postOrderTraverse(this.root, result);
    return result;
  }

  private postOrderTraverse(node: TreeNode<T> | null, result: T[]): void {
    if (node !== null) {
      this.postOrderTraverse(node.left, result);
      this.postOrderTraverse(node.right, result);
      result.push(node.val);
    }
  }
  isEmpty(): boolean {
    return this.root === null;
  }

  size(): number {
    return this.count;
  }

  clear(): void {
    this.root = null;
    this.count = 0;
  }
}
