import { FC } from "react";
import "./money-out-animation.scss";

const MoneyOutAnimation:FC = ()=>{
    return (
        <div className="money-out-animation">
            <div className="mua-arrow mua-arrow-1">
                <div className="mua-arrow-head"/>
                <div className="mua-arrow-body"/>
            </div>
            <div className="mua-arrow mua-arrow-2">
                <div className="mua-arrow-head"/>
                <div className="mua-arrow-body"/>
            </div>
            <div className="mua-circles">
                <div className="mua-outer-circle"/>
                <div className="mua-inner-circle"/>
            </div>
        </div>
    )
}


export default MoneyOutAnimation;