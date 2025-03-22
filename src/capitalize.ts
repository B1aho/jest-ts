export function capitalize(str: string): string {
    const newStr = Array.from(str);
    newStr[0] = str.charAt(0).toUpperCase()
    return newStr.join('');
};