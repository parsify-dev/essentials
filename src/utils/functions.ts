export const bin = (number: number): string => (number >>> 0).toString(2);
export const oct = (number: number): string => (number >>> 0).toString(8);
export const hex = (number: number): string => (number >>> 0).toString(16);
