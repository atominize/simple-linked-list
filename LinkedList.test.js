const LinkedList = require("./LinkedList");

describe("#insertAtHead", () => {
  test("it adds the element to the beginning of the list", () => {
    const newLinkList = new LinkedList();
    newLinkList.insertAtHead(10);
    const oldHead = newLinkList.head;
    newLinkList.insertAtHead(20);

    expect(newLinkList.head.value).toBe(20);
    expect(newLinkList.head.next).toBe(oldHead);
    expect(newLinkList.length).toBe(2);
  });
});

describe("#getNodeByIndex", () => {
  describe("with index less than 0", () => {
    test("should return null", () => {
      const newLinkList = LinkedList.fromValues(20, 20);

      expect(newLinkList.getNodeByIndex(-1)).toBeNull();
    });
  });

  describe("with index greater than list length", () => {
    test("should return null", () => {
      const newLinkList = LinkedList.fromValues(20, 20);

      expect(newLinkList.getNodeByIndex(5)).toBeNull();
    });
  });

  describe("with index 0", () => {
    test("should return the head", () => {
      const newLinkedList = LinkedList.fromValues(10, 20);

      expect(newLinkedList.getNodeByIndex(0).value).toBe(10);
    });
  });

  describe("with index in the middle", () => {
    test("should return the node at the index", () => {
      const newLinkedList = LinkedList.fromValues(10, 20, 30, 40, 50);

      expect(newLinkedList.getNodeByIndex(3).value).toBe(40);
    });
  });
});
