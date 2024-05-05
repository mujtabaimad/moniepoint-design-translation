import { FC } from "react";

import "./cash-flow-row.scss";
import { ProgressBackground } from "../../../../assets/images/images";

type CashFlowRowType = {
  label: string;
  percentage: number;
  amount: string;
  decimal: string;
};

const CashFlowRow: FC<CashFlowRowType> = ({
  label,
  percentage = 70,
  amount,
  decimal,
}) => {
  return (
    <div className="cash-flow-row">
      <div className="cfr-details">
        <div className="cfr-label-wrapper">
          <div className="cfr-label-icon">
            <div className="cfr-triangle" />
          </div>
          <p className="cfr-label">{label}</p>
          <p className="cfr-percentage">%{percentage}</p>
        </div>
        <p className="cfr-amount">
          {amount} <span className="cfr-decimal">{decimal}</span>
        </p>
      </div>
      <div
        className="cfr-progress"
        style={{ backgroundImage: `url("${ProgressBackground}")` }}
      >
        <div
          className="cfr-progress-completed"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default CashFlowRow;
