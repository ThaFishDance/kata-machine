export function isAnagram(a: any, b: any): boolean {
    if (a.length !== b.length) {
        return false
    }
    a = a.split('').sort().join()
    b = b.split('').sort().join()
    if (a !== b) {
        return false
    }
    return true
}