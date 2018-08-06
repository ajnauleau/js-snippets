// Pairs of Integers from 0 to n
// Generate and array of arrays containing
// all possible pairs built with the integer
// example: [[0,0], [0,1], [1,1]]

const generatePairs = (integer) => {
  const array = []
  let reducer = 0;
  for(let i=0; i<=integer; i++) {
    for(let j=0; j<=integer; j++) {
      if(j >= reducer) {
         array.push([i,j]);
      }
    };
    reducer++;
  };
  return array;
};

generatePairs(3);
