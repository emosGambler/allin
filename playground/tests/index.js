const allin = require('allin');

//require('./unit.test');
var promise1 = new Promise((resolve, reject) => {
    require('./request.test');
    resolve('starting test');
});
var promise2 = new Promise((resolve, reject) => {
    allin.end();
    resolve('end of test');
});

promise1.then(value => {
    console.log(value);
    return promise2;
}).then(value => {
    console.log(value);
});