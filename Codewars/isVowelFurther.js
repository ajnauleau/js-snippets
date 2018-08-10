

const isVowelFurther = (string) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let cache = undefined;
  let response = null;
  for(let i=0; i<string.length; i++) {
    for(let j=0; j<vowels.length; j++) {
      if(string[i] == vowels[j]) {
        while(j >= cache) {
          response = true;
          cache = j;
        }
        response = false;
      }
    }
  }
  return response;
}

export default isVowelFurther;
