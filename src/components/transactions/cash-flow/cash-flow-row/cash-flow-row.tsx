import { FC } from "react";

import "./cash-flow-row.scss";

const CashFlowRow: FC = () => {
  return (
    <div className="cash-flow-row">
      <div className="cfr-details">
        <div className="cfr-label-wrapper">
          <div className="cfr-label-icon">
            <div className="cfr-triangle" />
          </div>
          <p className="cfr-label">Stripe</p>
          <p className="cfr-percentage">%70</p>
        </div>
        <p className="cfr-amount">
          $3,514 <span className="cfr-decimal">.72</span>
        </p>
      </div>
      <div className="cfr-progress">
        <div className="cfr-progress-completed"/>
      </div>
    </div>
  );
};

export default CashFlowRow;
