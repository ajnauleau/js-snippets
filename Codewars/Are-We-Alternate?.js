
const isAlt = (string) => {
  const vowels = ['a','e','i','o','u'];
  const consto = ['b','c','d','f','g','h',
      'j','k','l','m','n','p','q','r','s',
      't','v','w','x','y','z'];
  let cacheAlt = undefined;
  let response = null;
  for(let i=0; i<string.length; i++) {
    console.log(cacheAlt);
    for(let j=0; j<vowels.length; j++) {
      if(string[i] === vowels[j]) {
        letterAlt = 'vowel';
      }
    }
    for(let k=0; k<consto.length; k++) {
      if(string[i] === consto[k]) {
        letterAlt = 'const';
      }
    }
    if(letterAlt === cacheAlt) {
      response = false;
      return response;
    } else if(letterAlt !== cacheAlt) {
      response = true;
    } else {
      response = undefined;
    }
    cacheAlt = letterAlt;
  }
  return response;
}

isAlt("apple");
