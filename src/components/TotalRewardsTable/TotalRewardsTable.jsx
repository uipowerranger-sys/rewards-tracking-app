import PropTypes from "prop-types";

const TotalRewardsTable = ({ data }) => {
    return (
        <section className="table-card">
            <div className="table-card__header">
                <h2>Total Rewards</h2>
            </div>
            <div className="table-responsive">
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
        </section>
    );
};

TotalRewardsTable.propTypes = {
    data: PropTypes.object.isRequired
};

export default TotalRewardsTable;
