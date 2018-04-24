const { expect, check, scenario, xcheck } = require('allin');

scenario('Testing be', () => {
    check('should to.be work - PASSED', () => {
        expect(2).to.be(2);
    });
    check('should to.be work - FAILED', () => {
        expect(2).to.be('3');
    });
    check('should to.not.be work - PASSED', () => {
        expect(2).to.not.be(3);
    });
    check('should to.not.be work - PASSED', () => {
        expect(2).to.not.be('2');
    });
});

scenario('Testing equal', () => {
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

scenario('Testing deep-equal', () => {
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