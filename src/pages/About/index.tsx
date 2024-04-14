import React from 'react';

const AboutPage = () => {
    return (
        <div>
            <section id="page-header" className="about-header bg-cover bg-center">
                <div className="text-white text-center">
                    <h2 className="text-4xl">#KnowUs</h2>
                    <p className="text-lg">Pahale Istemal Kro Phir Vishwas Karo!</p>
                </div>
            </section>
            <section id="about-head" className="section-p1 flex items-center">
                <img src="images/img/about/a6.jpg" alt="about" className="w-1/2" />
                <div className="px-8">
                    <h2 className="text-2xl font-bold">Who We Are</h2>
                    <p className="text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, facilis earum a
                        ipsa laudantium hic et accusamus facere in vel. Adipisci hic expedita animi. Sed nihil
                        quo amet voluptatibus quidem eum architecto perferendis dolores. Nemo, delectus nulla
                        esse commodi, repudiandae assumenda aliquam possimus, quaerat itaque totam error magni
                        doloremque? Laboriosam sequi a voluptas itaque aut dignissimos, magnam ad quia, laborum
                        eveniet temporibus quis, adipisci vitae! Doloremque perferendis, voluptates eaque
                        incidunt provident dicta perspiciatis? Tempore, quae reprehenderit! Quasi nam veniam
                        vero voluptate consequuntur. Delectus, temporibus nam sed, debitis, iure cupiditate
                        quidem fugiat consequatur aliquid sit ullam consectetur quisquam architecto. Repellat,
                        quos.
                    </p>
                    <abbr title="">
                        create stunning images with as much as or as little control as you like thanks to a
                        choice of basic and creative modes.
                    </abbr>
                    <br /><br />
                    <marquee
                        className="bg-gray-200 py-2 px-4 rounded"
                        behavior="scroll"
                        direction="left"
                        scrollamount="5"
                    >
                        create stunning images with as much as or as little control as you like thanks to a
                        choice of basic and creative modes
                    </marquee>
                </div>
            </section>
            <section id="about-app" className="section-p1 text-center">
                <h1 className="text-4xl">DOWNLOAD OUR <a href="#" className="text-blue-500">App</a></h1>
                <div className="video w-3/4 mx-auto">
                    <video autoPlay loop muted className="w-full rounded-lg">
                        <source src="images/img/about/1.mp4" type="video/mp4" />
                    </video>
                </div>
            </section>
            <section id="feature" className="section-p1 flex justify-center flex-wrap">
                <FeatureBox image="images/img/features/f1.png" title="Free Shipping" />
                <FeatureBox image="images/img/features/f2.png" title="Online Order" />
                <FeatureBox image="images/img/features/f3.png" title="Save Money" />
                <FeatureBox image="images/img/features/f4.png" title="Promotions" />
                <FeatureBox image="images/img/features/f5.png" title="Happy Sell" />
                <FeatureBox image="images/img/features/f6.png" title="24/7 Support" />
            </section>
            <section id="newsletter" className="section-p1">
                <div className="newstext">
                    <h4>Sign Up For Newsletter</h4>
                    <p>Get E-mail Updates About Our Latest Shop And <span className="font-bold">Special Offers.</span></p>
                </div>
                <div className="form flex justify-center items-center mt-4">
                    <input type="text" placeholder="Your e-mail address" className="py-2 px-4 border border-gray-400 rounded" />
                    <button className="ml-2 py-2 px-4 bg-blue-500 text-white rounded">Sign Up</button>
                </div>
            </section>
        </div>
    );
};

const FeatureBox = ({ image, title }) => {
    return (
        <div className="fe-box p-4 text-center">
            <img src={image} alt={title} className="mx-auto" />
            <h6 className="mt-2">{title}</h6>
        </div>
    );
};

export default AboutPage;
