import PropTypes from "prop-types";

const TransactionsTable = ({ transactions }) => {

  return (
    <section className="table-card">
      <div className="table-card__header">
        <h2>Transactions</h2>
      </div>
      <div className="table-responsive">
        <table>

        <thead>
          <tr>
            <th>Customer</th>
            <th>Date</th>
            <th>Product</th>
            <th>Amount</th>
          </tr>
        </thead>

        <tbody>

        {
          transactions.map((item)=>(

            <tr key={item.id}>

              <td>{item.customerName}</td>

              <td>{item.transactionDate}</td>

              <td>{item.product}</td>

              <td>${item.amount}</td>

            </tr>

          ))
        }

        </tbody>

        </table>
      </div>
    </section>
  );

};


TransactionsTable.propTypes={
  transactions:PropTypes.array.isRequired
};


export default TransactionsTable;