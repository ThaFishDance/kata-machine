function walk(node: BinaryNode<number> | null, path: number[]): number[] {
    // base case
    if (!node) {
        return path
    }
    // pre

    // recurse
    walk(node.left, path)
    walk(node.right, path)
    // visitNode
    path.push(node?.value)
    // post
    return path
}
export default function post_order_search(head: BinaryNode<number>): number[] {
    return walk(head, [])
}