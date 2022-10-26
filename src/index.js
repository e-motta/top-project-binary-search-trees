/* eslint-disable no-console */
import Tree from './tree';

const randomNums1 = [...new Array(15)].map(() => (
  Math.round(Math.random() * 10000)
));

console.log('Creating Binary Search Tree...');
const bst = Tree(randomNums1);

console.log(bst.isBalanced() ? 'The tree is balanced.' : 'The tree is NOT balanced.');

console.log('Levelorder: ', bst.levelOrder());
console.log('Preorder: ', bst.preorder());
console.log('Inorder: ', bst.inorder());
console.log('Postorder: ', bst.postorder());

console.log('Inserting random numbers...');
const randomNums2 = [...new Array(1500)].map(() => (
  Math.round(Math.random() * 10000)
));
randomNums2.forEach((num) => bst.insert(num));

console.log(bst.isBalanced() ? 'The tree is balanced.' : 'The tree is NOT balanced.');

console.log('Rebalancing...');
bst.rebalance();

console.log(bst.isBalanced() ? 'The tree is balanced.' : 'The tree is NOT balanced.');

console.log('Levelorder: ', bst.levelOrder());
console.log('Preorder: ', bst.preorder());
console.log('Inorder: ', bst.inorder());
console.log('Postorder: ', bst.postorder());
