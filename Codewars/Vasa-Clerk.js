
const tickets = (line) => {
  let bill25 = 0, bill50 = 0; bill100 = 0;
  for(let i=0; i<line.length; i++) {
    switch(line[i]) {
      case 25:
        bill25 += 1;
        break;
      case 50:
        bill50 += 1; bill25 -= 1;
        break;
      case 100:
        if(bill50 == 0 && bill25 >= 3){
          bill25 -= 3; bill100 += 1;
        } else {
          bill25 -= 1; bill50 -= 1; bill100 += 1;
        }
        break;
      default:
        return 'YES';
    }
    if(bill25 < 0 || bill50 < 0 || bill100 < 0){
       return 'NO';
    }
  }
  return 'YES';
}

tickets([25, 50, 25, 100, 25, 25, 25, 50, 100, 100]);
