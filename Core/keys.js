
// has similar functionality to .keys()

const keys = (object) => {
  let keys = [];
  for(let locks in object) {
    if(object.hasOwnProperty(locks)) {
      keys.push(locks);
    }
  }
  return keys;
}

export default keys;
