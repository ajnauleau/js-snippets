
// similar functionality as .concat() 
// concat([2, 3, 4], 5, 6, [7, 8]);

const concat = (array, ...arguments) => {
  for (let i = 0; i < arguments.length; i++) {
    if(Array.isArray(arguments[i])){
      array.push(...arguments[i]);
    } else {
      array.push(arguments[i]);
    }
  }
  return array;
}

export default concat;
