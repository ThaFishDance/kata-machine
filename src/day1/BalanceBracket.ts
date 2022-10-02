export default function balanceBrackets(str: string): boolean {
    if (str.length === 0) return true
    const stack: string[] = []
    let flag = true
    Array.from(str).forEach((char) => {
        if (char === '(') {
            stack.push(char)
        }

        if (char === ')') {
            if (stack.pop() !== '(') {
                flag = false
            }
        }
    })

    if (stack.length > 0) {
        flag = false
    }
    return flag
}