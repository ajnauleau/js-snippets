
// Evaluate if every value in the array
// passes the callback function˝

const every = (array, func) => {
  let decider = true;
  results = array.map(func);
  console.log(results);
  for(let i=0; i<results.length; i++) {
    if(results[i] === false) {
      decider = false;
    }
  }
  return decider;
}

export default every;
