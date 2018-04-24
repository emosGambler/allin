module.exports = (a) => {
    return {
        toBe: b => {
            if (a === b) return true;
            throw new Error(`The values are not the same.\n\nFound: ${a}\nWanted: ${b}`);
        }
    }
}; 