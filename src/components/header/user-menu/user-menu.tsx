import { faGear, faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons"
import { faBell } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FC } from "react"

import "./user-menu.scss"
import { UserImg } from "../../../assets/images/images"

const UserMenu:FC = ()=>{
    return (
        <div className="user-menu">
            <FontAwesomeIcon icon={faMagnifyingGlass}/>
            <FontAwesomeIcon icon={faBell}/>
            <div className="user-menu-split"></div>
            <FontAwesomeIcon icon={faGear} />
            <img src={UserImg} alt="user" className="user-img"/>
        </div>
    )
}

export default UserMenu