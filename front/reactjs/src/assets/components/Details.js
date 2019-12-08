import React from 'react';
import '../css/details.css';
import star from '../img/star.svg';

function Details() {
    return (

        <section className="details-section padding-left-30px padding-right-30px details-spacing-custom">

            <h3 className="text-white-color custom-font-medium fs-14px padding-bottom-30px">Features</h3>
            <ul className="features details-text-color fs-11px">
                <li>
                    <span className="features-text">Capacity</span>
                    <object className="features-bar-container details-bar-bg-color">
                        <object className="features-bar bg-white-color" width="40%"></object>
                    </object>
                    <span className="features-text">780ml</span>
                </li>
                <li>
                    <span className="features-text">Durability</span>
                    <object className="features-bar-container details-bar-bg-color">
                        <object className="features-bar bg-white-color" width="70%"></object>
                    </object>
                    <span className="features-text">70%</span>
                </li>
                <li>
                    <span className="features-text">Weight</span>
                    <object className="features-bar-container details-bar-bg-color">
                        <object className="features-bar bg-white-color" width="25%"></object>
                    </object>
                    <span className="features-text">300g</span>
                </li>
            </ul>
            <h3 className="text-white-color custom-font-medium fs-14px padding-bottom-30px padding-top-30px">Description
        </h3>
            <ul className="details-text-color fs-11px description-list">
                <li>Leakproof Puff Valve Spout to avoid splatters and spills</li>
                <li>BPA Free - Smaller carbon footprint!</li>
                <li>Translucent body to track your consumption
                throughout the day</li>
            </ul>
            <h3 className="text-white-color custom-font-medium fs-14px padding-bottom-30px padding-top-30px">Description
        </h3>
            <p className="details-text-color fs-11px">When you're carrying the Nike Hyperful Water Bottle
                there will be no second guessing your athletic ability.
                Constructed with an anti-leak valve that helps to
                prevent spills and provides easy hydration while
            you're on the move.</p>
            <h3 className="text-white-color custom-font-medium fs-14px padding-bottom-30px padding-top-30px">Rating</h3>
            <div className="rating">
                <img className="details-star default-padding-right" src={star} alt="" />
                <img className="details-star default-padding-right" src={star} alt="" />
                <img className="details-star default-padding-right" src={star} alt="" />
                <img className="details-star default-padding-right" src={star} alt="" />
                <span className="text-white-color fs-14px">4/5</span>
            </div>

        </section>

    );
}

export default Details;