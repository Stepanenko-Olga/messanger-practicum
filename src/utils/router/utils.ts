import Block from "../Block/Block";

export function isEqual(lhs: string, rhs: string): boolean {
    return lhs === rhs;
}

export function render(query: string, block: Block) {
    const root = document.querySelector(query);

    if (root === null) {
        throw new Error(`root not found by selector "${query}"`);
    }

    root.innerHTML = '';

    root.append(block.getContent()!);

    return root;
}
