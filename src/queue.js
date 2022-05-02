const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = 0
    this.last = 0
  }

  getUnderlyingList() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.head
  }

  enqueue(value) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    const element = new ListNode(value)

    if (!this.head) {
      this.head = element
      this.last = element
    } else {
      this.last.next = element
      this.last = element
    }
    
    return this
  }

  dequeue() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    const element = this.head

    this.head = element.next
    this.length--
    return element.value
  }
}

module.exports = {
  Queue
};
