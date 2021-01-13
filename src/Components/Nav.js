import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faSearch} from "@fortawesome/free-solid-svg-icons";
import {faHeart} from "@fortawesome/free-regular-svg-icons";

export default function Nav () {

    const [state,setState] = useState(false);

    const toggle = () => {
        setState(!state);
    }

    return (

        <div className={"NavBar container d-flex justify-content-between align-items-center"}>
            <div className={"NavBar-menu"}>
                <FontAwesomeIcon className={"pointer hover-scale"} icon={faBars} />
            </div>
            <div className={"NavBar-links"}>
                <ul className={"list-style-none d-flex m-0"}>
                    <li className={"mr-1"}>
                        <p className={"m-0 pointer hover-scale"}>HOME</p>
                    </li>
                    <li className={"mr-1"}>
                        <p className={"m-0 pointer hover-scale"}>MEN</p>
                    </li>
                    <li className={"mr-1"}>
                        <p className={"m-0 pointer hover-scale"}>WOMEN</p>
                    </li>
                    <li className={"mr-1"}>
                        <p className={"m-0 pointer hover-scale"}>LOOKBOOK</p>
                    </li>
                    <li className={"mr-1"}>
                        <p className={"m-0 pointer hover-scale"}>ABOUT</p>
                    </li>
                    <li>
                        <p className={"m-0 pointer hover-scale"}>BLOG</p>
                    </li>
                </ul>
            </div>
            <div className={"NavBar-support d-flex"}>
                <FontAwesomeIcon className={"pointer hover-scale"} icon={faHeart} />
                <div className={"mr-2 ml-2 bl-1"} />
                <FontAwesomeIcon className={"pointer hover-scale"} icon={faSearch} />
            </div>
        </div>

    )

}