const myArray = [];
      //['Antoine Nauleau', 'findantoine'];

let fullName = "Antoine Nauleau";
myArray.push(fullName);

let skypeHandle = 'findantoine';
myArray.push(skypeHandle);

const cutName = (name) => {

  // *worked in text editor
 //let shiftedName = name.shift();
 //let arrayToString = shiftedName.toString();
 //let splitArray = arrayToString.split(' ');
  // name.unshift(splitArray);
  //return splitArray;

  let nameString = name.toString();
   let split = nameString.split(' ');
   return split;
 };

let myInfo = {
  fullName: cutName(myArray[0]),
  skype: myArray[1],
  github: '@ajnauleau'
};

console.log(myInfo);
