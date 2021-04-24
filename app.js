const LinkedList = require("./LinkedList");

// const newLinkList = new LinkedList();
// newLinkList.insertAtHead(10);
// newLinkList.insertAtHead(20);

// console.log(newLinkList);

// const newLinkedList = LinkedList.fromValues(20, 20);
// console.log(newLinkedList);

// const newLinkedList = LinkedList.fromValues(10, 20);
// newLinkedList.print();

const newLinkedList = LinkedList.fromValues(10, 20, 30, 40, 50);
console.log(newLinkedList.getNodeByIndex(3).value);
