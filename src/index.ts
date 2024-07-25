import { LinkedList } from "./linked_list";

export { LinkedList } from "./linked_list";
// let ll = new LinkedList();
// ll.insertAtTail(1);
// ll.insertAtTail(69);
// ll.insertAtTail(33);
// ll.insertAtTail(4);
// ll.insertAtTail(5);
let ll = LinkedList.linkedListFrom([1, 2, 39, 69, 5, 6, 3]);
console.log(ll.showList());
ll.removeByPosition(6);
ll.removeByValue(3);
console.log(ll.find(69));
console.log(ll.showList());
