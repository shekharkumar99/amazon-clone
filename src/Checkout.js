import Subtotal from "./Subtotal.js";
import React from 'react'
import { useStateValue } from './StateProvider';
import CheckoutProduct from "./CheckoutProduct.js";
import "./Checkout.css";


function Checkout() {
    const[{basket},dispatch] = useStateValue();
    return (
        <div className="checkout">
        <div className = "checkout_left">
        <img className="checkout_ad" src="https://www.harmony.gov.au/Documents/resources/hw-web-banner-horizontal-orange.jpg"  alt=""/>
            
        {basket?.length == 0 ?(
            <div>
                <h2>Your Shopping Basket is empty</h2>
            </div>

        ) : (
            <div>
                <h2 className="checkout_title">
                    Your Shopping Basket
                </h2>
                {basket.map(item =>(
                    <CheckoutProduct
                    id = {item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating} />
                ))}
            </div>
        )}
        </div>
        <Subtotal/>
        </div>
    );
}

export default Checkout;
