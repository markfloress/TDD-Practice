module.exports = isDrome = (input) => {
  if(typeof input === 'string'){
    const word = input.split('').reverse().join('')

    const noSpc = word.replace(/\s/g, '')
    const origNoSpc = input.replace(/\s/g, '')

    const drome = noSpc === origNoSpc

    if(drome) {
      return true
    } else {
      return false
    }

    return true

  } else {
    return false
  }
};