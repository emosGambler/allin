const deepEqual = require('deep-equal');

module.exports = (actualValue) => {
    return {
        to: {
            be: {
                falsy: () => {
                    if (!actualValue) return true;
                    throw new Error(`Given value is not falsy.\n\nActual: ${actualValue}\nExpected: falsy`);
                },
                sameAs: (expectedValue) => {
                    if (actualValue === expectedValue) return true;
                    throw new Error(`Given values are not the same.\n\nActual: ${actualValue}\nExpected: ${expectedValue}`);
                },
                truthy: () => {
                    if (actualValue) return true;
                    throw new Error(`Given value is not truthy.\n\nActual: ${actualValue}\nExpected: truthy`);
                }
            },
            deeplyEqual: (expectedValue) => {
                if (deepEqual(actualValue, expectedValue)) return true;
                throw new Error(`Given values are not deeply equal.\n\nActual: ${JSON.stringify(actualValue)}\nExpected: ${JSON.stringify(expectedValue)}`);
            },
            equal: (expectedValue) => {
                if (actualValue == expectedValue) return true;
                throw new Error(`Given values are not equal.\n\nActual: ${actualValue}\nExpected: ${expectedValue}`);
            },
            not: {
                be: {
                    sameAs: (expectedValue) => {
                        if (actualValue !== expectedValue) return true;
                        throw new Error(`Given values are the same.\n\nActual: ${actualValue}\nExpected: ${expectedValue}`);
                    }
                },
                equal: (expectedValue) => {
                    if (actualValue != expectedValue) return true;
                    throw new Error(`Given values are equal.\n\nActual: ${actualValue}\nExpected: ${expectedValue}`);
                }
            }
        }
    }
}; 