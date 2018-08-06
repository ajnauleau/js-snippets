
var newerThanVersion = function(v1, v2) {
  let arrayV1 = v1.split('');
  let arrayV2 = v2.split('');
  /*
  if(v1 > v2) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
  */
  console.log(arrayV1);
  console.log(arrayV2);

  let response = null;

  for(let i=0; i<v1.length; i++) {
    if(!isNaN(arrayV1[i])){
      if (arrayV1[i] > arrayV2[i]) {
        response = true;
        break;
      } else {
        response = false;
      }
    }
  }
  return response;
  console.log(response);
  //console.log(arrayV1);
  //console.log(v2);
}
