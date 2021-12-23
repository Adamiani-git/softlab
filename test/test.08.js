const { expect } = require('chai')
const { describe } = require('mocha')
const { maxNum } = require('../src/08');


describe('Check max number', () => {
    it('shuld display max number 80', () => {
        const res = maxNum(75, 80);
        expect(res).to.equal(80)
    })
    it('shuld display max number 750', () => {
        const res = maxNum(750, 80);
        expect(res).to.equal(750)
    })
    it('shuld display ტოლია', () => {
        const res = maxNum(80, 80);
        expect(res).to.equal('ტოლია')
    })
    it('shuld throw error', () => {
        const res = maxNum(750);
        expect(res).to.equal('ვავა!')
    })
})
