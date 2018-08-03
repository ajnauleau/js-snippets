
const filter = (array, func) => {
  let decider = [];
  results = array.map(func);
  console.log(results);
  for(let i=0; i<results.length; i++) {
    if(results[i]) {
      decider.push(array[i]);
    }
  }
  return decider;
}

export default filter;
