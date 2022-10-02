"use strict";
exports.__esModule = true;
var Stack = /** @class */ (function () {
    function Stack() {
        this.length = 0;
        this.head = undefined;
    }
    Stack.prototype.push = function (item) {
        this.length++;
        var node = { value: item };
        if (!this.head) {
            this.head = node;
            return;
        }
        node.prev = this.head;
        this.head = node;
    };
    Stack.prototype.pop = function () {
        if (!this.head)
            return undefined;
        this.length--;
        var head = this.head;
        this.head = head.prev;
        return head.value;
    };
    Stack.prototype.peek = function () {
        var _a;
        return (_a = this.head) === null || _a === void 0 ? void 0 : _a.value;
    };
    return Stack;
}());
exports["default"] = Stack;
