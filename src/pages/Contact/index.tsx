import React from 'react';
import Topbar from "@/components/Topbar/Topbar";
import Footer from "@/components/Footer/Footer";

const ContactPage = () => {
    return (
        <div>
            <Topbar />
            <section id="page-header" className="about-header px-8 py-16 bg-gray-200 text-center bg-cover bg-center" style={{ backgroundImage: "url('b2.jpg')" }}>
    <div className="text-white">
        <h2 className="text-4xl font-bold">#Let's_Talk</h2>
        <p className="text-lg">LEAVE A MESSAGE. We Love To Hear From You!</p>
    </div>
</section>

            <section id="contact-details" className="section-p1 flex justify-between items-center px-8 py-16">
                <div className="details w-full lg:w-1/2">
                    <span className="text-lg">GET IN TOUCH</span>
                    <h2 className="text-3xl font-bold mb-4">Visit One of Our Agency Locations or Contact Us Today</h2>
                    <div>
                        <ul>
                            <li className="flex items-center mb-2"><i className="fas fa-map-marker-alt mr-2"></i><p>Ward No. 6, Gurudwara Road, Palampur HP, Distt. Kangra 176061</p></li>
                            <li className="flex items-center mb-2"><i className="fas fa-envelope mr-2"></i><p>dk0133964@gmail.com</p></li>
                            <li className="flex items-center mb-2"><i className="fas fa-phone mr-2"></i><p>+91 7018318078, +91 9418542322</p></li>
                            <li className="flex items-center mb-2"><i className="fas fa-clock mr-2"></i><p>9:00AM - 5:00PM</p></li>
                            <li className="flex items-center mb-2"><i className="fas fa-user mr-2"></i><p>DEEPAK KUMAR</p></li>
                        </ul>
                    </div>
                </div>
                <div className="map w-full lg:w-1/2">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54066.382052636065!2d76.50565572732815!3d32.11928138079552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904b3e0d1e63ac9%3A0x11046afda32dfd59!2sPalampur%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1672847614295!5m2!1sen!2sin"
                        width="100%" height="400" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </section>
            <section id="form-details" className="section-p1 flex flex-col lg:flex-row justify-between items-start px-8 py-16">
                <form className="w-full lg:w-2/3 mb-8 lg:mb-0 lg:pr-8">
                    <span className="text-lg">LEAVE A MESSAGE</span>
                    <h2 className="text-3xl font-bold mb-4">We Love To Hear From You</h2>
                    <input type="text" placeholder="Your Name" className="w-full py-2 px-3 border border-gray-300 rounded mb-4" />
                    <input type="text" placeholder="E-MAIL" className="w-full py-2 px-3 border border-gray-300 rounded mb-4" />
                    <input type="text" placeholder="SUBJECT" className="w-full py-2 px-3 border border-gray-300 rounded mb-4" />
                    <textarea id="" name="" rows="5" placeholder="Your message" className="w-full py-2 px-3 border border-gray-300 rounded mb-4"></textarea>
                    <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300">SUBMIT</button>
                </form>
                <div className="people w-full lg:w-1/3 flex flex-col items-center justify-center mt-100 lg:mt-0">
                  
                </div>
            </section>
            <section id="newsletter" className="section-p1 bg-gray-100 py-16">
                <div className="newstext text-center mb-4">
                    <h4 className="text-2xl font-bold mb-2">Sign Up For Newsletter</h4>
                    <p>
                        Get E-mail Updates About Our Latest Shop And{" "}
                        <span className="font-bold">Special Offers.</span>
                    </p>
                </div>
                <div className="form flex justify-center items-center mt-4">
                    <input
                        type="email"
                        placeholder="Your e-mail address"
                        className="py-2 px-4 border border-gray-400 rounded mr-2"
                    />
                    <button className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600">
                        Sign Up
                    </button>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default ContactPage;
