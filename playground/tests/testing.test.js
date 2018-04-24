const { beforeAll, beforeEach, expect, check, scenario, xcheck } = require('allin');

scenario('Testing to.be.sameAs', () => {
    
    beforeAll(() => {
        console.log('testing beforeAll boy');
    });

    beforeEach(() => {
        console.log('what');
    });
    
    scenario('Just testing before Each', () => {
        
        beforeAll(() => {
            console.log('testing second beforeAll boy');
        });
        
        beforeEach(() => {
            console.log('is it');
        });

        check('should to.be.sameAs work - PASSED', () => {
            expect(2).to.be.sameAs(2);
        });
        check('should to.be.sameAs work - FAILED', () => {
            expect(2).to.be.sameAs('3');
        });
        check('should to.not.be.sameAs work - PASSED', () => {
            expect(2).to.not.be.sameAs(3);
        });
        check('should to.not.be.sameAs work - PASSED', () => {
            expect(2).to.not.be.sameAs('2');
        });
    });
});

scenario('Testing to.equal', () => {

    beforeEach(() => {
        console.log('my lord?');
    });

    check('should to.equal work - PASSED', () => {
        expect(2).to.equal(2);
    });
    check('should to.equal work - PASSED', () => {
        expect(2).to.equal('2');
    });
    check('should to.equal work - FAILED', () => {
        expect(2).to.equal('3');
    });
    check('should to.not.equal work - FAILED', () => {
        expect(2).to.not.equal('2');
    });
    check('should to.not.equal work - PASSED', () => {
        expect(2).to.not.equal('3');
    });
});

scenario('Testing to.deep-equal', () => {
    check('should to.deeplyEqual work - PASSED', () => {
        expect(2).to.deeplyEqual(2);
    });
    check('should to.deeplyEqual work - PASSED', () => {
        expect({ 'lol': 2, 'xD': 3 }).to.deeplyEqual({ 'lol': 2, 'xD': 3 });
    });
    check('should to.deeplyEqual work - FAILED', () => {
        expect({ 'lol': 2, 'xD': 2 }).to.deeplyEqual({ 'lol': 2, 'xD': 3 });
    });
    check('should to.deeplyEqual work - FAILED', () => {
        expect({ 'lol': 2, 'xd': 2 }).to.deeplyEqual({ 'lol': 2, 'xD': 2 });
    });
});

scenario('Testing to.be.truthy', () => {
    check('should to.be.truthy work - PASSED', () => {
        expect(2).to.be.truthy();
    });
    check('should to.be.truthy work - FAILED', () => {
        expect(0).to.be.truthy();
    });
    check('should to.be.truthy work - PASSED', () => {
        expect([]).to.be.truthy();
    });
    check('should to.be.truthy work - FAILED', () => {
        expect(null).to.be.truthy();
    });
});

scenario('Testing to.be.falsy', () => {
    check('should to.be.falsy work - PASSED', () => {
        expect(0).to.be.falsy();
    });
    check('should to.be.falsy work - FAILED', () => {
        expect(1).to.be.falsy();
    });
    check('should to.be.falsy work - PASSED', () => {
        expect('').to.be.falsy();
    });
    check('should to.be.falsy work - PASSED', () => {
        expect(null).to.be.falsy();
    });
});