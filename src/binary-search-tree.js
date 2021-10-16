const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {
  constructor() {
    this.base = null;
  }

  root() {
    return this.base;
  }

  add(data) {
    this.base = addNode(this.base, data);

    function addNode(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addNode(node.left, data);
      } else {
          node.right = addNode(node.right, data);
        }

        return node;
    }
  }

  has(data) {
    return hasNode(this.base, data);

    function hasNode(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      if (data < node.data) {
        return hasNode(node.left, data);
      } else {
        return hasNode(node.right, data);
      }
    }
  }

  find(data) {
    return findNode(this.base, data);

    function findNode(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        return findNode(node.left, data);
      } else {
        return findNode(node.right, data);
      }
    }
  }

  remove(data) {
    this.base = removeNode(this.base, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }
  
      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
          
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minRight = node.right;
        while(minRight.left) {
          minRight = minRight.left;
        }

        node.data = minRight.data;

        node.right = removeNode(node.right, minRight.data);

        return node;
      }
    }
  }

  min() {
    if (!this.base) {
      return;
    }

    let node = this.base;
    while(node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.base) {
      return;
    }

    let node = this.base;
    while(node.right) {
      node = node.right;
    }

    return node.data;
  }

}