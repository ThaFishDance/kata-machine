import bfs, { bfsQ } from "@code/BTBFS";
import { tree } from "./tree";

test("bt bfs", function () {
    expect(bfs(tree, 45)).toEqual(true);
    expect(bfs(tree, 7)).toEqual(true);
    expect(bfs(tree, 69)).toEqual(false);
});
test("bt bfs", function () {
    expect(bfsQ(tree, 45)).toEqual(true);
    expect(bfsQ(tree, 7)).toEqual(true);
    expect(bfsQ(tree, 69)).toEqual(false);
});




