import React, { useState, FormEvent, ChangeEvent } from 'react';
import Topbar from "@/components/Topbar/Topbar";
import Footer from "@/components/Footer/Footer";
import Lottie from 'lottie-react';
import contactGif from "../../../public/Contact.json";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log(formData);
    };

    return (
        <div className='bg-black text-white'>
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
                            <li className="flex items-center mb-2"><i className="fas fa-map-marker-alt mr-2"></i><p>CodeStop Mohali, sector 75</p></li>
                            <li className="flex items-center mb-2"><i className="fas fa-envelope mr-2"></i><p>CodeStop@gmail.com</p></li>
                            <li className="flex items-center mb-2"><i className="fas fa-phone mr-2"></i><p>+91 8976546548</p></li>
                            <li className="flex items-center mb-2"><i className="fas fa-clock mr-2"></i><p>9:00AM - 5:00PM</p></li>
                            <li className="flex items-center mb-2"><i className="fas fa-user mr-2"></i><p>Codii</p></li>
                        </ul>
                    </div>
                </div>
                <div className="map w-full lg:w-1/2">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13815.966222363222!2d76.69613491797242!3d30.723879049457517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a81a969fd6d43%3A0xf933f28960eb9c5!2sSector%2075%2C%20Sahibzada%20Ajit%20Singh%20Nagar%2C%20Punjab%20160062%2C%20India!5e0!3m2!1sen!2suk!4v1645300363546!5m2!1sen!2suk"
                        width="100%" height={400} style={{ border: 0 }} allowFullScreen={true} loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </section>
            <section id="form-details" className="section-p1 flex flex-col lg:flex-row justify-between items-start px-8 py-16">
                <form onSubmit={handleSubmit} className="w-full lg:w-2/3 mb-8 lg:mb-0 lg:pr-8">
                    <span className="text-lg">LEAVE A MESSAGE</span>
                    <h2 className="text-3xl font-bold mb-4">We Love To Hear From You</h2>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className="w-full py-2 px-3 border border-gray-300 text-black rounded mb-4" required />
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="E-MAIL" className="w-full py-2 px-3 border border-gray-300 text-black rounded mb-4" required />
                    <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="SUBJECT" className="w-full py-2 px-3 border border-gray-300  text-black rounded mb-4" required />
                    <textarea name="message" value={formData.message} onChange={handleChange} rows={5} placeholder="Your message" className="w-full py-2 px-3 border border-gray-300 text-black rounded mb-4" required></textarea>
                    <button type="submit" className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300">SUBMIT</button>
                </form>
                <div className="people w-full lg:w-1/3 flex flex-col items-center justify-center mt-100 lg:mt-0">
                    <Lottie animationData={contactGif} className="w-full h-auto max-w-md ml-20 rounded-lg shadow-lg" />
                </div>
            </section>
            <section id="newsletter" className="section-p1  py-16 bg-black text-white ">
                <div className="container flex flex-col items-center justify-center">
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
                            className="py-2 px-4 border border-gray-400 text-black rounded mr-2 focus:outline-none focus:border-blue-500"
                        />
                        <button className="py-2 px-4 bg-orange-500 text-white rounded hover:bg-blue-600 transition duration-300 focus:outline-none">Sign Up</button>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default ContactPage;
