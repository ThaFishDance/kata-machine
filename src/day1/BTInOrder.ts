function walk(node: BinaryNode<number> | null, path: number[]): number[] {
    // base case
    if (!node) {
        return path
    }
    // pre

    // recurse
    walk(node.left, path)
    // visitNode
    path.push(node?.value)
    walk(node.right, path)
    // post
    return path
}


export default function in_order_search(head: BinaryNode<number>): number[] {
    return walk(head, [])
}