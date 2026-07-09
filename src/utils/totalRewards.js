import { calculateRewards }
    from "./rewardCalculator";


export const getTotalRewards = (transactions) => {


    return transactions.reduce(
        (acc, item) => {


            const points =
                calculateRewards(item.amount);


            acc[item.customerName] =
                (acc[item.customerName] || 0)
                + points;


            return acc;


        }, {});


};