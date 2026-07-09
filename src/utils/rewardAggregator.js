import { calculateRewards } 
from "./rewardCalculator";


export const getMonthlyRewards = (transactions) => {

  return transactions.reduce((result, transaction)=>{


    const month =
      new Date(transaction.transactionDate)
      .toLocaleString(
        "default",
        {
          month:"long",
          year:"numeric"
        }
      );


    const points =
      calculateRewards(
        transaction.amount
      );


    if(!result[transaction.customerName]){

      result[transaction.customerName]={};

    }


    result[transaction.customerName][month] =
      (result[transaction.customerName][month] || 0)
      + points;


    return result;


  },{});

};