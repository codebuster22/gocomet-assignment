import React, {useState} from "react";
import {Button, Modal} from "react-bootstrap";

// Header.Js renders the Header for the Container.


export default function Header({cart, clearCart, decCartItem, incCartItem, removeCartItem}) {

    const [showCart, setShowCart] = useState(false);

    return (
        <div className={"Header container d-flex flex-wrap align-items-center justify-content-between pt-3 pb-3 pl-0 pr-0"}>

            {/* Currency Selector */}
            <div className={"col-2 col-md-4 d-flex p-0"}>
                <select name="Currency" defaultValue={"INR"} className={"no-border"}>
                    <option value="USD" >USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                    <option value="CAD">CAD</option>
                    <option value="CNY">CNY</option>
                    <option value="INR">INR</option>
                    <option value="JPY">JPY</option>
                    <option value="PLZ">PLZ</option>
                    <option value="RUR">RURs</option>
                    <option value="SGD">RUR</option>
                </select>
            </div>

            {/* Brand Title */}
            <div className={"col-4"}>
                <h2><strong>BONFIRE</strong></h2>
            </div>

            {/* Cart Button */}
            <div className={"col-4 d-flex p-0"}>
                <Button variant="outline-warning" className={"br-0 btn-bonfire ml-auto"} onClick={()=>setShowCart(true)}>Cart ({cart.length})</Button>
            </div>

            {/* Cart Modal */}
            <CartModal items={cart}
                       inc={incCartItem}
                       dec={decCartItem}
                       remove={removeCartItem}
                       clearall={clearCart}
                       show={showCart}
                       onHide={()=>setShowCart(false)}
            />
        </div>
    )

}

// Cart Modal Component
function CartModal (props) {

    // Renders all the items inside cart using CartItem component
    const renderItems = (items) => {
        try{
            if(items.length){
                return items.map(item=>{
                    return (
                        <CartItem product={item}
                                  key={item.id}
                                  id={item.id}
                                  inc={props.inc}
                                  dec={props.dec}
                                  remove={props.remove}
                        />
                    )
                })
            }else {
                return (
                    <tr>
                        <td>
                            Empty Cart
                        </td>
                    </tr>
                )
            }
        }catch (e) {
            console.log(e);
            return <h2>Cart is Empty</h2>
        }
    }

    return (

        <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            dialogClassName="modal-50w"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    My Cart
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <CartTable >
                        {renderItems(props.items)}
                    </CartTable>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <p className={"hover-text-danger hover-underline pointer link-danger mr-2 fs-14 "} onClick={props.clearall}>Clear All</p>
                <Button onClick={props.onHide}>Checkout</Button>
            </Modal.Footer>
        </Modal>

    )

}

// Cart Table inside which Cart Items will be rendered
function CartTable (props) {

    return (

        <div className={"cart-table"}>
            <table className={"w-100"}>
                <thead>
                <tr>
                    <th>
                        PRODUCT DETAILS
                    </th>
                    <th className={"tc"}>
                        QTY
                    </th>
                    <th className={"tr"}>
                        TOTAL
                    </th>
                </tr>
                </thead>
                <tbody>
                {props.children}
                </tbody>
            </table>
        </div>

    )

}

// Component where directly pass the data as props, it will render items accordingly
function CartItem (props) {

    const {product, id, inc, dec, remove} = props;
    const { image, productName, category, color, size, qty, price } = product;

    return (

        <tr>
            <td>
                <div className={"cart-product-description d-flex mt-3"}>
                    <img src={image} className={"cart-product-image"}/>
                    <div className={"ml-2"}>
                        <h5 className={"pointer"}>{productName}</h5>
                        <p className={"m-0 hover-underline pointer"}>{category}</p>
                        <p className={"m-0"}>Color:-{color}</p>
                        <p className={"m-0"}>Size:-{size}</p>
                    </div>
                </div>
            </td>
            <td className={"tc align-items-between"}>
                <div className={"d-flex justify-content-center align-items-center"}>
                    <button className={"dec-btn btn btn-danger"} onClick={()=>dec(id)}>-</button>
                    <p className={"value-holder m-0"}>{qty}</p>
                    <button className={"inc-btn btn btn-primary"} onClick={()=>inc(id)}>+</button>
                </div>
                <div >
                    <p className={"hover-underline hover-text-danger pointer link-danger m-0"} onClick={()=>remove(id)}>Remove</p>
                </div>
            </td>
            <td className={"tr"}>
                Rs. {price}
            </td>
        </tr>

    )

}