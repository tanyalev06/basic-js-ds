const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");
class BinarySearchTree {
  constructor() {
    this.ourRoot = null;       //корень дерева
  }

  root() {
    return this.ourRoot;
  }

  add(data) {
 
    this.ourRoot = addWithin(this.ourRoot, data);         //рекурсивная функция: положить в корень то, что вернет функция

    function addWithin(node, data) {
      if(!node){                   //если узла нет
        return new Node(data);
      }

      if(data < node.data) {
        node.left = addWithin(node.left, data);
      } else {
        node.right = addWithin(node.right, data);
      }
      return node;
    }
  }

  has(data) {

    return searchWithin(this.ourRoot, data);

    function searchWithin(node, data) {
      if(!node){
        return false;
      }
      if(node.data === data) {
        return true;
      }

      if (data < node.data) {
        return searchWithin(node.left, data);
      } else {
        return searchWithin(node.right, data);
      }
    }
  }


find(data) {
    return searchWithin(this.ourRoot, data);

    function searchWithin(node, data) {
        if (!node) return null;
        if (node.data === data) return node;
        return data < node.data 
            ? searchWithin(node.left, data) 
            : searchWithin(node.right, data);
    } 
} 


remove(data) {

  this.ourRoot = removeNode(this.ourRoot, data);

  function removeNode(node, data) {
    if(!node) {
      return null;
    }
    if(data < node.data){
      node.left = removeNode(node.left, data);
      return node;
    } else if (node.data < data) {
      node.right = removeNode(node.right, data);
      return node;
    }
    else {
      if(!node.left && !node.right) {
        return null;
      }
      if(!node.left) {
        node = node.right;
        return node;
      }
      if(!node.right) {
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

    if (!this.ourRoot) {
      return null;
    }

    let node = this.ourRoot;
    while(node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.ourRoot) {
      return null;
    }

    let node = this.ourRoot;
    while(node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree,
};