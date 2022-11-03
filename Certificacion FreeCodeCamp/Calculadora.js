let UNIT_AMOUNT = [
  ["PENNY", .01],
  ["NICKEL", .05],
  ["DIME", .10],
  ["QUARTER", .25],
  ["ONE", 1.00],
  ["FIVE", 5.00],
  ["TEN", 10.00],
  ["TWENTY", 20.00],
  ["ONE HUNDRED", 100.00]
]

UNIT_AMOUNT = UNIT_AMOUNT.reverse();

function checkCashRegister(price, cash, cid) {
 let total_cid = 0;
  for (let i = 0; i < cid.length; i++) {
    total_cid += cid[i][1];
  }
  total_cid = total_cid.toFixed(2);

  let difference = (cash - price); 
  let newArr = [];

  if (difference > total_cid) {
    return {status: "INSUFFICIENT_FUNDS", change: newArr}
  }
  else if (difference == total_cid) {
    return {status: "CLOSED", change: cid}
  }
  else if (difference < total_cid) {
    cid = cid.reverse();
    for (let i = 0; i < cid.length; i++) {
      
      let temp = [cid[i][0], 0]; 
    
      while (difference >= UNIT_AMOUNT[i][1] && (cid[i][1] > 0)){
        temp[1] = temp[1] + UNIT_AMOUNT[i][1];
        cid[i][1] = cid[i][1] - UNIT_AMOUNT[i][1];
        difference = difference - UNIT_AMOUNT[i][1];
        difference = difference.toFixed(2);
      }
  
      if (temp[1] > 0) {
        newArr.push(temp);
      }
    }
  }

  if (difference > 0) {
    return {status: "INSUFFICIENT_FUNDS", change: [] };
  }


  return {status: "OPEN", change: newArr};
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
