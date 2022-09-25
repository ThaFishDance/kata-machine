import Stack from "./Stack"

function dfs(head: BinaryNode<number> | null, needle: number): boolean {
  if (!head) {
    return false
  }

  const stack = new Stack()
  stack.push(head)

  do {
    const curr = stack.pop() as BinaryNode<number>
    if (curr.value === needle) {
      return true
    }
    if (curr?.left) stack.push(curr.left)
    if (curr?.right) stack.push(curr.right)
  } while (stack.length > 0)
  return false
}

export default dfs