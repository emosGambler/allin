const colors = require('colors');

const summary = { success: 0, fail: 0, ignored: 0};

const check = (description, callback) => {
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

const expect = (val) => {
    if (val) return true;
    throw new Error('Assersion failed.');
};

const xcheck = (description, callback) => {
    console.log(`${' IGNORED '.bgYellow.black} ${description.yellow}`);
    summary.ignored++;
};

module.exports = { check, end, expect, xcheck };