module.exports = (a) => {
    return {
        to: {
            be: (expectedValue) => {
                if (a === expectedValue) return true;
                throw new Error(`The values are not the same.\n\nActual: ${a}\nExpected: ${expectedValue}`);
            },
            not: {
                be: (expectedValue) => {
                    if (a !== expectedValue) return true;
                    throw new Error(`The values are the same.\n\nActual: ${a}\nExpected: ${expectedValue}`);
                }
            }
        }
    }
}; 