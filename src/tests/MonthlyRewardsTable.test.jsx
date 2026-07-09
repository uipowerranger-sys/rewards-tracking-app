import renderer from "react-test-renderer";


import MonthlyRewardsTable
    from "../components/MonthlyRewardsTable/MonthlyRewardsTable";


test(
    "Monthly rewards snapshot",
    () => {


        const data = {

            John: {
                "January 2026": 90
            }

        };


        const tree =
            renderer.create(

                <MonthlyRewardsTable
                    data={data}
                />

            )
                .toJSON();


        expect(tree)
            .toMatchSnapshot();


    });