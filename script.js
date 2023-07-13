class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  

    append(value) {
      const newNode = new Node(value);
  
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
    }
  
    prepend(value){
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
    }

    print() {
      let current = this.head;
      while (current) {
        console.log(current.value);
        current = current.next;
      }
    }

    size() {
        let count = ''
        let current = this.head

        while (current) {
            count ++
            current = current.next
        }
        return count
    }

    getHeadNode() {
        return this.head;
    }

    getTailNode() {
        return this.tail;
    }

    getNodeAt (index) {
        let count = 0
        let current = this.head

        while (current != null) {
            if (count == index) {
                return current;
            } else {
                count++;
                current = current.next;
            }
        }
    }
  }
  
  const linkedList = new LinkedList()