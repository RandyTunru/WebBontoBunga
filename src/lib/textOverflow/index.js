function textOverflow (text, length) {
  if (text.length <= length) {
    return text
  }
  return text.slice(0, length) + '...'
}

export default textOverflow