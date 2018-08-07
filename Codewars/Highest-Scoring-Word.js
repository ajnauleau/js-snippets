

const highestScoringWord = (string) => {

  function pointsCount(letter) {
    let letterArray = ['a','b','c','d','e','f',
      'g','h','i','j','k','l','m','n','o','p',
      'q','r','s','t','u','v','w','x','y','z'];
    for(let i=0; i<letterArray.length; i++) {
      if(letter == letterArray[i]) {
        return (i + 1);
      }
    }
  }

  let splitString = string.split(' ');
  let highest = '';
  let score = 0;
  for(let i=0; i<splitString.length; i++) {
    let word = splitString[i];
    let count = 0;
    for(let j=0; j<word.length; j++) {
      let points = pointsCount(word[j].toString());
      count = count + points;
      if(count > score) {
        highest = word;
        score = count;
      }
      console.log(count);

    }
    console.log(word + ' ' + count);
  }
  return(highest);
}

highestScoringWord("awesome things happening here");
