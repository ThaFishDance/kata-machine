import balanceBrackets from "@code/BalanceBracket";

test("Balance Brackets", () => {
    expect(balanceBrackets("(david)((abby))")).toEqual(true)
    expect(balanceBrackets("()rose(jeff")).toEqual(false)
    expect(balanceBrackets(")(")).toEqual(false)
    expect(balanceBrackets("()")).toEqual(true)
    expect(balanceBrackets("(((potato())))")).toEqual(true)
    expect(balanceBrackets("(())(water)()")).toEqual(true)
    expect(balanceBrackets("(())(water()()")).toEqual(false)
    expect(balanceBrackets("")).toEqual(true)
    expect(balanceBrackets("))()")).toEqual(false)
})