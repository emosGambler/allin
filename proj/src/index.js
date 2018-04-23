const check = (description, callback) => {
    try {
        callback();
        console.log(`OK ${description}`);
    } catch (e) {
        console.log(`FAIL ${description}`);
        console.log(e.stack);
    }
};

const expect = (val) => {
    if (val) return true;
    throw new Error('Assersion failed.');
};

module.exports = { check, expect };