const { beforeAll, expect, check, scenario } = require('allin');

scenario('Testing to.be.sameAs', () => {
    
    beforeAll(() => {
        console.log('testing beforeAll boy');
    });

    scenario('Just testing before Each', () => {
        check('should to.be.sameAs work - PASSED', () => {
            expect(2).to.be.sameAs(2);
        });
    });
});