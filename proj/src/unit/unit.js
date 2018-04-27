const assertions = require('./../matchers/assert');
const colors = require('colors');

const beforeEachStack = [[]];
const summary = { success: 0, fail: 0, ignored: 0};

const request = () => {
    return require('request-promise');
};

const beforeAll = (callback) => {
    callback();
};

const beforeEach = (callback) => {
    beforeEachStack[beforeEachStack.length - 1].push(callback);
};

const check = (description, callback) => {
    var promise1 = new Promise((resolve, reject) => {
        runEveryBeforeEach();
        resolve('beforeEach done');
    });
    var promise2 = new Promise((resolve, reject) => {
        callback();
        resolve('good');
        /*try {
            callback();
            resolve(`${' ✓ '.bgGreen.black} ${description.green}`);
            summary.success++;
        } catch (e) {
            reject(`${' FAILED '.bgRed.black} ${description.red}`);
            //console.log(e.stack.red);
            summary.fail++;
        }*/
    });
    promise1.then((value) => {
        console.log(value);
        return promise2;
    }).then(value => {
        console.log(value);
    });
};

const end = () => {
    var promise1 = new Promise((resolve, reject) => {
        console.log(`\nTest summary:`);
        console.log(`   Success: ${summary.success}`.green);
        console.log(`   Fail: ${summary.fail}`.red);
        console.log(`   Ignored: ${summary.ignored}`.yellow);
        console.log('\n');
        if (summary.fail > 0) process.exit(1);
        process.exit(0);
        resolve(' i dont even know');
    });
    promise1;
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
    var promise1 = new Promise((resolve, reject) => {
        beforeEachStack.push([]);
        resolve(`\n Scenario: ${title}`.cyan);
    });
    var promse2 = new Promise((resolve, reject) => {
        callback();
        resolve('check is loaded');
    });
    var promise3 = new Promise((resolve, reject) => {
        beforeEachStack.pop();
        resolve('end of check');
    });

    promise1.then(value => {
        return promise2;
    }).then(value => {
        return promise3;
    });
};

const xcheck = (description, callback) => {
    console.log(`${' IGNORED '.bgYellow.black} ${description.yellow}`);
    summary.ignored++;
};

module.exports = { beforeAll, beforeEach, check, request, end, expect, scenario, xcheck };