import React from 'react';

const Footer = () => {
    return (
        <footer className="flex flex-wrap justify-between">
            <div className="col">
                <img className="logo mb-6" src="images/img/logo.png" alt="Logo"/>
                <h4>Contact</h4>
                <p><strong>ADDRESS</strong>: ward no. 6 gurudwara road palampur</p>
                <p><strong>PHONE</strong>: +91 7018318078 , 9418542322</p>
                <p><strong>TIMING</strong>: 10:00 - 18:00, mon-sat</p>
                <div className="follow">
                    <h4>Follow Us</h4>
                    <div className="icon">
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-youtube"></i>
                    </div>
                </div>
            </div>
            <div className="col">
                <h4>About</h4>
                <a href="#">About us</a>
                <a href="#">Delivery Information</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms & Conditions</a>
                <a href="#">Contact us</a>
            </div>
            <div className="col">
                <h4>MY ACCOUNT</h4>
                <a href="#">Sign In</a>
                <a href="#">View cart</a>
                <a href="#">My wishlist</a>
                <a href="#">Track My Order</a>
                <a href="#">Help</a>
            </div>
            <div className="col install">
                <h4>Install App</h4>
                <p>From App Store Or Google Play</p>
                <div className="row">
                    <img src="images/img/pay/app.jpg" alt="App Store"/>
                    <img src="images/img/pay/play.jpg" alt="Google Play"/>
                </div>
                <p>Secured Payment Gateways</p>
                <img src="images/img/pay/pay.png" alt="Payment Gateways"/>
            </div>
            <div className="copywrite w-full text-center">
                <p>@copyright 2022 DEEPAK KUMAR - HTML CSS JAVASCRIPT ECOMMERCE TEMPLATE</p>
            </div>
        </footer>
    );
}

export default Footer;
