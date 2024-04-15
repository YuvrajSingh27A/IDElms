import React from "react";
import Topbar from "@/components/Topbar/Topbar";
import Footer from "@/components/Footer/Footer";

const AboutPage = () => {
  return (
    <div>
      <Topbar />
      <section id="page-header" className="about-header bg-cover bg-center">
        <div className="text-white text-center ">
          <h2 className="text-4xl">#KnowUs</h2>
          <p className="text-lg">Pahale Istemal Kro Phir Vishwas Karo!</p>
        </div>
      </section>
      <section id="about-head" className="section-p1 flex items-center">
        <img src="a6.jpg" alt="about" className="w-1/2 rounded-lg shadow-lg" />
        <div className="px-8">
          <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
          <p className="text-lg mb-4">
            Welcome to CodeStop, your premier destination for online learning,
            coding IDE, placement services, community-driven doubt solving, and
            CV building. At CodeStop, we're committed to empowering individuals
            with the skills they need to thrive in today's digital world. With
            our online learning platform, you'll have access to a vast library
            of courses covering a wide range of topics, from programming
            languages to advanced software development techniques. Our intuitive
            IDE (Integrated Development Environment) provides a seamless coding
            experience, allowing you to practice and hone your skills in
            real-time. But we don't stop there. CodeStop also offers placement
            services to help you kickstart your career in the tech industry. Our
            dedicated team works tirelessly to connect you with top employers
            and job opportunities that align with your skills and aspirations.
            Join our vibrant community of learners and experts, where you can
            collaborate, share knowledge, and get your doubts solved in
            real-time. And when you're ready to showcase your skills to
            potential employers, our CV builder tool will help you create a
            professional resume that highlights your achievements and expertise.
          </p>
          <div className="text-sm mb-4">
            <marquee
              className="bg-gray-200 py-2 px-4 rounded"
              behavior="scroll"
              direction="left"
              scrollamount="5"
            >
              Premier online learning, coding IDE, placement services, community-driven doubt solving, and CV building platform empowering digital skills.
            </marquee>
          </div>
        </div>
      </section>
      <section id="about-app" className="section-p1 text-center py-16">
        <h1 className="text-4xl mb-4">
          DOWNLOAD OUR{" "}
          <a href="#" className="text-blue-500">
            App
          </a>
        </h1>
        <div className="video w-3/4 mx-auto">
          <video autoPlay loop muted className="w-full rounded-lg shadow-lg">
            <source src="1.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
      <section
        id="feature"
        className="section-p1 flex justify-center flex-wrap py-8"
      >
        <FeatureBox image="f1.png" title="Online Learing" />
        <FeatureBox image="f2.png" title="Temporal Evaluations" />
        <FeatureBox image="f3.png" title="Affordable" />
        <FeatureBox image="f4.png" title="Placement Support" />
        <FeatureBox image="f5.png" title="Happy Students" />
        <FeatureBox image="f6.png" title="24/7 Support" />
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
      <Footer/>
    </div>
  );
};

const FeatureBox = ({ image, title }) => {
  return (
    <div className="fe-box p-4 text-center w-1/2 sm:w-1/3 md:w-1/6">
      <img src={image} alt={title} className="mx-auto" />
      <h6 className="mt-2">{title}</h6>
    </div>
  );
};

export default AboutPage;
