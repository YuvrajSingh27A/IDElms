import React from "react";
import Topbar from "@/components/Topbar/Topbar";
import Footer from "@/components/Footer/Footer";

const AdmissionPortalPage = () => {
  return (
    <>
    <Topbar/>
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <div className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Admission Portal</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1">Full Name</label>
            <input type="text" id="name" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" placeholder="Enter your full name" />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1">Email Address</label>
            <input type="email" id="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" placeholder="Enter your email address" />
          </div>
          <div>
            <label htmlFor="phone" className="block mb-1">Phone Number</label>
            <input type="tel" id="phone" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" placeholder="Enter your phone number" />
          </div>
          <div>
            <label htmlFor="program" className="block mb-1">Program of Interest</label>
            <select id="program" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500">
              <option value="">Select a program</option>
              <option value="computer-science">Computer Science</option>
              <option value="engineering">Engineering</option>
              <option value="business">Business</option>
              <option value="healthcare">Healthcare</option>
            </select>
          </div>
          <button type="submit" className="w-full py-3 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Submit Application</button>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default AdmissionPortalPage;
