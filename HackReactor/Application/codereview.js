const myArray = [];

let fullName = 'Antoine Nauleau';
myArray.push(fullName);

let skypeHandle = 'findantoine';
myArray.push(skypeHandle);

const cutName = (name) => {
 let shiftedName = name.shift();
 let arrayToString = shiftedName.toString();
 let splitArray = arrayToString.split(' ');
   name.unshift(splitArray);
  return splitArray;
 };

let myInfo = {
  fullName: cutName(myArray),
  skype: myArray[1],
  github: '@ajnauleau'
};

console.log(myInfo);
