import { FC } from "react";

import "./overview.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faEllipsis,
  faEye,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { OverviewIcon } from "../../assets/images/images";
import OverviewCard from "./overview-card/overview-card";
import BusinessAccountAnimation from "./overview-card/bussiness-account-animation/business-account-animation";
import TaxReserveAnimation from "./overview-card/tax-reserve-animation/tax-reserve-animation";
import BusinessSavingsAnimation from "./overview-card/business-savings-animation/business-savings-animation";
import AmountChangeArrow from "../common/amount-change-arrow/amount-change-arrow";

const Overview: FC = () => {
  return (
    <div className="overview">
      <div className="balance-wrapper">
        <div className="balance-col">
          <h3 className="balance-title">TOTAL BALANCE</h3>
          <div className="balance">
            <p className="balance-value">$36,254</p>
            <div className="balance-change">
              <AmountChangeArrow changeDirection="up"/>
              <p className="balance-change-value">$328.32 Today, Feb 15</p>
            </div>
          </div>
        </div>
        <div className="balance-actions">
          <button className="balance-action-btn analytics-btn">
            <FontAwesomeIcon icon={faEye} />
            <p>View Analytics</p>
          </button>
          <div className="balance-actions-separator" />
          <button className="balance-action-btn send-money-btn">
            <FontAwesomeIcon icon={faArrowUp} />
            <p>Send Money</p>
          </button>
          <button className="balance-action-btn add-money-btn">
            <FontAwesomeIcon icon={faPlus} />
            <p>Add Money</p>
          </button>
          <button className="balance-actions-drop-menu-btn">
            <FontAwesomeIcon icon={faEllipsis} color="white"/>
          </button>
        </div>
      </div>
      <div className="overview-wrapper">
        <div className="overview-title-wrapper">
          <img src={OverviewIcon} alt="overview" className="overview-img" />
          <p className="overview-title">
            Overview
            <span className="overview-days">Last 30 days</span>
          </p>
        </div>
      </div>

      <div className="overview-cards">
        <OverviewCard
          title="BUSINESS ACCOUNT"
          changeDirection="up"
          amount="$33,842"
          animationComponent={<BusinessAccountAnimation/>}
          viewDetailsLabel="View Account Details"
          expandable
        />
        <OverviewCard
          title="TAX RESERVE"
          changeDirection="down"
          amount="$700"
          animationComponent={<TaxReserveAnimation/>}
          viewDetailsLabel="Edit Tax Automation"
        />
        <OverviewCard
          title="BUSINESS SAVINGS"
          amount="$1,623"
          animationComponent={<BusinessSavingsAnimation/>}
          viewDetailsLabel="View Account Details"
        />
      </div>
    </div>
  );
};

export default Overview;
