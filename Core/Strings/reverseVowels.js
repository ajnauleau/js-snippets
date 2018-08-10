

const reverseVowels = (string) => {
  const vowels = ['a','e','i','o','u'];
  let vowelCache = [];
  for(let i=0; i<string.length; i++) {
    for(let j=0; j<vowels.length; j++) {
      if(string[i] === vowels[j]) {
        vowelCache.push(vowels[j]);
      }
    }
  }
  let vowelReverse = vowelCache.reverse();
  //console.log(vowelReverse);
  stringArray = string.slice(0).split('');
  arrayCopy = string.split('');
  for(let k=0; k<stringArray.length; k++) {
    for(let l=0; l<vowels.length; l++) {
      if(stringArray[k] === vowels[l]) {
          let vowel = vowelReverse.shift();
          //console.log(vowel);
          arrayCopy[k] = vowel;
          //console.log(arrayCopy);
      }
    }
  }
  return arrayCopy.join('');

}

reverseVowels("apple");

/*
String.prototype.replaceAt = (index, replacement) => {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}*/
/*
function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}
*/
