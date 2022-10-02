type Node<T> = {
    value: T,
    next?: Node<T>
}

export default class Queue<T> {
    public length: number;
    public head?: Node<T>;
    public tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    // unshift - add to the queue
    enqueue(item: T): void {
        this.length++;
        const node = { value: item } as Node<T>
        if (!this.tail) {
            this.tail = this.head = node
            return
        }

        this.tail.next = node
        this.tail = node
    }

    // shift - remove first element from queue
    deque(): T | undefined {
        if (!this.head) return undefined;

        this.length--;

        const head = this.head;
        this.head = this.head.next;

        // if lang doesnt have garbage collector, you should free up memory
        return head.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}