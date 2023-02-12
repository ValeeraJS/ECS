export interface IManager<T> {
    elements: Map<number, T>;
    usedBy: any[];
    add: (element: T) => this;
    clear: () => this;
    get: (name: string | number | (new () => any)) => T | null;
    has: (element: T | string | number) => boolean;
    remove: (element: T | string | number) => this;
}
