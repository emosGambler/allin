const { beforeAll, beforeEach, expect, check, request, scenario, xcheck } = require('allin');

scenario('Testing requests', () => {
    scenario('Nested scenario', () => {
        check('should show body from request', () => {
            request('https://http.cat/200', function (error, response, body) {
                console.log('body:', body);
            });
        });
    });
});