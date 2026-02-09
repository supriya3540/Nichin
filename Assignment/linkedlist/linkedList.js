class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }
    curr.next = newNode;
  }

  find(value) {
    let curr = this.head;
    while (curr) {
      if (curr.value === value) return curr;
      curr = curr.next;
    }
    return null;
  }

  delete(value) {
    if (!this.head) return false;

    if (this.head.value === value) {
      this.head = this.head.next;
      return true;
    }

    let curr = this.head;
    while (curr.next && curr.next.value !== value) {
      curr = curr.next;
    }

    if (curr.next) {
      curr.next = curr.next.next;
      return true;
    }

    return false;
  }

  reverse() {
    let prev = null;
    let curr = this.head;

    while (curr) {
      const next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }

    this.head = prev;
  }

  toArray() {
    const arr = [];
    let curr = this.head;
    while (curr) {
      arr.push(curr.value);
      curr = curr.next;
    }
    return arr;
  }
}

module.exports = LinkedList;
