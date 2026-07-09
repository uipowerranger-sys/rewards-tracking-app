import PropTypes from "prop-types";


const TotalRewardsTable = ({ data }) => {
    return (
        <div>
            <h2>Total Rewards</h2>
            <table>
                <thead>
                    <tr>
                        <th>Customer</th>
                        <th>Total Points</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.entries(data)
                            .map(([customer, points]) => (
                                <tr key={customer}>
                                    <td>{customer}</td>
                                    <td>{points}</td>
                                </tr>
                            ))
                    }
                </tbody>
            </table>
        </div>
    );
};


TotalRewardsTable.propTypes = {

    data: PropTypes.object.isRequired

};


export default TotalRewardsTable;