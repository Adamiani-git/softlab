const { expect } = require('chai')
const { describe } = require('mocha')
const { qm } = require('../src/15');


describe('Check if ? included', () => {
    it('shuld display true if ? included', () => {
        const res = qm('text?');
        expect(res).to.equal(true)
    })
    it('shuld display false if ? not included', () => {
        const res = qm('text');
        expect(res).to.equal(false)
    })
    it('shuld throw error', () => {
        const res = qm(750);
        expect(res).to.equal('ვავა!')
    })
})
