export function isObjectEmpty(obj) {
    return Object.keys(obj).length === 0;
}

export function isStringEmpty(str) {
    return (!str || /^\s*$/.test(str));
}