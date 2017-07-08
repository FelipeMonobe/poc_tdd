const chai = require('chai')
const arithmetic = require('./arithmetic')

const should = chai.should()

describe('Arithmetic', () => {
  describe('.sum(num1: number, num2: number, ...): number', () => {
    it('passing arguments 1 and 1 should return 2', () => {
      const actual = arithmetic.sum(1, 1)
      const expected = 2

      actual.should.equal(expected)
    })

    it('passing arguments 1, 1, 1, 1 should return 4', () => {
      const actual = arithmetic.sum(1, 1, 1, 1)
      const expected = 4

      actual.should.equal(expected)
    })

    it('passing argument 1 should return 1', () => {
      const actual = arithmetic.sum(1)
      const expected = 1

      actual.should.equal(expected)
    })

    it('passing arguments 1, 1, \'a\' should return 2', () => {
      const actual = arithmetic.sum(1, 1, 'a')
      const expected = 2

      actual.should.equal(expected)
    })

    it('passing arguments 0.5, 0.5 should return 1', () => {
      const actual = arithmetic.sum(0.5, 0.5)
      const expected = 1

      actual.should.equal(expected)
    })

    it('passing no arguments should return 0', () => {
      const actual = arithmetic.sum()
      const expected = 0

      actual.should.equal(expected)
    })

    it('passing arguments \'a\' and {} should return 0', () => {
      const actual = arithmetic.sum('a', {})
      const expected = 0

      actual.should.equal(expected)
    })
  })

  describe('.subtract(num1: number, num2: number, ...): number', () => {
    it('passing arguments 2, 1 should return 1', () => {
      const actual = arithmetic.subtract(2, 1)
      const expected = 1

      actual.should.equal(expected)
    })

    it('passing arguments 1, 1, 1 should return -1', () => {
      const actual = arithmetic.subtract(1, 1, 1)
      const expected = -1

      actual.should.equal(expected)
    })

    it('passing argument 1 should return -1', () => {
      const actual = arithmetic.subtract(1)
      const expected = -1

      actual.should.equal(expected)
    })

    it('passing arguments 1, \'a\' should return -1', () => {
      const actual = arithmetic.subtract(1, 'a')
      const expected = -1

      actual.should.equal(expected)
    })

    it('passing arguments 1, \'a\', 1 should return 0', () => {
      const actual = arithmetic.subtract(1, 'a', 1)
      const expected = 0

      actual.should.equal(expected)
    })

    it('passing arguments 0.5, 0.5 should return 0', () => {
      const actual = arithmetic.subtract(0.5, 0.5)
      const expected = 0

      actual.should.equal(expected)
    })

    it('passing no arguments should return 0', () => {
      const actual = arithmetic.subtract()
      const expected = 0

      actual.should.equal(expected)
    })

    it('passing arguments \'a\', {} should return 0', () => {
      const actual = arithmetic.subtract('a', {})
      const expected = 0

      actual.should.equal(expected)
    })
  })

  describe('.multiply(num1: number, num2: number, ...): number', () => {
    it('passing arguments 1, 1 should return 1', () => {
      const actual = arithmetic.multiply(1, 1)
      const expected = 1

      actual.should.equal(expected)
    })

    it('passing arguments 1, 2, 3 should return 6', () => {
      const actual = arithmetic.multiply(1, 2, 3)
      const expected = 6

      actual.should.equal(expected)
    })

    it('passing argument 2 should return 2', () => {
      const actual = arithmetic.multiply(2)
      const expected = 2

      actual.should.equal(expected)
    })

    it('passing arguments 1, \'a\' should return 1', () => {
      const actual = arithmetic.multiply(1, 'a')
      const expected = 1

      actual.should.equal(expected)
    })

    it('passing arguments 0.5, 2 should return 1', () => {
      const actual = arithmetic.multiply(0.5, 2)
      const expected = 1

      actual.should.equal(expected)
    })

    it('passing no arguments should return 0', () => {
      const actual = arithmetic.multiply()
      const expected = 0

      actual.should.equal(0)
    })

    it('passing arguments \'a\', {} should return 0', () => {
      const actual = arithmetic.multiply('a', {})
      const expected = 0

      actual.should.equal(0)
    })
  })
})
