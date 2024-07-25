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
}
