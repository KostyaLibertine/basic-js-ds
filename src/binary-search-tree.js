const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  root() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.top ?? null
  }

  add(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let node = new Node(data)

    if (!this.top) {
      this.top = node
      return this
    } else {
      let shift = this.top
      while (shift) {
        if (node.data === shift.data) {
          return
        }
        if (node.data < shift.data) {
          if (!shift.left) {
            shift.left = node
            return this
          }
          shift = shift.left
        } else {
          if (!shift.right) {
            shift.right = node
            return this
          }
          shift = shift.right
        }
      }
    }
  }

  has(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.find(data) !== null
  }

  find(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let shift = this.top

    while (shift) {
      if (data === shift.data) {
        return shift
      } else if (data < shift.data) {
        shift = shift.left
      } else {
        shift = shift.right
      }
    }

    return null
  }

  remove(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.top = toRemove(this.top, data)
    function toRemove(node, data) {
      if (!node) return null

      if (data < node.data) {
        node.left = toRemove(node.left, data)
        return node
      } else if (node.data < data) {
        node.right = toRemove(node.right, data)
        return node
      } else {
        if (!node.left && !node.right) {
          return null
        }
        if (!node.left) {
          node = node.right
          return node
        }
        if (!node.right) {
          node = node.left
          return node
        }

        let slide = node.right

        while (slide.left) {
          slide = slide.left
        }
        node.data = slide.data
        node.right = toRemove(node.right, slide.data)
        return node
      }
    }
  }

  min() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let node = this.top
    
    if (!this.top) {
      return
    }
    while (node.left) {
      node = node.left
    }

    return node.data
  }

  max() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let node = this.top

    if (!this.top) {
      return
    }
    while (node.right) {
      node = node.right
    }

    return node.data
  }
}

module.exports = {
  BinarySearchTree
};