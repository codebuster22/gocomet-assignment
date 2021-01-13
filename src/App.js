import React, {Component} from "react";

// Importing Components
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import ProductDetails from "./Components/ProductDetails";

class App extends Component {

    constructor(props) {
        super(props);
        this.state={
            color: "",
            size: "",
            qty: 0,
            product: {
                productId: 4657,
                category: "Woman",
                productName: "The Atelier Tailored Coat",
                price: 499,
                colors: [
                    "Red",
                    "Blue",
                    "Green",
                    "Yellow"
                ],
                sizes: [
                    "S","M","L","XL"
                ],
                tags: [
                    "Fashion",
                    "Hood",
                    "Classic"
                ],
                images: [
                    "https://source.unsplash.com/collection/219941/900x1200",
                    "https://source.unsplash.com/collection/9454911/900x1200",
                    "https://source.unsplash.com/collection/1198107/900x1200",
                    "https://source.unsplash.com/collection/762960/900x1200",
                ],
                productDesc: "platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius duis at consectetur lorem donec massa sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan in\n"
            },
            cart: [],

        }
    }

    // componentDidMount() {
    //     this.setState(
    //         (prevState)=>{
    //             const arr = [];
    //             arr.push({

    //             })
    //             return {
    //                 cart: arr,
    //             }
    //         }
    //     )
    // }

    incCartItem = (id) => {

        const instances = this.state.cart;

        const index = instances.findIndex(instance=>{
            return instance.id===id;
        });

        instances[index].qty = 1 + (+instances[index].qty);

        this.setState({cart: instances} );

    }

    decCartItem = (id) => {

        const instances = this.state.cart;

        const index = instances.findIndex(instance=>{
            return instance.id===id;
        });

        instances[index].qty -= 1;

        this.setState({cart: instances} );

    }

    removeCartItem = (id) => {

        const instances = this.state.cart;

        const index = instances.findIndex(instance=>{
            return instance.id===id;
        });

        instances.splice(index,1);

        this.setState({cart: instances} );

    }

    clearCart = () => {

        this.setState({cart: []})

    }

    addToCart = () => {

        const { color, size, qty } = this.state;


        try{

            if(color==="" || size==="" || qty<=0){
                throw new Error("Please Select from the options.")
            }else{
                const arr = this.state.cart;
                console.log("AddToCart-> before push", arr,this.state.cart);
                arr.push(
                    {
                        id: this.state.cart.length+1,
                        productId: 4657,
                        category: "Woman",
                        productName: "The Atelier Tailored Coat",
                        price: 499,
                        qty: qty,
                        color: color,
                        size: size,
                        image: this.state.product.images[0]
                    }
                );
                this.setState({cart: arr, color: "", size: "", qty: ""})
            }

        }catch (e) {
            alert(e.message);
        }
    }

    clearSelection = () => {
        this.setState({color: "", size: "", qty: 0})
    }

    handleOnChange = (evt) => {
        const target = evt.target;
        const value = target.type === 'checkbox'? 'checked' : target.value;
        const name = target.name;
        this.setState({
            [name]: value,
        })
    }

    render() {

        const {cart, product, color, size, qty} = this.state;
        const {handleOnChange, clearCart, removeCartItem, decCartItem, incCartItem , clearSelection , addToCart} = this;

        console.log(this.state)

      return (
          <div className="App">
              <Header cart={cart}
                      incCartItem={incCartItem}
                      decCartItem={decCartItem}
                      removeCartItem={removeCartItem}
                      clearCart={clearCart}
              />
              <Nav />
              <ProductDetails product={product} color={color} size={size} qty={qty} handleChange={handleOnChange} clearSelection={clearSelection} addToCart={addToCart}/>
          </div>
      );

  }
}

export default App;
