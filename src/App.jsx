import { useEffect, useState } from "react";

import TransactionsTable
  from "./components/TransactionsTable/TransactionsTable";

import MonthlyRewardsTable
  from "./components/MonthlyRewardsTable/MonthlyRewardsTable";

import LoadingIndicator
  from "./components/LoadingIndicator/LoadingIndicator";

import ErrorBoundary
  from "./components/ErrorBoundary/ErrorBoundary";


import { transactions }
  from "./data/transactions";

import { getMonthlyRewards }
  from "./utils/rewardAggregator";

import { getTotalRewards }
  from "./utils/totalRewards";
import TotalRewardsTable from "./components/MonthlyRewardsTable/TotalRewardsTable";



function App() {


  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);


  if (loading) {
    return <LoadingIndicator />;
  }


  return (
    <ErrorBoundary>
      <h1>Rewards Dashboard</h1>
      <TransactionsTable transactions={transactions}
      />
      <MonthlyRewardsTable
        data={
          getMonthlyRewards(transactions)
        }
      />
      <TotalRewardsTable data={getTotalRewards(transactions)} />
    </ErrorBoundary>
  );

}



export default App;