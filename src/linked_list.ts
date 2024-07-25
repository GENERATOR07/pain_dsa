class ListNode<T> {
  value: T;
  next: ListNode<T> | null;
  constructor(val: T) {
    this.value = val;
    this.next = null;
  }
}
export class LinkedList<T> {
  head: ListNode<T> | null;
  constructor() {
    this.head = null;
  }
  static linkedListFrom<T>(array: T[]): LinkedList<T> {
    const ll = new LinkedList<T>();
    array.forEach((value: T) => ll.insertAtTail(value));
    return ll;
  }
  insertAtTail(val: T) {
    if (!this.head) this.head = new ListNode(val);
    else {
      let temp: ListNode<T> = this.head;
      while (temp.next) {
        temp = temp.next;
      }
      temp.next = new ListNode(val);
    }
    return;
  }
  showList() {
    let temp = this.head;
    if (!this.head) return null;
    let list = "";
    while (temp) {
      list += `${temp.value}->`;
      temp = temp.next;
    }

    return list;
  }
  removeByValue(val: T) {
    if (!this.head) return null;
    if (this.head.value === val) {
      this.head = this.head.next;
      return;
    }
    let previous = this.head;
    let current = this.head.next;

    while (current) {
      if (current.value === val) {
        previous.next = current.next;
        return;
      }
      previous = current;
      current = current.next;
    }
  }
  removeByPosition(position: number) {
    if (position <= 0 || !this.head) return;
    if (position === 1) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    while (position > 2 && current.next) {
      current = current.next;
      position--;
    }
    if (current.next) current.next = current.next.next;
  }
  find(val: T) {
    let current = this.head;
    let position = 1;
    while (current) {
      if (val === current.value) {
        return position;
      }
      position++;
      current = current.next;
    }
    return current;
  }
}
