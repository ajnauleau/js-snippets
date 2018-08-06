
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


function celebrityIDCreator (theCelebrities) {
    var i;
    var uniqueID = 100;
    for (i = 0; i < theCelebrities.length; i++) {
        theCelebrities[i]["id"] = function (j)  { // the j parametric variable is the i passed in on invocation of this IIFE
            return function () {
                return uniqueID + j; // each iteration of the for loop passes the current value of i into this IIFE and it saves the correct value to the array
            } () // BY adding () at the end of this function, we are executing it immediately and returning just the value of uniqueID + j, instead of returning a function.
        } (i); // immediately invoke the function passing the i variable as a parameter
    }

    return theCelebrities;
}
