module.exports = (a) => {
    return {
        to: {
            be: (expectedValue) => {
                if (a === expectedValue) return true;
                throw new Error(`The values are not the same.\n\nFound: ${a}\nWanted: ${expectedValue}`);
            }
        }
    }
}; 