
// find the sum of 3 consecutive numbers
// in the array, that is odd

const threeOddNumbers = (array) => {
  let response = undefined;
  for(let i=0; i<array.length; i++) {
    let tmpArray = array.slice(0);
    let nArray = tmpArray.splice(i, 3); //i+3
    if(nArray.length >= 3) {
      let sum = nArray.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      });
      switch(sum) {
        case 0:
          response = undefined;
          break;
        case 1:
          return true;
          break;
        case 2:
          response = false;
          break;
        default:
          response = false;
      };
      if(!(sum%2 === 0)) {
        console.log(nArray);
        console.log(sum);
        return true;
      };
    }
  }
  return response;
}

threeOddNumbers([1,2,3,4,5]);
