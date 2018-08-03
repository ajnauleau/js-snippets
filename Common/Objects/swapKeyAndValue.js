
// Accepts an object and a key, and returns
// a new object with the key and its value
// flipped. Example:
// let testObject = { parent: 'child' };
// swapKeyAndValue(testObject, 'parent');

const swapKeyAndValue = (object, key) => {

  let swapValue = key;
  for(let lock in object) {
    if(object.hasOwnProperty(lock)) {
      if(key === lock) {
        swapValue = lock;
      }
    }
  }

  let swapKey = '';
  for(let property in object) {
    if(object[key] === object[property]) {
      swapKey = object[property];
    }
  }

  //commence swapping
  if(swapKey !== key) {

    const newObject = {};

    Object.keys(object).forEach(prop => {
        if (prop === key) {
            newObject[swapKey] = swapValue;
        } else {
            newObject[prop] = object[prop];
        }
    });
    return newObject;
  }

}

export default swapKeyAndValue;
