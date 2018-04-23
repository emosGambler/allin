const colors = require('colors');

const check = (description, callback) => {
    try {
        callback();
        console.log(`${' ✓ '.bgGreen.black} ${description}`);
    } catch (e) {
        console.log(`${' X '.bgRed.black} ${description}`);
        console.log(e.stack.red);
    }
};

const expect = (val) => {
    if (val) return true;
    throw new Error('Assersion failed.');
};

const xcheck = (description, callback) => {
    console.log(`${' IGNORED '.bgYellow.black} ${description}`);
};

module.exports = { check, expect, xcheck };