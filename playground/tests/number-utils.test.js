const { expect, check } = require('allin');
const numberUtils = require('./../src/number-utils');

check('should return true for primes', () => {
    expect(numberUtils.isPrime(2));
    expect(numberUtils.isPrime(3));
    expect(numberUtils.isPrime(5));
    expect(numberUtils.isPrime(7));
    expect(numberUtils.isPrime(23));
});

check('should return false for non-primes', () => {
    expect(numberUtils.isPrime(4) === false);
    expect(numberUtils.isPrime(8) === false);
    expect(numberUtils.isPrime(10) === false);
    expect(numberUtils.isPrime(20) === false);
});
check('should simply fail', () => {
    expect(123 === 321);
});
