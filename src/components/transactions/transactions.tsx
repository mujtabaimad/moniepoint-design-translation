import { FC } from "react";

import "./transactions.scss";
import RecentTransactions from "./recent-transactions/recent-transactions";
import CashFlow from "./cash-flow/cash-flow";

const Transactions: FC = () => {
  return (
    <div className="transactions">
      <RecentTransactions />
      <CashFlow />
    </div>
  );
};

export default Transactions;
