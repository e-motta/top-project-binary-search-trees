import Tree from '../tree';

it('creates a simple balanced BST from a sorted array', () => {
  const bst = Tree([1, 2, 3]);
  expect(bst.root).toEqual(
    {
      data: 2,
      left: {
        data: 1,
        left: null,
        right: null,
      },
      right: {
        data: 3,
        left: null,
        right: null,
      },
    },
  );
});

it('creates a simple balanced BST from an unsorted array', () => {
  const bst = Tree([1, 4, 3, 0, 9]);
  expect(bst.root).toEqual(
    {
      data: 3,
      left: {
        data: 0,
        left: null,
        right: {
          data: 1,
          left: null,
          right: null,
        },
      },
      right: {
        data: 4,
        left: null,
        right: {
          data: 9,
          left: null,
          right: null,
        },
      },
    },
  );
});

it('creates empty node when array is empty', () => {
  const bst = Tree([]);
  expect(bst.root).toEqual(
    {
      data: null,
      left: null,
      right: null,
    },
  );
});

it('throws error when creating tree with array containing anything but numbers', () => {
  expect(() => Tree(['not a number'])).toThrow(TypeError('Array elements must be of type number'));
});

it('inserts data into a populated BST', () => {
  const bst = Tree([1, 2, 5, 6]);
  bst.insert(4);
  expect(bst.root).toEqual(
    {
      data: 2,
      left: {
        data: 1,
        left: null,
        right: null,
      },
      right: {
        data: 5,
        left: {
          data: 4,
          left: null,
          right: null,
        },
        right: {
          data: 6,
          left: null,
          right: null,
        },
      },
    },
  );
});

it('inserts data into an empty BST', () => {
  const bst = Tree([]);
  bst.insert(1);
  expect(bst.root).toEqual(
    {
      data: 1,
      left: null,
      right: null,
    },
  );
});

it('removes data from a BST - leaf', () => {
  const bst = Tree([1, 2, 3, 4]);
  bst.remove(4);
  expect(bst.root).toEqual(
    {
      data: 2,
      left: {
        data: 1,
        left: null,
        right: null,
      },
      right: {
        data: 3,
        left: null,
        right: null,
      },
    },
  );
});

it('removes data from a BST - middle', () => {
  const bst = Tree([1, 2, 3, 4, 5, 6, 7]);
  bst.remove(2);
  expect(bst.root).toEqual(
    {
      data: 4,
      left: {
        data: 1,
        left: null,
        right: {
          data: 3,
          left: null,
          right: null,
        },
      },
      right: {
        data: 6,
        left: {
          data: 5,
          left: null,
          right: null,
        },
        right: {
          data: 7,
          left: null,
          right: null,
        },
      },
    },
  );
});

it('removes data from a BST - middle (large array)', () => {
  const bst = Tree([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  ]);
  bst.remove(30);
  expect(bst.root).toEqual(
    {
      data: 20,
      left: {
        data: 10,
        left: {
          data: 5,
          left: {
            data: 2,
            left: {
              data: 1,
              left: null,
              right: null,
            },
            right: {
              data: 3,
              left: null,
              right: {
                data: 4,
                left: null,
                right: null,
              },
            },
          },
          right: {
            data: 7,
            left: {
              data: 6,
              left: null,
              right: null,
            },
            right: {
              data: 8,
              left: null,
              right: {
                data: 9,
                left: null,
                right: null,
              },
            },
          },
        },
        right: {
          data: 15,
          left: {
            data: 12,
            left: {
              data: 11,
              left: null,
              right: null,
            },
            right: {
              data: 13,
              left: null,
              right: {
                data: 14,
                left: null,
                right: null,
              },
            },
          },
          right: {
            data: 17,
            left: {
              data: 16,
              left: null,
              right: null,
            },
            right: {
              data: 18,
              left: null,
              right: {
                data: 19,
                left: null,
                right: null,
              },
            },
          },
        },
      },
      right: {
        data: 35,
        left: {
          data: 25,
          left: {
            data: 22,
            left: {
              data: 21,
              left: null,
              right: null,
            },
            right: {
              data: 23,
              left: null,
              right: {
                data: 24,
                left: null,
                right: null,
              },
            },
          },
          right: {
            data: 27,
            left: {
              data: 26,
              left: null,
              right: null,
            },
            right: {
              data: 28,
              left: null,
              right: {
                data: 29,
                left: null,
                right: null,
              },
            },
          },
        },
        right: {
          data: 38,
          left: {
            data: 32,
            left: {
              data: 31,
              left: null,
              right: null,
            },
            right: {
              data: 33,
              left: null,
              right: {
                data: 34,
                left: null,
                right: {
                  data: 36,
                  left: null,
                  right: {
                    data: 37,
                    left: null,
                    right: null,
                  },
                },
              },
            },
          },
          right: {
            data: 39,
            left: null,
            right: {
              data: 40,
              left: null,
              right: null,
            },
          },
        },
      },
    },
  );
});

it('removes data from a BST - head', () => {
  const bst = Tree([1, 2, 3, 4]);
  bst.remove(2);
  expect(bst.root).toEqual(
    {
      data: 3,
      left: {
        data: 1,
        left: null,
        right: null,
      },
      right: {
        data: 4,
        left: null,
        right: null,
      },
    },
  );
});

it('returns a node when it is found', () => {
  const bst = Tree([1, 2, 3, 4]);
  expect(bst.find(4)).toEqual(
    {
      data: 4,
      left: null,
      right: null,
    },
  );
});

it('returns null and keeps tree intact when removing non-existant data', () => {
  const bst = Tree([1, 2, 3, 4]);
  expect(bst.remove(5)).toBe(null);
  expect(bst.root).toEqual(
    {
      data: 2,
      left: {
        data: 1,
        left: null,
        right: null,
      },
      right: {
        data: 3,
        left: null,
        right: {
          data: 4,
          left: null,
          right: null,
        },
      },
    },
  );
});

it('returns null when a node is not found', () => {
  const bst = Tree([1, 2, 3, 4]);
  expect(bst.find(5)).toBe(null);
});

it('raises error when trying to find element that is not a number', () => {
  const bst = Tree([1, 2, 3, 4]);
  expect(() => bst.find('string')).toThrow('Data must be of type number');
});

test('levelOrder returns array of values in breadth-first traversal order when no callback is given', () => {
  const bst = Tree([1, 2, 3, 4, 5, 6]);
  expect(bst.levelOrder()).toEqual([3, 1, 5, 2, 4, 6]);
});

test('levelOrder returns array of values in breadth-first traversal order when no callback is given - big tree', () => {
  const bst = Tree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);
  expect(bst.levelOrder()).toEqual([7, 3, 11, 1, 5, 9, 13, 2, 4, 6, 8, 10, 12, 14]);
});

test('levelOrder calls callback for every node in breadth-first traversal order', () => {
  const bst = Tree([1, 2, 3, 4, 5, 6]);
  const arr = [];
  const callback = (node) => arr.push(node.data);
  expect(bst.levelOrder(callback)).toBe(null);
  expect(arr).toEqual([3, 1, 5, 2, 4, 6]);
});

test('inorder returns array of values in inorder depth-first traversal when no callback is given', () => {
  const bst = Tree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);
  expect(bst.inorder()).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);
});

test('inorder calls callback for every node in inorder depth-first traversal', () => {
  const bst = Tree([1, 2, 3, 4, 5, 6]);
  const arr = [];
  const callback = (node) => arr.push(node.data);
  expect(bst.inorder(callback)).toBe(null);
  expect(arr).toEqual([1, 2, 3, 4, 5, 6]);
});

test('preorder returns array of values in preorder depth-first traversal when no callback is given', () => {
  const bst = Tree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);
  expect(bst.preorder()).toEqual([7, 3, 1, 2, 5, 4, 6, 11, 9, 8, 10, 13, 12, 14]);
});

test('preorder calls callback for every node in preorder depth-first traversal', () => {
  const bst = Tree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);
  const arr = [];
  const callback = (node) => arr.push(node.data);
  expect(bst.preorder(callback)).toBe(null);
  expect(arr).toEqual([7, 3, 1, 2, 5, 4, 6, 11, 9, 8, 10, 13, 12, 14]);
});

test('postorder returns array of values in postorder depth-first traversal when no callback is given', () => {
  const bst = Tree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);
  expect(bst.postorder()).toEqual([2, 1, 4, 6, 5, 3, 8, 10, 9, 12, 14, 13, 11, 7]);
});

test('postorder calls callback for every node in postorder depth-first traversal', () => {
  const bst = Tree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);
  const arr = [];
  const callback = (node) => arr.push(node.data);
  expect(bst.postorder(callback)).toBe(null);
  expect(arr).toEqual([2, 1, 4, 6, 5, 3, 8, 10, 9, 12, 14, 13, 11, 7]);
});

test('height returns correct value for balanced trees', () => {
  const bst1 = Tree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);
  expect(bst1.height()).toBe(3);

  const bst2 = Tree([1, 2, 3, 4, 5, 6]);
  expect(bst2.height()).toBe(2);

  const bst3 = Tree([1]);
  expect(bst3.height()).toBe(0);

  const bst4 = Tree([1, 2, 3, 4]);
  expect(bst4.height()).toBe(2);

  const bst5 = Tree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
  expect(bst5.height(bst5.find(6))).toBe(1);
});

test('height returns correct value for unbalanced tree', () => {
  const bst = Tree([1, 2, 3, 4, 5, 6, 13, 14, 15, 16]);
  [7, 8, 9, 10, 11, 12].forEach((v) => bst.insert(v));
  expect(bst.height()).toBe(9);
});

test('depth returns correct value', () => {
  const bst = Tree([1, 2, 3, 4, 5, 6]);
  expect(bst.depth()).toBe(0);
  expect(bst.depth(bst.find(5))).toBe(1);
  expect(bst.depth(bst.find(6))).toBe(2);
  expect(bst.depth(bst.find(2))).toBe(2);
});

test('isBalanced returns true when tree is balanced, false otherwise', () => {
  const bst = Tree([1, 2, 3, 10, 11, 12]);
  expect(bst.isBalanced()).toBe(true);

  [4, 5, 6, 7].forEach((v) => bst.insert(v));
  expect(bst.isBalanced()).toBe(false);
});

test('isBalanced returns true when tree is balanced, false otherwise - big tree', () => {
  const bst = Tree([
    29, 76, 40, 254, 372, 310, 88, 599, 759, 699, 813, 999, 968, 800, 375,
  ]);
  expect(bst.isBalanced()).toBe(true);

  [
    704, 254, 683, 576, 12, 132, 186, 637, 214, 416, 356, 669, 225, 137, 645,
    401, 922, 675, 883, 925, 503, 494, 386, 539, 637, 792, 657, 996, 120, 483,
    902, 209, 434, 895, 940, 986, 806, 320, 134, 411, 508, 962, 500, 530, 492,
    458, 698, 657, 207, 930, 536, 793, 785, 30, 582, 657, 770, 897, 22, 113,
    395, 890, 706, 222, 907, 317, 551, 130, 49, 14, 246, 271, 417, 280, 832,
    447, 193, 131, 415, 422, 225, 875, 80, 487, 535, 92, 93, 394, 38, 225, 271,
    941, 896, 770, 29, 651, 829, 55, 913, 588, 665, 415, 903, 873, 552, 286,
    751, 143, 866, 162, 267, 163, 246, 301, 240, 264, 87, 608, 789, 506, 577,
    487, 366, 985, 352, 574, 158, 241, 38, 628, 75, 431, 954, 101, 473, 878,
    168, 763, 416, 604, 862, 102, 114, 242, 18, 485, 280, 824, 258, 700,
  ].forEach((v) => bst.insert(v));
  expect(bst.isBalanced()).toBe(false);
});

test('rebalances an unbalanced tree', () => {
  const bst = Tree([1, 2, 3, 10, 11, 12]);
  [4, 5, 6, 7].forEach((v) => bst.insert(v));
  expect(bst.isBalanced()).toBe(false);

  bst.rebalance();
  expect(bst.isBalanced()).toBe(true);
});
