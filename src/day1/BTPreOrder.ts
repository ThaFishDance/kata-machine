function walk(node: BinaryNode<number> | null, path: number[]): number[] {
    // base case
    if (!node) {
        return path
    }
    // visitNode
    // pre
    path.push(node?.value)

    // recurse
    walk(node.left, path)
    walk(node.right, path)
    // post
    return path
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
    return walk(head, [])
}