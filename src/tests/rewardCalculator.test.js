import {
    calculateRewards
}
    from "../utils/rewardCalculator";


describe(
    "Reward calculation",
    () => {
        test("calculate points above 100 dollars", () => { expect(calculateRewards(120)).toBe(90); });


        test("calculate points between 50 and 100", () => {
            expect(calculateRewards(75)).toBe(25);
        });

        test("zero points below 50", () => {
            expect(calculateRewards(40)).toBe(0);
        });


    });