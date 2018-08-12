/* Given an array of numbers (not necessarily unique values),
your goal is to measure how close the array is to being
sorted by counting the number of inversions it has. An
inversion occurs when two numbers in the array are out
of order.

Implement a function called numInversions which counts
the number of inversions in the array. */

/*
0. init shallow copy of array, sort ascending, compare
1. find biggest, if < biggest
2. find smallest, and left most index
3. switch with number to the left
4. once at the end, start a step 2 again (build function)
5. once reached biggest, end (limit from if statement)
*/

const numInversions = (array) => {
  //let length = array.length;
  let shallow = array.slice(0);
  let inversions = 0;
  function compareArrays(array1, array2) {
    let value = null;
    for(let i=0; i<array1.length; i++) {
      if(array1[i] !== array2[i]) {
        value = false;
      } else {
        value = true;
      };
    };
    return value;
  };
  function findLargest(array) {
    let largest = null;
    for(let i=0; i<array.length; i++) {
      if(array[i] > largest) {
        largest = array[i];
      }
    }
    return largest;
  };
  function smallestLeft(array, startIndex) {
    let smallest = array[startIndex];
    let index = undefined;
    for(let i=startIndex; i<array.length; i++) {
      if(array[i] <= smallest) {
        smallest = array[i];
        index = i;
      };
      if(array[0] = smallest) {
        smallest++
      };
    }
    this.smallest = smallest;
    return index;
  };

  let ascend = shallow.sort((a,b) => { return a - b; });
  console.log(ascend + ' VS ' + array);
  console.log(compareArrays(array, ascend));
  let biggest = findLargest(array);
  //let smallest = smallestLeft.smallest;
  let index = smallestLeft(array, 0);
    while(!compareArrays(array, ascend) && array[index] < biggest) {
      for(let i=index; i>0; i--) {
        console.log('Numbers being flipped: ' + array[i-1] + ' | ' + array[i]);
        //let tmp = array[i];
        //array[i] = array[i-1];
        //array[i-1] = tmp;
        array[i], array[i-1] = array[i-1], array[i];
        console.log('Flipping...');
        console.log(array);
        inversions++;
        console.log('Index during while loop: ' + index);
        return;
      };
      index = smallestLeft(array, index);
      console.log('Returned Index: ' + index);
    }
  console.log('Inversions ' + inversions);
  return inversions;
}

numInversions([]); // 0
numInversions([5]); // 0
numInversions([1,2]); // 0
numInversions([2,1]); // 1
numInversions([1,2,3]); // 0
numInversions([1,3,2]); // 1
numInversions([3,1,2]); // 2
numInversions([3,2,1]); // 3
numInversions([5,3,4,1,2]); // 8
numInversions([1,1,1,1]); // 0
numInversions([2,2,1,1]); // 4
numInversions([3,3,3,2,2,1]); // 11
numInversions([8, 6, 6, 1, 1, 1, 3, 4, 2]); // 22
