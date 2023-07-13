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

        current.next = null
        this.tail = current
// Our current's (2nd to last) last value is set to null, "removing the last node"
// this.tail (the last node of the list) is set to current  

    }

    contains(value) {
        // Returns true if value passed exists. False otherwise.
        let current = this.head
        // While X is true, iterate through list. While list != null?
        // How to move nodes? Count orlinked current = current.next
        // if (value == current), return true, else false

        while (current != null) {
            
            if (current.value == value){
                return "True, list contains " + value
            } else {
                current = current.next
            }   
        }

        if (this.tail.value != value) {
            return "False, list doesn't contain " + value
        }
    }

    // getNodeAt (index) {
    //     let count = 0
    //     let current = this.head

    //     while (current != null) {
    //         if (count == index) {
    //             return current;
    //         } else {
    //             count++;
    //             current = current.next;
    //         }
    //     }
    // }
    // Above returns the node value at the index #

    // Below returns index# of value if found
    // Similar to contains? We first see if list contains value.
    // Simply add a counter to find? index starts at 0.
    // For every current = current.next, index ++
    testValues () {
        linkedList.append(1)
        linkedList.append(2)
        linkedList.append(3)
        linkedList.append(4)
        linkedList.append(5)
    }

    find(value){
        let current = this.head
        let index = 0

        while (current) {
            if (current.value === value) {
                return index;
            }
            current = current.next
            index++
        }
        return null
    }

    toString() {
        let result = ''
        let current = this.head

        while (current) {
            result += `(${current.value}) -> `
            current = current.next
        }

        result += "null"
        return result
    }
}

  const linkedList = new LinkedList()