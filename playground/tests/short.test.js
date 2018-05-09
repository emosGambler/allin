const { beforeAll, expect, check, scenario } = require('allin');
const request = require('request');

scenario('Testing to.be.sameAs', () => {
    
    beforeAll(() => {
        console.log('testing beforeAll boy');
    });

    scenario('Testing request', () => {
        check('should to.be.sameAs work - PASSED', () => {
            console.log('1');
            request('https://http.cat/200', function (error, response, body) {
                console.log('2');
            });
            console.log('3');
        });
    });
});