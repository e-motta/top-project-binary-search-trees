/* eslint-disable no-param-reassign */
import Node from './node';

const Tree = (arr) => {
  const uniqueSortedArr = (
    inputArr = arr,
  ) => [...new Set(inputArr)].sort((a, b) => a - b);

  const buildTree = (
    inputArr = uniqueSortedArr(),
    start = 0,
    end = inputArr.length - 1,
  ) => {
    if (arr.some((val) => typeof val !== 'number')) {
      throw TypeError('Array elements must be of type number');
    }

    if (uniqueSortedArr().length === 0) return Node(null);

    if (start > end) return null;

    const mid = Math.floor((start + end) / 2);
    const rootData = inputArr[mid];
    const left = buildTree(inputArr, start, mid - 1);
    const right = buildTree(inputArr, mid + 1, end);

    return Node(rootData, left, right);
  };

  let root = buildTree();

  const prettyPrint = (node = root, prefix = '', isLeft = true) => {
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  };

  const find = (data, node = root) => {
    if (typeof data !== 'number') {
      throw TypeError('Data must be of type number');
    }
    if (data < node.data) {
      if (node.left === null) return null;
      return find(data, node.left);
    }
    if (data > node.data) {
      if (node.right === null) return null;
      return find(data, node.right);
    }
    return node;
  };

  const insert = (data, node = root) => {
    if (typeof data !== 'number') {
      throw TypeError('Data must be of type number');
    }

    if (root.data === null) {
      root.data = data;
      return null;
    }

    if (data < node.data) {
      if (node.left !== null) return insert(data, node.left);
      node.left = Node(data);
    }

    if (data > node.data) {
      if (node.right !== null) return insert(data, node.right);
      node.right = Node(data);
    }

    return null;
  };

  const insertNode = (newNode, node = root) => {
    if (root.data === null) {
      root.data = newNode.data;
      root.left = newNode.left;
      root.right = newNode.right;
      return null;
    }

    if (newNode === null) {
      return null;
    }

    if (newNode.data < node.data) {
      if (node.left !== null) return insertNode(newNode, node.left);
      node.left = newNode;
    }

    if (newNode.data > node.data) {
      if (node.right !== null) return insertNode(newNode, node.right);
      node.right = newNode;
    }

    return null;
  };

  const remove = (data, node = root) => {
    if (typeof data !== 'number') {
      throw TypeError('Data must be of type number');
    }

    const shiftLeftToRight = (currentNode, nextNode) => {
      if (nextNode !== null) {
        currentNode.left = nextNode.left;
        if (nextNode.left !== null) {
          if (nextNode.left.left !== null) {
            nextNode.left.left.right = nextNode.left.right;
          }
          nextNode.left.right = nextNode.right;
        }
      }
    };

    const shiftRightToLeft = (currentNode, nextNode) => {
      if (nextNode !== null) {
        currentNode.right = nextNode.right;
        if (nextNode.right !== null) {
          if (nextNode.right.right !== null) {
            nextNode.right.right.left = nextNode.right.left;
          }
          nextNode.right.left = nextNode.left;
        }
      }
    };

    if (data === root.data) {
      const shiftedLeaf = root.right.left;

      root.data = root.right.data;
      root.right = root.right.right;

      if (shiftedLeaf !== null) {
        insertNode(shiftedLeaf, root);
      }
      return null;
    }

    if (node !== null) {
      if (data === node.data) {
        return node;
      }

      let nextNode = null;

      if (data < node.data) {
        nextNode = remove(data, node.left);
        let shiftedLeaf;
        if (nextNode && nextNode.left && nextNode.left.left) {
          shiftedLeaf = nextNode.left.left.right;
        }
        shiftLeftToRight(node, nextNode);
        if (nextNode && nextNode.left && nextNode.left.left !== null) {
          insertNode(shiftedLeaf, nextNode);
        }
      }

      if (data > node.data) {
        nextNode = remove(data, node.right);
        let shiftedLeaf;
        if (nextNode && nextNode.right && nextNode.right.right) {
          shiftedLeaf = nextNode.right.right.left;
        }
        shiftRightToLeft(node, nextNode);
        if (nextNode && nextNode.right && nextNode.right.right !== null) {
          insertNode(shiftedLeaf, nextNode);
        }
      }
    }

    return null;
  };

  const levelOrder = (
    callback = null,
    node = root,
    nodesQueue = [],
    results = [],
  ) => {
    if (!node) return null;

    if (node.left !== null) nodesQueue.push(node.left);
    if (node.right !== null) nodesQueue.push(node.right);

    if (callback !== null) {
      callback(node);
    } else {
      results.push(node.data);
    }

    const nextNode = nodesQueue.shift();

    if (nextNode) {
      levelOrder(callback, nextNode, nodesQueue, results);
    }

    return results.length > 0 ? results : null;
  };

  const inorder = (callback = null, node = root, results = []) => {
    if (!node) return null;

    if (node.left !== null) inorder(callback, node.left, results);

    if (callback !== null) {
      callback(node);
    } else {
      results.push(node.data);
    }

    if (node.right !== null) inorder(callback, node.right, results);

    return results.length > 0 ? results : null;
  };

  const preorder = (callback = null, node = root, results = []) => {
    if (!node) return null;

    if (callback !== null) {
      callback(node);
    } else {
      results.push(node.data);
    }

    if (node.left !== null) preorder(callback, node.left, results);
    if (node.right !== null) preorder(callback, node.right, results);

    return results.length > 0 ? results : null;
  };

  const postorder = (callback = null, node = root, results = []) => {
    if (!node) return null;

    if (node.left !== null) postorder(callback, node.left, results);
    if (node.right !== null) postorder(callback, node.right, results);

    if (callback !== null) {
      callback(node);
    } else {
      results.push(node.data);
    }

    return results.length > 0 ? results : null;
  };

  const height = (node = root, h = 0) => {
    if (node === null) return null;

    if (node.left === null && node.right === null) {
      return 0;
    }

    const heightLeft = height(node.left, h);
    const heightRight = height(node.right, h);

    if (1 + heightLeft > h) h = 1 + heightLeft;
    if (1 + heightRight > h) h = 1 + heightRight;

    return h;
  };

  const depth = (targetNode = root, nextNode = root) => {
    if (targetNode === null || nextNode === null) return null;

    if (targetNode.data === nextNode.data) return 0;

    if (targetNode.data < nextNode.data) {
      return 1 + depth(targetNode, nextNode.left);
    }

    if (targetNode.data > nextNode.data) {
      return 1 + depth(targetNode, nextNode.right);
    }

    return null;
  };

  const isBalanced = (node = root, status = { balanced: true }) => {
    if (node === null) return null;

    if (
      node.left === null
      && node.right === null
      && depth(node) < height() - 1
    ) status.balanced = false;

    isBalanced(node.left, status);
    isBalanced(node.right, status);

    return status.balanced;
  };

  const rebalance = () => {
    const newArr = inorder();
    const newSortedArr = uniqueSortedArr(newArr);
    root = buildTree(newSortedArr);
  };

  return {
    root,
    prettyPrint,
    find,
    insert,
    insertNode,
    remove,
    levelOrder,
    inorder,
    preorder,
    postorder,
    height,
    depth,
    isBalanced,
    rebalance,
  };
};

export default Tree;
