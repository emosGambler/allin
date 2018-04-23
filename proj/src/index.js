const colors = require('colors');

const check = (description, callback) => {
    try {
        callback();
        console.log(`${' ✓ '.bgGreen.black} ${description.green}`);
    } catch (e) {
        console.log(`${' FAILED '.bgRed.black} ${description.red}`);
        console.log(e.stack.red);
    }
};

const expect = (val) => {
    if (val) return true;
    throw new Error('Assersion failed.');
};

const xcheck = (description, callback) => {
    console.log(`${' IGNORED '.bgYellow.black} ${description.yellow}`);
};

module.exports = { check, expect, xcheck };