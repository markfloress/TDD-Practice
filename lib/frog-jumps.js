module.exports = frogJumps = (start, end, jumpLength) => {
    if(start >= end) return 0

    let distance = end - start
    let jumps = distance/jumpLength
    if(jumps > end){
      return jumps + 1
    } else {
      return jumps
    }

  };