import Queue from "./Queue"

export default function bfs(head: BinaryNode<number>, needle: number): boolean {
  const q = [head]

  while (q.length) {
    const curr = q.shift() as BinaryNode<number> | undefined | null
    if (!curr) {
      continue
    }
    if (curr?.value === needle)
      return true

    if (curr.left) {
      q.unshift(curr.left)
    }
    if (curr.right) {
      q.unshift(curr.right)
    }
  }
  return false

}

export function bfsQ(head: BinaryNode<number>, needle: number): boolean {
  const q = new Queue()
  q.enqueue(head)

  while (q.length > 0) {
    const curr = q.deque() as BinaryNode<number> | undefined | null
    if (curr?.value === needle) {
      return true
    }
    if (curr?.left) {
      q.enqueue(curr.left)
    }
    if (curr?.right) {
      q.enqueue(curr.right)
    }
  }
  return false
}