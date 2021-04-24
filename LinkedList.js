class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insertAtHead = (data) => {
    const newNode = new LinkedListNode(data, this.head);
    this.head = newNode;
    this.length++;
  };

  getNodeByIndex = (index) => {
    if (index < 0 || index >= this.length) return null;

    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  };

  print = () => {
    let output = "";
    let currentNode = this.head;
    while (currentNode) {
      output = `${output}${currentNode.value} -> `;
      currentNode = currentNode.next;
    }
    console.log(`${output}null`);
  };
}

class LinkedListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

LinkedList.fromValues = (...values) => {
  const newLinkList = new LinkedList();
  for (let i = values.length - 1; i >= 0; i--) {
    newLinkList.insertAtHead(values[i]);
  }
  return newLinkList;
};

module.exports = LinkedList;
