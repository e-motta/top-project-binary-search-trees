/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tree */ \"./src/tree.js\");\n/* eslint-disable no-console */\n\n\nconst randomNums1 = [...new Array(15)].map(() => (\n  Math.round(Math.random() * 10000)\n));\n\nconsole.log('Creating Binary Search Tree...');\nconst bst = (0,_tree__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(randomNums1);\n\nconsole.log(bst.isBalanced() ? 'The tree is balanced.' : 'The tree is NOT balanced.');\n\nconsole.log('Levelorder: ', bst.levelOrder());\nconsole.log('Preorder: ', bst.preorder());\nconsole.log('Inorder: ', bst.inorder());\nconsole.log('Postorder: ', bst.postorder());\n\nconsole.log('Inserting random numbers...');\nconst randomNums2 = [...new Array(1500)].map(() => (\n  Math.round(Math.random() * 10000)\n));\nrandomNums2.forEach((num) => bst.insert(num));\n\nconsole.log(bst.isBalanced() ? 'The tree is balanced.' : 'The tree is NOT balanced.');\n\nconsole.log('Rebalancing...');\nbst.rebalance();\n\nconsole.log(bst.isBalanced() ? 'The tree is balanced.' : 'The tree is NOT balanced.');\n\nconsole.log('Levelorder: ', bst.levelOrder());\nconsole.log('Preorder: ', bst.preorder());\nconsole.log('Inorder: ', bst.inorder());\nconsole.log('Postorder: ', bst.postorder());\n\n\n//# sourceURL=webpack://top-project-binary-search-trees/./src/index.js?");

/***/ }),

/***/ "./src/node.js":
/*!*********************!*\
  !*** ./src/node.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Node = (data = null, left = null, right = null) => ({\n  data, left, right,\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Node);\n\n\n//# sourceURL=webpack://top-project-binary-search-trees/./src/node.js?");

/***/ }),

/***/ "./src/tree.js":
/*!*********************!*\
  !*** ./src/tree.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node */ \"./src/node.js\");\n/* eslint-disable no-param-reassign */\n\n\nconst Tree = (arr) => {\n  const uniqueSortedArr = (\n    inputArr = arr,\n  ) => [...new Set(inputArr)].sort((a, b) => a - b);\n\n  const buildTree = (\n    inputArr = uniqueSortedArr(),\n    start = 0,\n    end = inputArr.length - 1,\n  ) => {\n    if (arr.some((val) => typeof val !== 'number')) {\n      throw TypeError('Array elements must be of type number');\n    }\n\n    if (uniqueSortedArr().length === 0) return (0,_node__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(null);\n\n    if (start > end) return null;\n\n    const mid = Math.floor((start + end) / 2);\n    const rootData = inputArr[mid];\n    const left = buildTree(inputArr, start, mid - 1);\n    const right = buildTree(inputArr, mid + 1, end);\n\n    return (0,_node__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(rootData, left, right);\n  };\n\n  let root = buildTree();\n\n  const prettyPrint = (node = root, prefix = '', isLeft = true) => {\n    if (node.right !== null) {\n      prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);\n    }\n    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);\n    if (node.left !== null) {\n      prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);\n    }\n  };\n\n  const find = (data, node = root) => {\n    if (typeof data !== 'number') {\n      throw TypeError('Data must be of type number');\n    }\n    if (data < node.data) {\n      if (node.left === null) return null;\n      return find(data, node.left);\n    }\n    if (data > node.data) {\n      if (node.right === null) return null;\n      return find(data, node.right);\n    }\n    return node;\n  };\n\n  const insert = (data, node = root) => {\n    if (typeof data !== 'number') {\n      throw TypeError('Data must be of type number');\n    }\n\n    if (root.data === null) {\n      root.data = data;\n      return null;\n    }\n\n    if (data < node.data) {\n      if (node.left !== null) return insert(data, node.left);\n      node.left = (0,_node__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data);\n    }\n\n    if (data > node.data) {\n      if (node.right !== null) return insert(data, node.right);\n      node.right = (0,_node__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data);\n    }\n\n    return null;\n  };\n\n  const insertNode = (newNode, node = root) => {\n    if (root.data === null) {\n      root.data = newNode.data;\n      root.left = newNode.left;\n      root.right = newNode.right;\n      return null;\n    }\n\n    if (newNode === null) {\n      return null;\n    }\n\n    if (newNode.data < node.data) {\n      if (node.left !== null) return insertNode(newNode, node.left);\n      node.left = newNode;\n    }\n\n    if (newNode.data > node.data) {\n      if (node.right !== null) return insertNode(newNode, node.right);\n      node.right = newNode;\n    }\n\n    return null;\n  };\n\n  const remove = (data, node = root) => {\n    if (typeof data !== 'number') {\n      throw TypeError('Data must be of type number');\n    }\n\n    const shiftLeftToRight = (currentNode, nextNode) => {\n      if (nextNode !== null) {\n        currentNode.left = nextNode.left;\n        if (nextNode.left !== null) {\n          if (nextNode.left.left !== null) {\n            nextNode.left.left.right = nextNode.left.right;\n          }\n          nextNode.left.right = nextNode.right;\n        }\n      }\n    };\n\n    const shiftRightToLeft = (currentNode, nextNode) => {\n      if (nextNode !== null) {\n        currentNode.right = nextNode.right;\n        if (nextNode.right !== null) {\n          if (nextNode.right.right !== null) {\n            nextNode.right.right.left = nextNode.right.left;\n          }\n          nextNode.right.left = nextNode.left;\n        }\n      }\n    };\n\n    if (data === root.data) {\n      const shiftedLeaf = root.right.left;\n\n      root.data = root.right.data;\n      root.right = root.right.right;\n\n      if (shiftedLeaf !== null) {\n        insertNode(shiftedLeaf, root);\n      }\n      return null;\n    }\n\n    if (node !== null) {\n      if (data === node.data) {\n        return node;\n      }\n\n      let nextNode = null;\n\n      if (data < node.data) {\n        nextNode = remove(data, node.left);\n        let shiftedLeaf;\n        if (nextNode && nextNode.left && nextNode.left.left) {\n          shiftedLeaf = nextNode.left.left.right;\n        }\n        shiftLeftToRight(node, nextNode);\n        if (nextNode && nextNode.left && nextNode.left.left !== null) {\n          insertNode(shiftedLeaf, nextNode);\n        }\n      }\n\n      if (data > node.data) {\n        nextNode = remove(data, node.right);\n        let shiftedLeaf;\n        if (nextNode && nextNode.right && nextNode.right.right) {\n          shiftedLeaf = nextNode.right.right.left;\n        }\n        shiftRightToLeft(node, nextNode);\n        if (nextNode && nextNode.right && nextNode.right.right !== null) {\n          insertNode(shiftedLeaf, nextNode);\n        }\n      }\n    }\n\n    return null;\n  };\n\n  const levelOrder = (\n    callback = null,\n    node = root,\n    nodesQueue = [],\n    results = [],\n  ) => {\n    if (!node) return null;\n\n    if (node.left !== null) nodesQueue.push(node.left);\n    if (node.right !== null) nodesQueue.push(node.right);\n\n    if (callback !== null) {\n      callback(node);\n    } else {\n      results.push(node.data);\n    }\n\n    const nextNode = nodesQueue.shift();\n\n    if (nextNode) {\n      levelOrder(callback, nextNode, nodesQueue, results);\n    }\n\n    return results.length > 0 ? results : null;\n  };\n\n  const inorder = (callback = null, node = root, results = []) => {\n    if (!node) return null;\n\n    if (node.left !== null) inorder(callback, node.left, results);\n\n    if (callback !== null) {\n      callback(node);\n    } else {\n      results.push(node.data);\n    }\n\n    if (node.right !== null) inorder(callback, node.right, results);\n\n    return results.length > 0 ? results : null;\n  };\n\n  const preorder = (callback = null, node = root, results = []) => {\n    if (!node) return null;\n\n    if (callback !== null) {\n      callback(node);\n    } else {\n      results.push(node.data);\n    }\n\n    if (node.left !== null) preorder(callback, node.left, results);\n    if (node.right !== null) preorder(callback, node.right, results);\n\n    return results.length > 0 ? results : null;\n  };\n\n  const postorder = (callback = null, node = root, results = []) => {\n    if (!node) return null;\n\n    if (node.left !== null) postorder(callback, node.left, results);\n    if (node.right !== null) postorder(callback, node.right, results);\n\n    if (callback !== null) {\n      callback(node);\n    } else {\n      results.push(node.data);\n    }\n\n    return results.length > 0 ? results : null;\n  };\n\n  const height = (node = root, h = 0) => {\n    if (node === null) return null;\n\n    if (node.left === null && node.right === null) {\n      return 0;\n    }\n\n    const heightLeft = height(node.left, h);\n    const heightRight = height(node.right, h);\n\n    if (1 + heightLeft > h) h = 1 + heightLeft;\n    if (1 + heightRight > h) h = 1 + heightRight;\n\n    return h;\n  };\n\n  const depth = (targetNode = root, nextNode = root) => {\n    if (targetNode === null || nextNode === null) return null;\n\n    if (targetNode.data === nextNode.data) return 0;\n\n    if (targetNode.data < nextNode.data) {\n      return 1 + depth(targetNode, nextNode.left);\n    }\n\n    if (targetNode.data > nextNode.data) {\n      return 1 + depth(targetNode, nextNode.right);\n    }\n\n    return null;\n  };\n\n  const isBalanced = (node = root, status = { balanced: true }) => {\n    if (node === null) return null;\n\n    if (\n      node.left === null\n      && node.right === null\n      && depth(node) < height() - 1\n    ) status.balanced = false;\n\n    isBalanced(node.left, status);\n    isBalanced(node.right, status);\n\n    return status.balanced;\n  };\n\n  const rebalance = () => {\n    const newArr = inorder();\n    const newSortedArr = uniqueSortedArr(newArr);\n    root = buildTree(newSortedArr);\n  };\n\n  return {\n    root,\n    prettyPrint,\n    find,\n    insert,\n    insertNode,\n    remove,\n    levelOrder,\n    inorder,\n    preorder,\n    postorder,\n    height,\n    depth,\n    isBalanced,\n    rebalance,\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tree);\n\n\n//# sourceURL=webpack://top-project-binary-search-trees/./src/tree.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;