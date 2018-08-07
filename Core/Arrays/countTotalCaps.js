
// Count the nuber of caps in each string
// value in an array. Return the count.
// totalCaps(["Elie", "Jacob", "Tim"]) // 3

const countTotalCaps = (array) => {
  let count = 0;
  for(let i=0; i<array.length; i++) {
    let capitalized = array[i].toUpperCase();
    for(let j=0; j<capitalized.length; j++) {
      if(array[i][j] === capitalized[j]) {
        count++;
        console.log(array[i][j]);
      }
    }
  }
  return(count);
}

export default countTotalCaps;
