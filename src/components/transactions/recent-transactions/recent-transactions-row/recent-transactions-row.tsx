import { FC, useMemo } from "react";

import "./recent-transactions-row.scss";
import { DropboxLogo } from "../../../../assets/images/images";

type RecentTransactionsRow = {
  logo: string;
  companyName: string;
  timestamp: string;
  tag: string;
  amount: number;
};

const RecentTransactionsRow: FC<RecentTransactionsRow> = ({
  logo,
  companyName,
  timestamp,
  tag,
  amount,
}) => {
  const amountComponent = useMemo(() => {
    const sign = amount < 0 ? "-" : "+";

    const formattedNumber = Math.abs(amount).toLocaleString();
    const splittedNumber = formattedNumber.split(".");

    const wholeNumber = splittedNumber[0];
    let decimalNumber = ".00";
    if (splittedNumber.length > 1) {
      decimalNumber = `.${splittedNumber[1]}`;
    }

    return (
      <p className={amount > 0 ? "positive" : ""}>
        {sign}$
        {wholeNumber}
        <span className="decimal">{decimalNumber}</span>
      </p>
    );
  }, [amount]);

  return (
    <div className="recent-transaction-row">
      <div className="recent-transaction-cell">
        <img
          src={logo}
          alt="company logo"
          className="recent-transaction-company-logo"
        />
        <div className="recent-transaction-company">
          <p className="company-label">{companyName}</p>
          <p className="company-timestamp">{timestamp}</p>
        </div>
      </div>
      <div className="recent-transaction-cell">
        <button className="transaction-type-tag">{tag}</button>
      </div>
      <div className="recent-transaction-cell last-cell">{amountComponent}</div>
    </div>
  );
};

export default RecentTransactionsRow;
