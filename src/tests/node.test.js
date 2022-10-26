import Node from '../node';

test('node is created with null data and left and right pointers', () => {
  const node = Node();
  expect(node.data).toBe(null);
  expect(node.left).toBe(null);
  expect(node.right).toBe(null);
});

test('node is created with correct data', () => {
  const node = Node('test');
  expect(node.data).toBe('test');
});
