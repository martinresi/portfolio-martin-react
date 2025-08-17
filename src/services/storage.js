export function clear() {
    localStorage.clear();
}

export function saveObject(key, object) {
    localStorage.setItem(key, JSON.stringify(object));
}

export function getObject(key) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
}