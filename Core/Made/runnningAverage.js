
const runningAverage = (num) => {
  function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
  }
  let currentAverage = [];
  let lCD = null;
  function internalFunction(num) {
    if (!currentAverage[0]) {
      lCD = 1;
      let parsed = Number.parseInt(num, 10);
      currentAverage.push(parsed);
      let roundAverage = round(currentAverage[0], 2);
      console.log('Init: ' + roundAverage);
      return roundAverage;

    } else {
      lCD++;
      let parsed = Number.parseInt(num, 10);
      let newSum = (currentAverage[0] + parsed);
      currentAverage[0] = newSum;
      let roundAverage = round(currentAverage[0] / lCD, 2);
      console.log('Build: ' + roundAverage);
      return roundAverage;
      
    }
  }

 return internalFunction;
};

rAvg = runningAverage();
rAvg(10);// 10.00
rAvg(11);// 10.50
rAvg(12);// 11.00
