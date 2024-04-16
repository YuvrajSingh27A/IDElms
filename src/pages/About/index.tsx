import React from "react";
import Topbar from "@/components/Topbar/Topbar";
import Lottie from "lottie-react";
import aboutGif from "../../../public/aboutPageGIF.json";
import Footer from "@/components/Footer/Footer";

const AboutPage = () => {
  return (
    <div className="bg-black">
      <Topbar />
     
      <section id="about-head" className="section-p1 flex items-center text-white bg-black mt-16">
       
        <div className="w-1/2">
          <Lottie animationData={aboutGif} className="w-full h-auto max-w-md ml-20 rounded-lg shadow-lg" />
        </div>
        
        <div className="w-1/2 px-8 ">
          <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
          <p className=" mb-4">
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
          <div className="text-sm mb-4 ">
            <marquee
              className="bg-gray-300 py-2 px-4 rounded text-black"
              behavior="scroll"
              direction="left"
              scrollamount="5"
            >
              Premier online learning, coding IDE, placement services, community-driven doubt solving, and CV building platform empowering digital skills.
            </marquee>
          </div>
        </div>
      </section>
      <section id="about-app" className="section-p1 text-center py-16 bg-black text-white">
        <h1 className="text-4xl mb-4">
          JOIN US {" "}
          <a href="#" className="text-blue-500">
            NOW
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
        className="section-p1 flex justify-center flex-wrap py-8 bg-black text-white"
      >
        <FeatureBox image="f1.png" title="Online Learning" />
        <FeatureBox image="f2.png" title="Temporal Evaluations" />
        <FeatureBox image="f3.png" title="Affordable" />
        <FeatureBox image="f4.png" title="Placement Support" />
        <FeatureBox image="f5.png" title="Happy Students" />
        <FeatureBox image="f6.png" title="24/7 Support" />
      </section>
      <section id="newsletter" className="section-p1 text-white py-16 bg-gray-900 ">
        <div className="newstext text-center mb-4">
          <h4 className="text-2xl font-bold mb-2">Sign Up For Newsletter</h4>
          <p>
            Get E-mail Updates About Our{" "}
            <span className="font-bold">Special Offers.</span>
          </p>
        </div>
        <div className="form flex justify-center items-center mt-4">
          <input
            type="email"
            placeholder="Your e-mail address"
            className="py-2 px-4 border border-gray-400 rounded mr-2"
          />
          <button className="py-2 px-4 bg-orange-500 text-white rounded hover:bg-blue-600">
            Sign Up
          </button>
        </div>
      </section>
      {/* <Footer/> */}
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