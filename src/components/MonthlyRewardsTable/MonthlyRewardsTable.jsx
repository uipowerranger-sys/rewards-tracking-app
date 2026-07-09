import PropTypes from "prop-types";


const MonthlyRewardsTable = ({ data }) => {


    return (

        <div>

            <h2>Monthly Rewards</h2>


            <table border="1">

                <thead>

                    <tr>

                        <th>Customer</th>

                        <th>Month</th>

                        <th>Points</th>

                    </tr>

                </thead>


                <tbody>


                    {
                        Object.keys(data)
                            .map(customer => (


                                Object.keys(data[customer])
                                    .map(month => (


                                        <tr key={customer + month}>

                                            <td>{customer}</td>

                                            <td>{month}</td>

                                            <td>
                                                {data[customer][month]}
                                            </td>

                                        </tr>


                                    ))

                            ))

                    }


                </tbody>


            </table>


        </div>


    );


};


MonthlyRewardsTable.propTypes = {

    data: PropTypes.object.isRequired

};


export default MonthlyRewardsTable;