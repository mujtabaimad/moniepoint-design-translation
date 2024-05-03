import {
  faChevronDown,
  faChevronUp,
  faDiamond,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import { FramerLogo, MainLogo } from "../../../assets/images/images";

import "./logos.scss";

const Logos: FC = () => {
  return (
    <div className="logos">
      <img src={MainLogo} alt="Main logo" className="main-logo" />
      <FontAwesomeIcon icon={faDiamond} color="#32374c" width={7} />
      <div className="framer">
        <img src={FramerLogo} alt="Main logo" className="framer-logo" />
        <p>Framer</p>
      </div>
      <button className="options-icons">
        <FontAwesomeIcon icon={faChevronUp} color="#777c91" width={8} />
        <FontAwesomeIcon icon={faChevronDown} color="#777c91" width={8} />
      </button>
    </div>
  );
};

export default Logos;
