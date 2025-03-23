interface IAnalyzeArray {
    average: number;
    min: number;
    max: number;
    length: number;
}

export function analyzeArray(arr: number[]): IAnalyzeArray | null {
    if (arr.length === 0) return null;
    const length = arr.length;
    arr = arr.sort((a, b) => a - b);
    const result = {
        average: arr[Math.floor(length / 2)],
        length: length,
        max: arr[length - 1],
        min: arr[0]
    }
    return result;
}
