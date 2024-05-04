import { FC } from "react";

import "./tax-reserve-animation.scss";

const TaxReserveAnimation: FC = () => {
  return (
    <div className="tra-wrapper">
      <div className="tra-file">
        <div className="tra-file-cover" />
      </div>
      <div className="tra-charts">
        <div className="tra-top-chart" />
        <div className="tra-bottom-chart" />
      </div>
      <div className="tra-wrapper-cover" />
    </div>
  );
};

export default TaxReserveAnimation;
