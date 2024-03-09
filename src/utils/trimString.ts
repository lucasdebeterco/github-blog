export function trimString(string: string, length: number) {
    return string.length > length ? string.substring(0, length) + '...' : string
}