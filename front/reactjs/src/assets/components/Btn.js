import React from 'react';
import '../css/btn.css';
import iconChat from '../img/chat.svg';
import iconCart from '../img/cart.svg';

function Btn() {
    return (

        <button className="btn default-bg-green-color default-padding-left-percent default-padding-right-percent">
            <section className="btn-chat">
                <img src={iconChat} alt="" />
                <span className="text-white-color custom-font-medium default-padding">Chat</span>
            </section>
            <section className="btn-add-cart">
                <img src={iconCart} alt="" />
                <span className="text-white-color custom-font-medium default-padding">Add to cart</span>
            </section>
        </button>

    );

}
            
export default Btn;