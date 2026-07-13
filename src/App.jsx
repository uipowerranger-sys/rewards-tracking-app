import { useEffect, useState } from "react";

import TransactionsTable
  from "./components/TransactionsTable/TransactionsTable";

import MonthlyRewardsTable
  from "./components/MonthlyRewardsTable/MonthlyRewardsTable";

import LoadingIndicator
  from "./components/LoadingIndicator/LoadingIndicator";

import ErrorBoundary
  from "./components/ErrorBoundary/ErrorBoundary";

import { getMonthlyRewards }
  from "./utils/rewardAggregator";

import { getTotalRewards }
  from "./utils/totalRewards";
import TotalRewardsTable from "./components/MonthlyRewardsTable/TotalRewardsTable";



function App() {

  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const transactionsUrl =
      `${import.meta.env.BASE_URL ?? ""}data/transactions.json`;

    fetch(transactionsUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Failed to load transactions: ${response.status} ${response.statusText}`
          );
        }
        return response.json();
      })
      .then((data) => setTransactions(data))
      .catch((fetchError) => {
        console.error(fetchError);
        setError(fetchError);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <div className="error-message">Unable to load rewards data.</div>;
  }

  return (
    <ErrorBoundary>
      <main className="app-shell">
        <section className="hero">
          <h1>Rewards Dashboard</h1>
          <p className="subtitle">
            A clean overview of customer transactions, monthly reward points, and total points for easy decision making.
          </p>
        </section>

        <div className="grid">
          <TransactionsTable transactions={transactions} />

          <div className="panel-group">
            <MonthlyRewardsTable data={getMonthlyRewards(transactions)} />
            <TotalRewardsTable data={getTotalRewards(transactions)} />
          </div>
        </div>
      </main>
    </ErrorBoundary>
  );

}



export default App;