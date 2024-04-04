import React from "react";
import styles from "@/styles/hacker.module.css";

import Image from "next/image";
import yoyo from "../Profile/p.jpg";
import { CiEdit, CiBookmarkCheck } from "react-icons/ci";
import { useState } from "react";

function ProfileHeader({ username, avatar }) {
  return (
    <div className="flex items-center mb-20">
      <Image src={avatar} alt="Avatar" className="w-12 h-12 rounded-full object-cover mr-5" />
      <h1 className="text-2xl">{username}</h1>
    </div>
  );
}

function ProfileInfo({ email, bio, followers, following, isEditing, handleEdit }) {
  return (
    <div className="mb-20">
      <div className="mb-5">
        <label className="font-bold text-gray-500">Email: </label>
        {isEditing ? (
          <input
            type="text"
            value={email}
            onChange={(e) => handleEdit("email", e.target.value)}
            className="w-full py-2 px-3 text-base border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
          />
        ) : (
          <span>{email}</span>
        )}
      </div>
      <div className="mb-5">
        <label className="font-bold text-gray-500">Bio: </label>
        {isEditing ? (
          <textarea
            value={bio}
            onChange={(e) => handleEdit("bio", e.target.value)}
            className="w-full py-2 px-3 text-base border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
          />
        ) : (
          <p>{bio}</p>
        )}
      </div>
      <div className="mb-5">
        <label className="font-bold text-gray-500">Followers: </label>
        <span>{followers}</span>
      </div>
      <div>
        <label className="font-bold text-gray-500">Following: </label>
        <span>{following}</span>
      </div>
    </div>
  );
}

const ActivityFeed = ({ activities }) => (
  <div className="activityFeed bg-gray-800 text-white p-8 rounded-2xl shadow mb-20 w-auto">
    <h2 className="text-xl font-semibold mb-5">My Badges</h2>
    <ul>
      {activities.map((activity, index) => (
        <li key={index}>{activity}</li>
      ))}
    </ul>
  </div>
);

const Certificate = ({ certification }) => (
  <div className="activityFeed bg-gray-800 text-white p-8 rounded-2xl shadow mb-20 w-auto">
    <h2 className="text-xl font-semibold mb-5">Certificate Details</h2>
    <ul>
      {certification.map((cert, index) => (
        <li key={index}>{cert}</li>
      ))}
    </ul>
  </div>
);

const Activity = ({ contact }) => (
  <div className="activityFeed bg-gray-800 text-white p-8 rounded-2xl shadow mb-20 w-auto">
    <h2 className="text-xl font-semibold mb-5">Contact Details</h2>
    <ul>
      {contact.map((detail, index) => (
        <li key={index}>{detail}</li>
      ))}
    </ul>
  </div>
);

const SolvedProblem = ({ problems }) => (
  <div className="activityFeed bg-gray-800 text-white p-8 rounded-2xl shadow mb-20 w-auto">
    <h2 className="text-xl font-semibold mb-5">Solved Problem</h2>
    <ul>
      {problems.map((problem, index) => (
        <li key={index}>{problem}</li>
      ))}
    </ul>
  </div>
);

const ProfilePage = () => {
  const [profileState, setProfileState] = useState({
    username: "deepak kumar",
    email: "dk0133964@gmail.com",
    bio: "web developer",
    followers: 100,
    following: 50,
    activities: ["Solved problem X", "Earned badge Y", "Posted in forum"],
    contact: ["add Your Mail", "+91 7018318078", "india"],
    certification: ["You Have Not Any Certificates yet, Get Certified"],
    solvedProblems: ["Problem A", "Problem B", "Problem C"],
    isEditing: false,
  });

  const handleEdit = (field, value) => {
    setProfileState((prevState) => ({ ...prevState, [field]: value }));
  };

  const toggleEdit = () => {
    setProfileState((prevState) => ({ ...prevState, isEditing: !prevState.isEditing }));
  };

  return (
    <div className={styles.bigContainer}>
      <div className={styles.profilePage}>
        <ProfileHeader username={profileState.username} avatar={yoyo} />

        <button className={styles.edtBtn} onClick={toggleEdit}>
          {profileState.isEditing ? <CiBookmarkCheck /> : <CiEdit />}
        </button>

        <ProfileInfo
          email={profileState.email}
          bio={profileState.bio}
          followers={profileState.followers}
          following={profileState.following}
          isEditing={profileState.isEditing}
          handleEdit={handleEdit}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <ActivityFeed activities={profileState.activities} />
          <Certificate certification={profileState.certification} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <Activity contact={profileState.contact} />
          <SolvedProblem problems={profileState.solvedProblems} />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
