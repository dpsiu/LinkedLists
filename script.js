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

    pop () {
        let current = this.head

        while (current.next.next) {
            current = current.next
        }
        // "While the next next value is true, set our current node to the next
        // effectively moving on to the next node and making it our current node."
        // "Do this WHILE true, so if the current node's next node doesn't have a next
        // we may assume that the current node is the second to last node."
        // Instead of thinking delete/remove, we are cutting it off. Disconnecting the node.
        // Our current's (2nd to last) last value is set to null, "removing the last node"
        // this.tail (the last node of the list) is set to current

        current.next = null
        this.tail = current
    }
  }
  
  const linkedList = new LinkedList()