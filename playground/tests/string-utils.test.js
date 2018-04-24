const { expect, check, scenario, xcheck } = require('allin');
const stringUtils = require('./../src/string-utils');

scenario('String utils', () => {
    check('should first letter be capitalized', () => {
        expect(stringUtils.capitalizeFirstLetter('why so serious?') === 'Why so serious?');
        expect(stringUtils.capitalizeFirstLetter('why So Serious?') === 'Why So Serious?');
    });
    
    xcheck('should string be blank', () => {
        expect(stringUtils.isBlank(''));
        expect(stringUtils.isBlank('      '));
    });
    
    check('should return true if starts with query', () => {
        expect(stringUtils.startsWith('It is easy', 'It')).to.be(true);
        expect(!stringUtils.startsWith('It is easy', 'easy'));
        expect(!stringUtils.startsWith('It is easy', 'something'));
    });
    
    check('should not be blank', () => {
        expect(!stringUtils.isBlank('something'));
    });

    check('should be cool', () => {
        expect('this').to.be('this');
    });

    check('should not be cool but pass', () => {
        expect('this').to.not.be('that');
    });

    check('should not be cool but pass', () => {
        expect('this').to.not.be('this');
    });
});