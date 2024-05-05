import { FC, ReactNode } from "react";

import "./overview-card.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import AmountChangeArrow from "../../common/amount-change-arrow/amount-change-arrow";

type OverviewCardType = {
  title: string;
  animationComponent: ReactNode;
  changeDirection?: "up" | "down";
  amount: string;
  viewDetailsLabel: string;
};

const OverviewCard: FC<OverviewCardType> = ({
  title,
  animationComponent,
  changeDirection,
  amount,
  viewDetailsLabel
}) => {
  return (
    <div className="overview-card">
      <div className="animation-wrapper">{animationComponent}</div>
      <div className="overview-card-title-wrapper">
        <p className="overview-card-title">{title}</p>
        {changeDirection === "up" ? (
          <>
            <AmountChangeArrow changeDirection="up" />
            <p className="overview-card-title">12.3%</p>{" "}
          </>
        ) : changeDirection === "down" ? (
          <>
            <AmountChangeArrow changeDirection="down" />
            <p>-2.1%</p>
          </>
        ) : (
          <></>
        )}
      </div>
      <div className="overview-card-amount">
        <p className="overview-card-amount-value">{amount}</p>
        <div className="overview-card-view-details">
          <button className="overview-card-view-details-btn">
            {viewDetailsLabel}
          </button>
          <button className="overview-card-chart-btn">
            <FontAwesomeIcon icon={faChartLine} color="white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;
