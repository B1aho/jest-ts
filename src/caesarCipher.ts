export function caesarCipher(str: string, offset: number): string {
    let strArray = Array.from(str);
    offset = offset % 26;
    strArray = strArray.map((letter, idx) => {
        let charCode = str.charCodeAt(idx) + offset;
        if (letter >= 'a' && letter <= 'z') {
            if (charCode > 122)
                charCode -= 26;
            else if (charCode < 97)
                charCode += 26;
        } else if (letter >= 'A' && letter <= 'Z') {
            if (charCode > 90)
                charCode -= 26;
            else if (charCode < 65)
                charCode += 26;
        }
        return String.fromCharCode(charCode);
    });
    return strArray.join('');
}