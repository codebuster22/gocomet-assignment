import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretLeft} from "@fortawesome/free-solid-svg-icons";

const imageUrls = [
    "https://source.unsplash.com/collection/219941/900x1200",
    "https://source.unsplash.com/collection/9454911/900x1200",
    "https://source.unsplash.com/collection/1198107/900x1200",
    "https://source.unsplash.com/collection/762960/900x1200",
]

export default function ProductDetails () {

    const [currThumb, setCurrThumb] = useState(0);

    const renderImage = (images) => {

        return images.map((image,index)=>{
            return (
                <img
                    className={
                        currThumb===index?
                            "product-thumbnail mr-2 pointer active-thumb"
                            :
                            "product-thumbnail mr-2 pointer inactive-thumb"
                    }
                    src={imageUrls[index]}
                    id={index}
                    key={index}
                    onClick={()=>setCurrThumb(index)}/>
            )
        })

    }

    const randomText = () => {
        let text = fetch("https://baconipsum.com/api/?type=meat-and-filler").then(res=>res.json()).then(data=>data[0]);
        return text;
    }

    const text = randomText();
    console.log(text)

    return (

        <div className={"d-flex container mt-3"}>
            <div className={"row"}>
                <div className={"product-gallery col-12 col-md-6"}>
                    <div className={"product-view"}>
                        <img className={"product-image"} src={imageUrls[currThumb]} />
                    </div>
                    <div className={"product-thumbs mt-3"}>
                        {renderImage(imageUrls)}
                    </div>
                </div>
                <div className={"product-specs col-12 col-md-6 tl"}>
                    <p>
                        <FontAwesomeIcon icon={faCaretLeft} /> Back to Woman
                    </p>
                    <h3>The Atelier Tailored Coat</h3>
                    <div className={"product-review"}>

                    </div>
                    <h4>Rs 499</h4>
                    <p className={"fs-14 text-blue no-pointer"}><strong className={"text-black"}>Availability : </strong>IN STOCK</p>
                    <p className={"fs-14 text-blue no-pointer"}><strong className={"text-black"}>Product Code : </strong> <a href={"#"} className={"text-blue"}>#4657</a></p>
                    <p className={"fs-14 no-pointer"}>
                        <strong
                            className={"text-black"}>
                            Tags :
                        </strong>
                        <a href={"#"} className={"text-blue"}>Fashion</a>,
                        <a href={"#"} className={"text-blue"}>Hood</a>,
                        <a href={"#"} className={"text-blue"}>Classic</a>
                    </p>
                    <p className={"fs-14"}>

                    </p>
                    <div className={"product-select"}>

                    </div>
                    <a className={"text-black underline fs-14"} href={"#"}>CLEAR SELECTION</a>
                    <div className={"product-actions"}>

                    </div>
                    <hr />
                    <div className={"product-share"}>

                    </div>
                    <hr />
                </div>
            </div>
        </div>

    )

}