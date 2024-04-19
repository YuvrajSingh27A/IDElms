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
        
        <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg w-full">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Admission Portal
          </h2>
          <form className="space-y-6">
            {/* Section 1: Personal Information */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">
                Personal Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="dateOfBirth" className="block mb-1">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    id="dateOfBirth"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Enter your date of birth"
                  />
                </div>
                <div>
                  <label htmlFor="gender" className="block mb-1">
                    Gender
                  </label>
                  <select
                    id="gender"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  >
                    <option value="">Select your gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="contactNo" className="block mb-1">
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    id="contactNo"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Enter your contact number"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <label htmlFor="motherName" className="block mb-1">
                    Mother's Name
                  </label>
                  <input
                    type="text"
                    id="motherName"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Enter your mother's name"
                  />
                </div>
                <div>
                  <label htmlFor="fatherName" className="block mb-1">
                    Father's Name
                  </label>
                  <input
                    type="text"
                    id="fatherName"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Enter your father's name"
                  />
                </div>
                <div>
                  <label htmlFor="maritalStatus" className="block mb-1">
                    Marital Status
                  </label>
                  <select
                    id="maritalStatus"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  >
                    <option value="">Select your marital status</option>
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="address" className="block mb-1">
                    Address
                  </label>
                  <textarea
                    id="address"
                    rows="3"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Enter your address"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Section 2: Education */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="collegeName" className="block mb-1">
                    College Name
                  </label>
                  <input
                    type="text"
                    id="collegeName"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Enter your college name"
                  />
                </div>
                <div>
                  <label htmlFor="branch" className="block mb-1">
                    Branch
                  </label>
                  <input
                    type="text"
                    id="branch"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Enter your branch"
                  />
                </div>
                <div>
                  <label htmlFor="course" className="block mb-1">
                    Course
                  </label>
                  <select
                    id="course"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  >
                    <option value="">Select your course</option>
                    <option value="Computer Science">Computer Science</option>
                    <option value="Electrical Engineering">
                      Electrical Engineering
                    </option>
                    <option value="Mechanical Engineering">
                      Mechanical Engineering
                    </option>
                    <option value="Civil Engineering">Civil Engineering</option>
                    {/* Add more courses as needed */}
                  </select>
                </div>
                <div>
                  <label htmlFor="yearOfGraduation" className="block mb-1">
                    Year of Graduation
                  </label>
                  <input
                    type="text"
                    id="yearOfGraduation"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Enter your year of graduation"
                  />
                </div>
                <div>
                  <label htmlFor="collegeAddress" className="block mb-1">
                    College Address
                  </label>
                  <textarea
                    id="collegeAddress"
                    rows="3"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Enter your college address"
                  ></textarea>
                </div>
                <div>
                  <label htmlFor="cgpa" className="block mb-1">
                    CGPA
                  </label>
                  <input
                    type="text"
                    id="cgpa"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Enter your CGPA"
                  />
                </div>
              </div>
            </div>

            {/* Section 3: Experience */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">Experience</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="internships" className="block mb-1">
                    Internships
                  </label>
                  <textarea
                    id="internships"
                    rows="3"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Enter your internships"
                  ></textarea>
                </div>
                <div>
                  <label htmlFor="trainings" className="block mb-1">
                    Trainings
                  </label>
                  <textarea
                    id="trainings"
                    rows="3"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Training"
                  ></textarea>
                </div>
                <div>
                  <label htmlFor="projects" className="block mb-1">
                    Projects
                  </label>
                  <textarea
                    id="projects"
                    rows="3"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Enter your projects"
                  ></textarea>
                </div>
                {/* Add more experience fields as needed */}
              </div>
            </div>

            {/* Section 4: Additional */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">Additional</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nationality" className="block mb-1">
                    Nationality
                  </label>
                  <input
                    type="text"
                    id="nationality"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Enter your nationality"
                  />
                </div>
                <div>
                  <label htmlFor="mode" className="block mb-1">
                    Mode
                  </label>
                  <select
                    id="mode"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  >
                    <option value="">Select mode</option>
                    <option value="online">Online</option>
                    <option value="offline">Offline</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="photograph" className="block mb-1">
                    Photograph
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="signature" className="block mb-1">
                    Signature
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  />
                </div>
                {/* Add more additional fields as needed */}
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdmissionPortalPage;
