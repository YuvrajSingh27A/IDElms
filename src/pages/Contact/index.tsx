import React from 'react';

const ContactPage = () => {
    return (
        <div>
            <section id="header" className="flex justify-between items-center">
                <a href="#"> <img src="images/img/logo.png" className="logo" alt="Logo" /> </a>
                <div>
                    <ul id="navbar" className="flex">
                        <li><a href="index.html">HOME</a></li>
                        <li><a href="shop.html">SHOP</a></li>
                        <li><a href="blog.html">BLOG </a></li>
                        <li><a href="about.html">ABOUT </a></li>
                        <li><a className="active" href="contact.html">CONTACT </a></li>
                        <li id="lg-bag"><a href="cart.html"><i className="fas fa-shopping-bag"></i></a></li>
                        <li id="close"><a href="#"><i className="fas fa-times"></i></a></li>
                    </ul>
                </div>
                <div id="mobile" className="flex items-center">
                    <a href="cart.html"><i className="fas fa-shopping-bag"></i></a>
                    <i id="bar" className="fas fa-bars"></i>
                </div>
            </section>
            <section id="page-header" className="about-header">
                <h2>#Let's_Talk</h2>
                <p>LEAVE A MESSAGE. We Love To Hear From You!</p>
            </section>
            <section id="contact-details" className="section-p1 flex justify-between items-center">
                <div className="details w-2/5">
                    <span> GET IN TOUCH </span>
                    <h2>visit one of our agency locations or contact us today </h2>
                    <h3>HEAD OFFICE</h3>
                    <div>
                        <ul>
                            <li className="flex items-center"><i className="fas fa-map-marker-alt"></i><p> ward no. 6 gurudwara road palampur hp distt. kangra 176061</p></li>
                            <li className="flex items-center"><i className="fas fa-envelope"></i><p>dk0133964@gmail.com</p></li>
                            <li className="flex items-center"><i className="fas fa-phone"></i><p>7018318078 9418542322</p></li>
                            <li className="flex items-center"><i className="fas fa-clock"></i><p> 9:00AM - 5:00PM</p></li>
                            <li className="flex items-center"><i className="fas fa-user"></i><p> DEEPAK KUMAR</p></li>
                        </ul>
                    </div>
                </div>
                <div className="map w-3/5">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54066.382052636065!2d76.50565572732815!3d32.11928138079552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904b3e0d1e63ac9%3A0x11046afda32dfd59!2sPalampur%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1672847614295!5m2!1sen!2sin"
                        width="100%" height="400" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </section>
            <section id="form-details" className="section-p1 flex justify-between items-start">
                <form className="w-2/3">
                    <span>LEAVE A MESSAGE</span>
                    <h2>We Love To Hear From You</h2>
                    <input type="text" placeholder="Your Name" className="w-full py-2 px-3 border border-gray-300 rounded mb-4" />
                    <input type="text" placeholder="E-MAIL" className="w-full py-2 px-3 border border-gray-300 rounded mb-4" />
                    <input type="text" placeholder="SUBJECT" className="w-full py-2 px-3 border border-gray-300 rounded mb-4" />
                    <textarea id="" name="" rows="5" placeholder="Your message" className="w-full py-2 px-3 border border-gray-300 rounded mb-4"></textarea>
                    <button className="bg-green-500 text-white py-2 px-4 rounded">SUBMIT</button>
                </form>
                <div className="people w-1/3 flex flex-col">
                    <div className="flex items-start mb-6">
                        <img src="images/img/people/2.png" className="w-16 h-16 mr-4" alt="John Doe" />
                        <p>
                            <span>John Doe</span> Senior Marketing Manager <br />
                            PHONE:- 123 000 77 88 <br /> Email:- contact@example.com
                        </p>
                    </div>
                    <div className="flex items-start">
                        <img src="images/img/people/3.png" className="w-16 h-16 mr-4" alt="John Doe" />
                        <p>
                            <span>John Doe</span> Senior Marketing Manager <br />
                            PHONE:- 123 000 77 88 <br /> Email:- contact@example.com
                        </p>
                    </div>
                </div>
            </section>
            <section id="newsletter" className="section-p1 flex justify-between items-center">
                <div className="newstext">
                    <h4>Sign Up For Newsletter</h4>
                    <p>Get E-mail Updates About Our Latest Shop And <span>Special Offers.</span></p>
                </div>
                <div className="form">
                    <input type="text" placeholder="Your E-mail Address" className="py-2 px-3 border border-gray-300 rounded mr-2" />
                    <button className="bg-green-500 text-white py-2 px-4 rounded">Sign Up</button>
                </div>
            </section>
        </div>
    );
}

export default ContactPage;
