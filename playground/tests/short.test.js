const { beforeAll, expect, check, scenario } = require('allin');
const request = require('request');

scenario('Testing to.be.sameAs', () => {
    
    beforeAll(() => {
        console.log('testing beforeAll boy');
    });

    scenario('Just testing before Each', () => {
        check('should to.be.sameAs work - PASSED', () => {
            request('https://http.cat/200', function (error, response, body) {
                console.log('2');
                resolve(response.statusCode);
            });
            expect(2).to.be.sameAs(2);
        });
    }).t;
});