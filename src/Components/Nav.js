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

        <div className={"NavBar"}>
            <div className={" container d-flex justify-content-between align-items-center mt-2 mb-2"}>
                <div className={"NavBar-menu"}>
                    <FontAwesomeIcon className={"pointer hover-scale"} icon={faBars} onClick={()=>toggle()}/>
                </div>
                <div className={"NavBar-links"}>
                    <ul className={"list-style-none m-0 d-md-flex d-none "}>
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
            <div className={state===true?"container d-flex d-md-none":"container d-md-none hide"}>
                <ul className={"list-style-none m-0 d-md-none p-0 p-3 md-nav-links"}>
                    <li className={"mr-1 mb-2"}>
                        <p className={"m-0 pointer hover-scale"}>HOME</p>
                    </li>
                    <li className={"mr-1 mb-2"}>
                        <p className={"m-0 pointer hover-scale"}>MEN</p>
                    </li>
                    <li className={"mr-1 mb-2"}>
                        <p className={"m-0 pointer hover-scale"}>WOMEN</p>
                    </li>
                    <li className={"mr-1 mb-2"}>
                        <p className={"m-0 pointer hover-scale"}>LOOKBOOK</p>
                    </li>
                    <li className={"mr-1 mb-2"}>
                        <p className={"m-0 pointer hover-scale"}>ABOUT</p>
                    </li>
                    <li>
                        <p className={"m-0 pointer hover-scale"}>BLOG</p>
                    </li>
                </ul>
            </div>
        </div>

    )

}