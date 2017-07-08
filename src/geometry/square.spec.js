const chai = require('chai')
const squares = require('./square')

const should = chai.should()

describe('Geometry', () => {
  const multiplyStub = (n, m) => n * m
  const arithmeticMock = {
    multiply: multiplyStub,
  }

  describe('#square', () => {
    const squareService = squares
    .make(arithmeticMock)

    describe('.calculatePerimeter(side: number): number', () => {
      it('passing argument 2 should return 8', () => {
        const expected = 8
        const actual = squareService
        .calculatePerimeter(2)

        actual.should.equal(expected)
      })

      it('passing argument 0 should return 0', () => {
        const expected = 0
        const actual = squareService
        .calculatePerimeter(0)

        actual.should.equal(expected)
      })

      it('passing argument \'a\' should return 0', () => {
        const expected = 0
        const actual = squareService
        .calculatePerimeter('a')

        actual.should.equal(expected)
      })

      it('passing no arguments should return 0', () => {
        const expected = 0
        const actual = squareService
        .calculatePerimeter()

        actual.should.equal(expected)
      })

      it('passing argument -1 should return 0', () => {
        const expected = 0
        const actual = squareService
        .calculatePerimeter(-1)

        actual.should.equal(expected)
      })
    })

    describe('.calculateArea(side: number): number', () => {
      it('passing argument 2 should return 4', () => {
        const expected = 4
        const actual = squareService
        .calculateArea(2)

        actual.should.equal(expected)
      })

      it('passing argument 0 should return 0', () => {
        const expected = 0
        const actual = squareService
        .calculateArea(0)

        actual.should.equal(expected)
      })

      it('passing argument \'a\' should return 0', () => {
        const expected = 0
        const actual = squareService
        .calculateArea('a')

        actual.should.equal(expected)
      })

      it('passing no arguments should return 0', () => {
        const expected = 0
        const actual = squareService
        .calculateArea()

        actual.should.equal(expected)
      })

      it('passing argument -1 should return 0', () => {
        const expected = 0
        const actual = squareService
        .calculateArea(-1)

        actual.should.equal(expected)
      })
    })
  })
})
