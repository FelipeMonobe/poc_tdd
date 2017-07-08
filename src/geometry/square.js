const make = ({ multiply }) => {
  const calculateArea = (side) => {
    if (typeof side !== 'number') return 0
    if (side < 0) return 0

    return multiply(side, side)
  }
  const calculatePerimeter = (side) => {
    if (typeof side !== 'number') return 0
    if (side < 0) return 0

    return multiply(side, 4)
  }

  return {
    calculateArea,
    calculatePerimeter,
  }
}

module.exports = {
  make,
}
