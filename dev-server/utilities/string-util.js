const isEmpty = value => {
  return !value || !value.trim()
}

const capitalize = word => {
  return word.charAt(0).toUpperCase()
}

module.exports = {
  isEmpty,
  capitalize
}
