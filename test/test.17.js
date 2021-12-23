const { expect } = require('chai');
const { describe } = require('mocha');
const { palindrome } = require('../src/17');


describe('Check palindrome', () => {
    it('shuld display true', () => {
        const result = palindrome('abba');
        expect(result).to.equals(true)
    })
    it('shuld display არა', () => {
        const result = palindrome('Boney M');
        expect(result).to.be.equal('არა')
    })
    it('shuld throw error', () => {
        const result = palindrome(750);
        expect(result).to.equal('არა')
    })
})
