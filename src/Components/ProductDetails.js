import React, {useRef, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretLeft, faStar as faStarSolid} from "@fortawesome/free-solid-svg-icons";
import {faHeart, faStar} from "@fortawesome/free-regular-svg-icons";
import {Col, Form, Overlay, Tooltip} from "react-bootstrap";
import {faFacebook, faPinterest, faTwitter} from "@fortawesome/free-brands-svg-icons";

export default function ProductDetails ({product, color, size, qty,  handleChange, clearSelection, addToCart}) {

    const [currThumb, setCurrThumb] = useState(0);
    const [fbOverlay, setFbOverlay] = useState(true)
    const fbRef = useRef(null);
    const tweetRef = useRef(null);
    const pinRef = useRef(null);

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
                    src={product.images[index]}
                    id={index}
                    key={index}
                    onClick={()=>setCurrThumb(index)}
                    alt={"product-thumbnail-"+index}
                />
            )
        })

    }

    return (

        <div className={"d-flex container mt-4"}>

            <div className={"row"}>

                {/* Product Images with Thumbnails */}
                <div className={"product-gallery col-12 col-md-6"}>
                    <div className={"product-view"}>
                        <img className={"product-image"} src={product.images[currThumb]} alt={"product"}/>
                    </div>
                    <div className={"product-thumbs mt-3"}>
                        {renderImage(product.images)}
                    </div>
                </div>


                {/* Product Specifications */}
                <div className={"product-specs col-12 col-md-6 tl"}>

                    {/* Back to Category Option */}
                    <p>
                        <FontAwesomeIcon icon={faCaretLeft} /> <a href={"#"} className={"text-black"}>Back to {product.category}</a>
                    </p>


                    {/* Product Title */}
                    <h3>{product.productName}</h3>

                    {/* Product Review */}
                    <div className={"product-review d-flex mb-4 mt-3"}>
                        <div className={"fs-12 underline pointer"}>
                            <FontAwesomeIcon className={"color-review"} icon={faStarSolid} />
                            <FontAwesomeIcon className={"color-review"} icon={faStarSolid} />
                            <FontAwesomeIcon className={"color-review"} icon={faStarSolid} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon className={"mr-2"} icon={faStar} />
                            3 Review(s)
                        </div>
                        <div className={"mr-3 ml-3 vr mt-1 mb-1"} />
                        <a href={"#"} className={"text-black fs-12 underline"}>ADD A REVIEW</a>
                    </div>


                    {/* Product Price Tag */}
                    <h4 className={"text-blue mb-4"}>Rs {product.price}</h4>


                    {/* Availability, Product Code and Tags */}
                    <p className={"fs-14 text-blue no-pointer m-0 mb-1"}><strong className={"text-black"}>Availability : </strong>IN STOCK</p>
                    <p className={"fs-14 text-blue no-pointer m-0 mb-1"}>
                        <strong className={"text-black"}>
                            Product Code : </strong>
                        <a href={"#"}
                           className={"text-blue"}>
                            #{product.productId}
                        </a>
                    </p>
                    <p className={"fs-14 no-pointer m-0 mb-4"}>
                        <strong
                            className={"text-black"}>
                            Tags :
                        </strong>
                        {product.tags.map(tag=><a href={"#"} className={"text-blue"}>{tag},</a>)}
                    </p>


                    {/* Product Description */}
                    <p className={"fs-14 text-black-50 mb-4"}>
                        {product.productDesc}
                    </p>


                    {/* Product's color, size and qty selector form */}
                    <div className={"product-select mb-3"}>

                        <Form>

                            <Form.Row >

                                {/* Color Selector */}
                                <Form.Group as={Col} className={"col-6 col-md-4"}>
                                    <Form.Label><strong>COLOR</strong></Form.Label>
                                    <Form.Control as="select" name={"color"} value={color} onChange={handleChange}>
                                        <option value={""}>Select Color</option>
                                        {product.colors.map(color=><option value={color}>{color}</option>)}
                                    </Form.Control>
                                </Form.Group>

                                {/* Size Selector */}
                                <Form.Group as={Col} className={"col-6 col-md-4"}>
                                    <Form.Label><strong>SIZE</strong></Form.Label>
                                    <Form.Control as="select" name={"size"} value={size} onChange={handleChange}>
                                        <option value={""}>Select Size</option>
                                        {product.sizes.map(size=><option value={size}>{size}</option>)}
                                    </Form.Control>
                                </Form.Group>

                                {/* QTY selector */}
                                <Form.Group as={Col} className={"qty-container col-md-4 "} >
                                    <Form.Label><strong>QTY</strong></Form.Label>
                                    <Form.Control type="number" name={"qty"} value={qty} placeholder="0" onChange={handleChange} className={"qty-container"}/>
                                </Form.Group>

                            </Form.Row>

                        </Form>

                    </div>

                    {/* Clear Selection Option */}
                    <a className={"text-black underline fs-14"} onClick={clearSelection}>CLEAR SELECTION</a>

                    {/* Actions field */}
                    <div className={"product-actions d-flex flex-wrap mt-4"}>

                        {/* Add to Cart button */}
                        <button type={"button"} className={"fs-16 m-1 col-12 col-md-5 add-to-cart btn-60w"} onClick={addToCart}>
                            Add To Cart
                        </button>

                        {/* Add to wishlist button */}
                        <button type={"button"} className={"fs-16 m-1 col-12 col-md-5 add-to-wish btn-60w"}>
                            <FontAwesomeIcon icon={faHeart} className={"mr-2"} />Add To Wishlist
                        </button>

                    </div>

                    {/* Horizontal line */}
                    <hr />

                    {/* Social share options with tooltips */}
                    <div className={"product-share d-flex flex-wrap justify-content-between align-items-center"}>

                        <p className={"fs-12 m-0"}><strong>SHARE THIS</strong></p>

                        {/* Facebook Share Option */}
                        <div >
                            <button ref={fbRef} className={"no-border bg-facebook facebook-color"} onMouseOver={()=>setFbOverlay(true)}>
                                <FontAwesomeIcon className={"mr-2 no-border"} icon={faFacebook} />
                                Share
                            </button>
                            <Overlay target={fbRef.current} show={fbOverlay} placement="right">
                                {(props) => (
                                    <Tooltip id="facebook-tooltip" {...props} className={"bg-white text-black fs-12"}>
                                        235K
                                    </Tooltip>
                                )}
                            </Overlay>
                        </div>

                        {/* Twitter Share Option */}
                        <div>
                            <button ref={tweetRef} className={"no-border bg-twitter twitter-color"}>
                                <FontAwesomeIcon className={"mr-2"} icon={faTwitter} />
                                Tweet
                            </button>
                            <Overlay target={tweetRef.current} show={fbOverlay} placement="right">
                                {(props) => (
                                    <Tooltip id="twitter-tooltip" {...props} className={"bg-white text-black fs-12"}>
                                        235K
                                    </Tooltip>
                                )}
                            </Overlay>
                        </div>

                        {/* Pinterest Share Option */}
                        <div>
                            <button ref={pinRef} className={"no-border bg-pinterest pinterest-color"} >
                                <FontAwesomeIcon className={"mr-2 "} icon={faPinterest} />
                                Pin It
                            </button>
                            <Overlay target={pinRef.current} show={fbOverlay} placement="right">
                                {(props) => (
                                    <Tooltip id="pinterest-tooltip" show={true} {...props} className={"bg-white text-black fs-12"}>
                                        235K
                                    </Tooltip>
                                )}
                            </Overlay>
                        </div>

                    </div>

                    {/* Horizontal Line */}
                    <hr />

                </div>

            </div>

        </div>

    )

}