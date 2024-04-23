import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-12 px-8">
            <div className="flex flex-wrap justify-between items-start">
                <div className="col w-full lg:w-auto">
                    <div className="contact mb-6 lg:mb-0">
                        <h4 className="text-lg font-bold">Contact</h4>
                        <p className="mb-2"><strong>ADDRESS:</strong> Mohali .Sector 75 ,</p>
                        <p className="mb-2"><strong>PHONE:</strong> +91 6544895661</p>
                        <p><strong>TIMING:</strong> 10:00 - 18:00, Mon-Sat</p>
                        <div className="follow mt-6">
                            <h4 className="text-lg font-bold">Follow Us</h4>
                            <div className="icon flex">
                                <i className="fab fa-facebook-f text-xl mr-4"></i>
                                <i className="fab fa-twitter text-xl mr-4"></i>
                                <i className="fab fa-instagram text-xl mr-4"></i>
                                <i className="fab fa-youtube text-xl"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col w-full lg:w-auto">
                    <h4 className="text-lg font-bold">About</h4>
                    <a href="#" className="block mb-2">About Us</a>
                    <a href="#" className="block mb-2">Delivery Information</a>
                    <a href="#" className="block mb-2">Privacy Policy</a>
                    <a href="#" className="block mb-2">Terms & Conditions</a>
                    <a href="#" className="block">Contact Us</a>
                </div>
                <div className="col w-full lg:w-auto">
                    <h4 className="text-lg font-bold">MY ACCOUNT</h4>
                    <a href="#" className="block mb-2">Sign In</a>
                    <a href="#" className="block mb-2">View Cart</a>
                    <a href="#" className="block mb-2">My Wishlist</a>
                    <a href="#" className="block mb-2">Track My Order</a>
                    <a href="#" className="block">Help</a>
                </div>
                <div className="col w-full lg:w-auto">
                    <div className="install">
                        <h4 className="text-lg font-bold">Install App</h4>
                        <p className="mb-2">From App Store Or Google Play</p>
                        <div className="row mb-4 ">
                            <img src="play.jpg" className='rounded-2xl' alt="Google Play"/>
                        </div>
                        <p className="mb-2">Secured Payment Gateways</p>
                        <img src="pay.png" alt="Payment Gateways"/>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
