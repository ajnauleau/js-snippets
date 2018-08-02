

function assert(condition, error) {

  if(!assert) {
    console.log(error);
  } else {
    console.log('test passed');
  };

};

function compareArray(first, second) {

  let response = undefined;

  for(var i = 0; i < first.length; i++) {
    if(first[i] !== second[i]) {
      console.log(first[i] + false);
      response = false;

    } else {
      console.log(first[i] + true);
      response = true;
    }
  };

  return response;
}

var one = [1, 2, 3, 4, 5];
var two = [1, 2, 3, 4, 5];
var three = [1, 9, 2, 3, 6];
var four = [1, 2, 3, 4, 5, 6];

assert(compareArray(one, two) === true, "The answer should be true");
compareArray(one, two);
assert(compareArray(one, three) === false, "The answer should be false");
compareArray(one, three);
assert(compareArray(one, four) === false, "The answer should be false");
compareArray(one, four);
