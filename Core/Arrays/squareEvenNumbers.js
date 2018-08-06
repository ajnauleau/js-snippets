// squares each even number in an array,
// then returns the sum

const squareEvenNumbers = (array) => {
  let sum = 0;
  for(let i=0; i<array.length; i++) {
     if(array[i] % 2 == 0) {
       sum = sum + array[i]**2;
     }
  }
  return sum;
}

export default squareEvenNumbers;

// squareEvenNumbers([1,2,1,4]);
