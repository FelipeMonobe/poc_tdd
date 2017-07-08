const multiply = (...values) => {
  const nums = values
  .filter(x => typeof x === 'number')

  const initialLength = nums.length
  const firstNum = initialLength
  ? nums.shift()
  : 0

  if (!initialLength) return firstNum
  if (initialLength === 1) return 1 * firstNum

  return nums
  .reduce((acc, curr) => acc * curr, firstNum)
}

const subtract = (...values) => {
  const nums = values
  .filter(x => typeof x === 'number')

  const initialLength = nums.length
  const firstNum = initialLength
  ? nums.shift()
  : 0

  if (!initialLength) return firstNum
  if (initialLength === 1) return 0 - firstNum

  return nums
  .reduce((acc, curr) => acc - curr, firstNum)
}

const sum = (...values) => values
.filter(x => typeof x === 'number')
.reduce((acc, curr) => acc + curr, 0)

module.exports = {
  multiply,
  subtract,
  sum,
}
