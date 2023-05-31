export function isStringEmpty (str) {
    return (!str || /^\s*$/.test(str))
}
