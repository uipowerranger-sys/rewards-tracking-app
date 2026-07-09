import {
    getMonthlyRewards
}
    from "../utils/rewardAggregator";

describe("Monthly rewards aggregation", () => {

    test("group rewards by customer and month", () => {
        const transactions = [
            {
                customerName: "John",
                transactionDate: "2026-01-10",
                amount: 120
            }
        ];
        const result = getMonthlyRewards(transactions);
        expect(result.John["January 2026"]).toBe(90);
    });


});