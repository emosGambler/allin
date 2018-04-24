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