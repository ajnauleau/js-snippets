
/*
function round2Fixed(value) {
  value = +value;

  if (isNaN(value))
    return NaN;

  // Shift
  value = value.toString().split('e');
  value = Math.round(+(value[0] + 'e' + (value[1] ? (+value[1] + 2) : 2)));

  // Shift back
  value = value.toString().split('e');
  return (+(value[0] + 'e' + (value[1] ? (+value[1] - 2) : -2))).toFixed(2);
}
*/

const runningAverage = (num) => {
  let currentAverage = [];
  let lCD = null;
  function internalFunction(num) {
    if (!currentAverage[0]) {
      lCD = 1;
      let parsed = Number.parseInt(num, 10);
      currentAverage.push(parsed);
      let roundAverage = currentAverage[0];
      console.log('Init: ' + roundAverage);
      return roundAverage;//.toFixed(2);

    } else {
      lCD++;
      let parsed = Number.parseInt(num, 10);
      let newSum = (currentAverage[0] + parsed);
      currentAverage[0] = newSum;
      let roundAverage = currentAverage[0] / lCD;
      console.log('Build: ' + roundAverage);
      return roundAverage.toFixed(2);

    }
  }

 return internalFunction;

};

rAvg = runningAverage();
rAvg(10);// 10.00
rAvg(11);// 10.50
rAvg(12);// 11.00
