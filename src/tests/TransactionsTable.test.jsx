import renderer from "react-test-renderer";

import TransactionsTable
    from "../components/TransactionsTable/TransactionsTable";


test(
    "Transactions table snapshot",
    () => {


        const mockTransactions = [

            {
                id: 1,
                customerName: "John",
                transactionDate: "2026-01-10",
                product: "Laptop",
                amount: 120
            }

        ];


        const tree =
            renderer
                .create(

                    <TransactionsTable
                        transactions={mockTransactions}
                    />

                )
                .toJSON();


        expect(tree)
            .toMatchSnapshot();


    });