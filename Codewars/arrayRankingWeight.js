
function rankings(arr){
  let arrayCopy = arr.slice(0);
  let arrayWeight = [];
  arrayCopy.sort((a, b) => {
    return b - a;
  });
  for(let i=0; i<arr.length; i++) {
    console.log(arr[i]);
    console.log(arrayCopy);
    arrayWeight.push(arrayCopy.indexOf(arr[i])+1);
  }
  return arrayWeight;
}

rankings([10, 5, 20]);
