import React, {useState} from "react";
import {Button, Modal} from "react-bootstrap";

// Header.Js renders the Header for the Container.

// Fake Product Data passed :-

const fake1 = {
    id: 1,
    productName: "Sunny Sweatshirt",
    category: "Women Top Wear",
    color: "Peach",
    size: "S",
    price: "Rs. 499",
    productImage: "https://source.unsplash.com/pONwcn4IcVU/"
}

const fake2 = {
    id: 2,
    productName: "Blue Shorts",
    category: "Women Bottom Wear",
    color: "Blue",
    size: "S",
    price: "Rs. 899",
    productImage: "https://source.unsplash.com/pONwcn4IcVU/"
}

const cart = [{
        id: 1,
        product: fake1,
        qty: 1
    },
    {
        id: 2,
        product: fake2,
        qty: 3
    }
];

const inc = (id) => {
    cart[id-1].qty+=1;
    console.log(cart);
}

const dec = (id) => {
    cart[id-1].qty-=1;
}

const remove = (id) => {
    console.log(cart,id)
    cart.splice(id-1);
    console.log(cart)
}

const clearAll = () => {
    console.log("Before", cart);
    cart.length = 0;
    console.log("After", cart);
}


export default function Header() {

    const [showCart, setShowCart] = useState(false);

    return (
        <div className={"Header container d-flex flex-wrap align-items-center pt-3 pb-3 pl-0 pr-0"}>

            {/* Currency Selector */}
            <div className={"col-4 d-flex p-0"}>
                <select name="Currency" defaultValue={"USD"} className={"no-border"}>
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
                       inc={inc}
                       dec={dec}
                       remove={remove}
                       clearAll={clearAll}
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
        return items.map(item=>{
            return (
                <CartItem product={item.product}
                          key={item.id}
                          id={item.id}
                          qty={item.qty}
                          inc={props.inc}
                          dec={props.dec}
                          remove={props.remove}
                />
            )
        })
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
                <p className={"hover-text-danger hover-underline pointer link-danger mr-2 fs-14 "} onClick={clearAll}>Clear All</p>
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

    const {product, qty, id, inc, dec, remove} = props;

    return (

        <tr>
            <td>
                <div className={"cart-product-description d-flex"}>
                    <img src={product.productImage} className={"cart-product-image"}/>
                    <div className={""}>
                        <h5 className={"pointer"}>{product.productName}</h5>
                        <p className={"m-0 hover-underline pointer"}>{product.category}</p>
                        <p className={"m-0"}>Color:-{product.color}</p>
                        <p className={"m-0"}>Size:-{product.size}</p>
                    </div>
                </div>
            </td>
            <td className={"tc align-items-between"}>
                <div >
                    <button onClick={()=>dec(id)}>-</button>
                    <span>{qty}</span>
                    <button onClick={()=>inc(id)}>+</button>
                </div>
                <div >
                    <p className={"hover-underline hover-text-danger link-danger m-0"} onClick={()=>remove(id)}>Remove</p>
                </div>
            </td>
            <td className={"tr"}>
                {product.price}
            </td>
        </tr>

    )

}