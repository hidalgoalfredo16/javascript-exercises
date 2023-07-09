const sumAll = function(startNumber, endNumber) {
  if(Number.isSafeInteger(startNumber) && 
    Number.isSafeInteger(endNumber) &&
    startNumber >= 0 &&
    endNumber >= 0
  ){
    if(endNumber < startNumber) {
      const aux = endNumber;
      endNumber = startNumber;
      startNumber = aux;
    }

    let sum = 0;
    for(let i = startNumber; i <= endNumber ; i++){
      sum += i;
    }
    return sum;
  } else {
    return 'ERROR'
  }
};

// Do not edit below this line
module.exports = sumAll;
