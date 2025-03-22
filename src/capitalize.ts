export function capitalize(str: string): string {
    const newStr = Array.from(str);
    let i = 0;

    while (!isLetter(newStr[i]) && i < str.length) i++;

    newStr[i] = str.charAt(i).toUpperCase();

    return newStr.join('');
};

function isLetter(char: string): boolean {
    return /^[\p{Letter}]$/u.test(char);
}