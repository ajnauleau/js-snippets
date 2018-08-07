

const beggars = (array, num) => {

  beggarsArray = new Array(num).fill(0);

  for(let i=0; i<num; i++) {
    for(let j=i; j<array.length; j+=num) {
        beggarsArray[i] = beggarsArray[i] + array[j];
    }
  }

  return beggarsArray;
}

beggars([1,2,3,4,5],6)
