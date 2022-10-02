import { isAnagram } from "@code/Anagram";

test('should be anagram', () => {
    expect(isAnagram('act', 'cat')).toBe(true)
    expect(isAnagram('dog', 'god')).toBe(true)
    expect(isAnagram('tac', 'tak')).toBe(false)
    expect(isAnagram('tac', 'l')).toBe(false)
})