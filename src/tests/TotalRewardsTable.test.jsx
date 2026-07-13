import renderer from "react-test-renderer";

import TotalRewardsTable
    from "../components/TotalRewardsTable/TotalRewardsTable";


test(
    "total rewards snapshot",
    () => {

        const tree = renderer.create(<TotalRewardsTable
            data={{ John: 90 }}
        />
        ).toJSON();

        expect(tree)
            .toMatchSnapshot();
    });