import { FC } from "react";

import "./business-account-animation.scss";

const BusinessAccountAnimation: FC = () => {
  return (
    <div className="baa-wrapper">
      <div className="baa-hidden-circle" />
      <div className="baa-circles">
        <div className="baa-outer-circle" />
        <div className="baa-middle-circle" />
        <div className="baa-inner-circle" />
      </div>
      <div className="baa-head" />
    </div>
  );
};

export default BusinessAccountAnimation;
