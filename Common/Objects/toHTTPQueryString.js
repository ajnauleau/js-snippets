


const toHTTPQueryString = (object) => {
  let objArray = [];
  let iterator = Object.keys(object);
  //console.log(iterator);
  for (let param in object) {
    //console.log([param]);
    let key = param;
    let value = object[param];
    if(Array.isArray(value)) {
      for(let i=0; i<=value.length-1; i++) {
        objArray.push(`${key}=${value[i]}`);
      }
    } else {
      objArray.push(`${key}=${value}`);
    }
  }
  let input = "";
  for(let i=0; i<=objArray.length-2; i++){
    input = input + `${objArray[i]}&`;
    //console.log(input);
  }
  if(objArray[objArray.length-1] === undefined){
    input = '';
  } else {
    input = input + objArray[objArray.length-1];
  //console.log(input);
  }

  return input
}

export default toHTTPQueryString;
