import { FC, useState } from "react";

import "./cash-flow.scss";
import { CashFlowIcon } from "../../../assets/images/images";
import MoneyInAnimation from "./money-in-animation/money-in-animation";
import MoneyOutAnimation from "./money-out-animation/money-out-animation";
import CashFlowRow from "./cash-flow-row/cash-flow-row";

const CashFlow: FC = () => {
  const [activeTab, setActiveTab] = useState<string>("first");

  return (
    <div className="cash-flow">
      <div className="cash-flow-header-wrapper">
        <div className="cash-flow-header">
          <img src={CashFlowIcon} alt="cash flow" className="cash-flow-icon" />
          <p className="cash-flow-label">Cash Flow</p>
          <p className="cash-flow-subtext">Last 30 days</p>
        </div>
        <button className="cash-flow-see-all-btn">See All</button>
      </div>
      <div className="money-tabs">
        <button
          className={`money-tab ${activeTab === "first" ? "active" : ""}`}
          onClick={() => {
            setActiveTab("first");
          }}
        >
          <MoneyInAnimation />
          <div className="money-tab-details">
            <p className="money-tab-label">MONEY IN</p>
            <div className="money-tab-value">$5,083</div>
          </div>
        </button>
        <button
          className={`money-tab ${activeTab !== "first" ? "active" : ""}`}
          onClick={() => {
            setActiveTab("second");
          }}
        >
          <MoneyOutAnimation />
          <div className="money-tab-details">
            <p className="money-tab-label">MONEY OUT</p>
            <p className="money-tab-value">
              $485<span className="decimal">.64</span>
            </p>
          </div>
        </button>
      </div>
      <div className="cash-flow-table">
        <CashFlowRow
          label="Stripe"
          amount="$3,514"
          decimal=".72"
          percentage={70}
        />
        <CashFlowRow
          label="Crypto Academy"
          amount="$1,017"
          decimal=".49"
          percentage={20}
        />
        <CashFlowRow
          label="Wire Return"
          amount="$318"
          decimal=".44"
          percentage={6}
        />
      </div>
    </div>
  );
};

export default CashFlow;
