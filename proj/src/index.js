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

module.exports = { check, expect };