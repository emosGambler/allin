const deepEqual = require('deep-equal');

module.exports = (a) => {
    return {
        to: {
            be: {
                falsy: () => {
                    if (!a) return true;
                    throw new Error(`The value is not falsy.\n\nActual: ${a}\nExpected: falsy`);
                },
                sameAs: (expectedValue) => {
                    if (a === expectedValue) return true;
                    throw new Error(`The values are not the same.\n\nActual: ${a}\nExpected: ${expectedValue}`);
                },
                truthy: () => {
                    if (a) return true;
                    throw new Error(`The value is not truthy.\n\nActual: ${a}\nExpected: truthy`);
                }
            },
            deeplyEqual: (expectedValue) => {
                if (deepEqual(a, expectedValue)) return true;
                throw new Error(`The values are not deeply equal.\n\nActual: ${JSON.stringify(a)}\nExpected: ${JSON.stringify(expectedValue)}`);
            },
            equal: (expectedValue) => {
                if (a == expectedValue) return true;
                throw new Error(`The values are not equal.\n\nActual: ${a}\nExpected: ${expectedValue}`);
            },
            not: {
                be: {
                    sameAs: (expectedValue) => {
                        if (a !== expectedValue) return true;
                        throw new Error(`The values are the same.\n\nActual: ${a}\nExpected: ${expectedValue}`);
                    }
                },
                equal: (expectedValue) => {
                    if (a != expectedValue) return true;
                    throw new Error(`The values are equal.\n\nActual: ${a}\nExpected: ${expectedValue}`);
                }
            }
        }
    }
}; 