import { FC } from "react";

import "./business-savings-animation.scss";

const BusinessSavingsAnimation: FC = () => {
  return (
    <div className="bsa-wrapper">
      <div className="bsa-top-triangle"/>
      <div className="bsa-mid-box"/>
      <div className="bsa-bottom-triangle"/>
      <div className="bsa-plate bsa-plate-4"/>
      <div className="bsa-plate bsa-plate-3"/>
      <div className="bsa-plate bsa-plate-2"/>
      <div className="bsa-plate bsa-plate-1"/>
    </div>
  );
};

export default BusinessSavingsAnimation;
