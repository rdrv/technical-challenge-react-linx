import React, {Component} from 'react';
import '../css/overlay.css';
import logo from '../img/logo.svg';
import cartSelect from '../img/cart-select.svg';
import Slider from './SlickSlider';

class Overlay extends Component {
    
    render() {
        return(
            <section className="overlay-section-wrapper overlay-bg-gray-color padding-30px" data-animation-status="off">

            <div className="overlay-section">

                <div className="overlay-section-header padding-top-30px">
                    <img src={logo} alt="" />
                    <h4>Bootle</h4>
                    <img src={cartSelect} alt="" />
                </div>

                <Slider />

                <div className="overlay-section-info">
                    <h2 className="overlay-section-info-title custom-font-semibold fs-23px">Nike Hyperfuel 709ml</h2>
                    <h4 className="overlay-section-info-price custom-font-medium fs-23px default-text-green-color">$24.99
                    </h4>
                    <p className="overlay-section-info-description custom-font-regular fs-11px overlay-text-color">When
                        you're carrying the Nike Hyperful
                        Water Bottle there will be no ...</p>
                </div>

            </div>

        </section>
        )
    }
}

export default Overlay;