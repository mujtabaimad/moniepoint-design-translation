import { FC } from "react";
import "./money-in-animation.scss";

const MoneyInAnimation:FC = ()=>{
    return (
        <div className="money-in-animation">
            <div className="mia-arrow mia-arrow-1">
                <div className="mia-arrow-body"/>
                <div className="mia-arrow-reversed-head"/>
            </div>
            
            <div className="mia-arrow mia-arrow-2">
                <div className="mia-arrow-body"/>
                <div className="mia-arrow-reversed-head"/>
            </div>
            <div className="mia-circles">
                <div className="mia-outer-circle"/>
                <div className="mia-inner-circle"/>
            </div>
        </div>
    )
}


export default MoneyInAnimation;