import { FC } from "react";

import "./amount-change-arrow.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

const AmountChangeArrow: FC<{ changeDirection: "up" | "down" }> = ({
  changeDirection,
}) => {
  return (
    <div
      className={`amount-change-arrow ${
        changeDirection === "down" ? "amount-change-arrow-lose" : ""
      }`}
    >
      <FontAwesomeIcon
        icon={changeDirection === "up" ? faArrowUp : faArrowDown}
        rotate={45}
        width={6}
        color="black"
      />
    </div>
  );
};

export default AmountChangeArrow;
