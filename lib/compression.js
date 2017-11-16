module.exports = compression = (input) => {
  if(typeof input === 'string'){
    
    const compressed = input.replace(/(.)\1*/g, function(repeat, letter) {
      return letter + repeat.length;
  })

  return compressed

  } else {
    return false
  }
};