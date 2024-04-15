import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section about">
                        <img className="logo" src="images/img/logo.png" alt="Logo"/>
                        <p><strong>Contact</strong>: ward no. 6 gurudwara road palampur</p>
                        <p><strong>Phone</strong>: +91 7018318078 , 9418542322</p>
                        <p><strong>Timing</strong>: 10:00 - 18:00, mon-sat</p>
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
                    <div className="footer-section links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Delivery Information</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="footer-section my-account">
                        <h4>My Account</h4>
                        <ul>
                            <li><a href="#">Sign In</a></li>
                            <li><a href="#">View Cart</a></li>
                            <li><a href="#">My Wishlist</a></li>
                            <li><a href="#">Track My Order</a></li>
                            <li><a href="#">Help</a></li>
                        </ul>
                    </div>
                    <div className="footer-section install-app">
                        <h4>Install App</h4>
                        <p>From App Store Or Google Play</p>
                        <div className="app-icons">
                            <img src="images/img/pay/app.jpg" alt="App Store"/>
                            <img src="images/img/pay/play.jpg" alt="Google Play"/>
                        </div>
                        <p>Secured Payment Gateways</p>
                        <img src="images/img/pay/pay.png" alt="Payment Gateways"/>
                    </div>
                </div>
                <div className="copywrite">
                    <p>&copy; 2022 DEEPAK KUMAR - HTML CSS JAVASCRIPT ECOMMERCE TEMPLATE</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
