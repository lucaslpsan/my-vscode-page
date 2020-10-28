import { writable } from 'svelte/store';

function createMenuClick() {
    const { subscribe, update } = writable(0);

    return {
        subscribe,
        show: () => update(n => 1),
        close: () => update(n => 0)
    };
}

function createMenuClickLocal() {
    const { subscribe, update } = writable(0);

    return {
        subscribe,
        local: (localName) => update(n => localName)
    };
}

export const menuShown = createMenuClick();
export const menuShownLocal = createMenuClickLocal();