import React, { useState } from "react";
import Topbar from "@/components/Topbar/Topbar";
import Footer from "@/components/Footer/Footer";

const AdmissionPortalPage = () => {
  const [profileImage, setProfileImage] = useState(null);

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    setProfileImage(URL.createObjectURL(selectedImage));
  };

  return (
    <>
      <Topbar />
      <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center relative">
        {profileImage && (
          <img src={profileImage} alt="Profile" className="absolute top-0 right-0 h-20 w-20 rounded-full border-4 border-white" />
        )}
        <input type="file" accept="image/*" onChange={handleImageChange} className="absolute top-0 right-0 opacity-0 cursor-pointer h-20 w-20" />
        <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg w-full">
          <h2 className="text-3xl font-bold mb-6 text-center">Admission Portal</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                <label htmlFor="age" className="block mb-1">Age</label>
                <input type="number" id="age" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" placeholder="Enter your age" />
              </div>
              <div>
                <label htmlFor="collegePercentage" className="block mb-1">College Percentage</label>
                <input type="text" id="collegePercentage" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" placeholder="Enter your college percentage" />
              </div>
              <div>
                <label htmlFor="twelfthPercentage" className="block mb-1">12th Grade Percentage</label>
                <input type="text" id="twelfthPercentage" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" placeholder="Enter your 12th grade percentage" />
              </div>
              <div>
                <label htmlFor="tenthPercentage" className="block mb-1">10th Grade Percentage</label>
                <input type="text" id="tenthPercentage" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" placeholder="Enter your 10th grade percentage" />
              </div>
              <div>
                <label htmlFor="cgpa" className="block mb-1">CGPA in College</label>
                <input type="text" id="cgpa" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" placeholder="Enter your CGPA in college" />
              </div>
              <div>
                <label htmlFor="collegeCourse" className="block mb-1">Course in College</label>
                <select id="collegeCourse" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500">
                  <option value="">Select your course</option>
                  <option value="Computer Science">Computer Science</option>
                  <option value="Electrical Engineering">Electrical Engineering</option>
                  <option value="Mechanical Engineering">Mechanical Engineering</option>
                  <option value="Civil Engineering">Civil Engineering</option>
                  {/* Add more options as needed */}
                </select>
              </div>
              <div>
                <label htmlFor="collegeBranch" className="block mb-1">Branch in College</label>
                <select id="collegeBranch" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500">
                  <option value="">Select your branch</option>
                  <option value="Computer Science">Computer Science</option>
                  <option value="Electrical Engineering">Electrical Engineering</option>
                  <option value="Mechanical Engineering">Mechanical Engineering</option>
                  <option value="Civil Engineering">Civil Engineering</option>
                  {/* Add more options as needed */}
                </select>
              </div>
              <div>
                <label htmlFor="address" className="block mb-1">Address</label>
                <textarea id="address" rows="3" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" placeholder="Enter your address"></textarea>
              </div>
              <div>
                <label htmlFor="previousEducation" className="block mb-1">Previous Education</label>
                <textarea id="previousEducation" rows="3" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" placeholder="Enter your previous education details"></textarea>
              </div>
              <div>
                <label htmlFor="additionalInfo" className="block mb-1">Additional Information</label>
                <textarea id="additionalInfo" rows="3" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" placeholder="Any additional information you'd like to provide"></textarea>
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
            </div>
            <button type="submit" className="w-full py-3 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Submit Application</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdmissionPortalPage;
