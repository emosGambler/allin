const assertions = require('./matchers/assert');
const colors = require('colors');

const beforeEachStack = [[]];
const summary = { success: 0, fail: 0, ignored: 0};

const beforeAll = (callback) => {
    callback();
};

const beforeEach = (callback) => {
    beforeEachStack[beforeEachStack.length - 1].push(callback);
};

const check = (description, callback) => {
    runEveryBeforeEach();
    try {
        callback();
        console.log(`${' ✓ '.bgGreen.black} ${description.green}`);
        summary.success++;
    } catch (e) {
        console.log(`${' FAILED '.bgRed.black} ${description.red}`);
        console.log(e.stack.red);
        summary.fail++;
    }
};

const end = () => {
    console.log(`\nTest summary:`);
    console.log(`   Success: ${summary.success}`.green);
    console.log(`   Fail: ${summary.fail}`.red);
    console.log(`   Ignored: ${summary.ignored}`.yellow);
    console.log('\n');
    if (summary.fail > 0) process.exit(1);
    process.exit(0);
};

const expect = (actualValue) => {
    if (actualValue !== undefined) {
        return assertions(actualValue);
    };
    throw new Error('Assersion failed. Given value is undefined.');
};

const runEveryBeforeEach = () => {
    beforeEachStack.forEach(level => {
        level.forEach(callback => {
            callback();
        });
    });
};

const scenario = (title, callback) => {
    beforeEachStack.push([]);
    console.log(`\n Scenario: ${title}`.cyan);
    callback();
    beforeEachStack.pop();
};

const xcheck = (description, callback) => {
    console.log(`${' IGNORED '.bgYellow.black} ${description.yellow}`);
    summary.ignored++;
};

module.exports = { beforeAll, beforeEach, check, end, expect, scenario, xcheck };