export const numberToString = (value) => {
  if (value > 0) {
    return parseInt(value, 10).toString()
  }

  return 0
}

export const floatNumberToString = (value) => {
  if (value) {
    return parseFloat(value).toString()
  }

  return 0
}
