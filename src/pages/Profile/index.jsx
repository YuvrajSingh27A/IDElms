import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebase";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import styles from "@/styles/hacker.module.css"; // Ensure this path is correct for your project structure
import yoyo from "../Profile/p.jpg"; // Ensure this path is correct for your project structure

const ProfileHeader = ({ userData }) => (
  <div className="flex items-center mb-20">
    <Image src={yoyo} alt="Avatar" className="w-12 h-12 rounded-full object-cover mr-5" />
    <h1 className="text-2xl" style={{ color: '#f97718' }}>{userData && userData.username}</h1>
  </div>
);



const ActivityFeed = ({ activities }) => (
  <div className={`${styles.activityFeed} ${styles.glassEffect} bg-gray-800 text-white p-8 rounded-2xl shadow mb-20 w-auto`} style={{ borderColor: '#f97718' }}>
    <h2 className="text-xl font-semibold mb-5" style={{ color: '#f97718' }}>My Badges</h2>
    <ul>
      {activities && activities.map((activity, index) => (
        <li key={index}>{activity}</li>
      ))}
    </ul>
  </div>
);

const Certificate = ({ certification }) => (
  <div className={`${styles.activityFeed} ${styles.glassEffect} bg-gray-800 text-white p-8 rounded-2xl shadow mb-20 w-auto`} style={{ borderColor: '#f97718' }}>
    <h2 className="text-xl font-semibold mb-5" style={{ color: '#f97718' }}>Certificate Details</h2>
    <ul>
      {certification && certification.map((cert, index) => (
        <li key={index}>{cert}</li>
      ))}
    </ul>
  </div>
);

const Activity = ({ contact }) => (
  <div className={`${styles.activityFeed} ${styles.glassEffect} bg-gray-800 text-white p-8 rounded-2xl shadow mb-20 w-auto`} style={{ borderColor: '#f97718' }}>
    <h2 className="text-xl font-semibold mb-5" style={{ color: '#f97718' }}>Contact Details</h2>
    <ul>
      {contact && contact.map((detail, index) => (
        <li key={index}>{detail}</li>
      ))}
    </ul>
  </div>
);

const SolvedProblem = ({ problems }) => (
  <div className={`${styles.activityFeed} ${styles.glassEffect} bg-gray-800 text-white p-8 rounded-2xl shadow mb-20 w-auto`} style={{ borderColor: '#f97718' }}>
    <h2 className="text-xl font-semibold mb-5" style={{ color: '#f97718' }}>Solved Problem</h2>
    <ul>
      {problems && problems.map((problem, index) => (
        <li key={index}>{problem}</li>
      ))}
    </ul>
  </div>
);

const ProfilePage = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    
  });
  const [data,setData] = useState({
    bio: "web developer",
    followers: 100,
    following: 50,
    activities: ["Solved problem X", "Earned badge Y", "Posted in forum"],
    contact: ["add Your Mail", "+91 7018318078", "india"],
    certification: ["You Have Not Any Certificates yet, Get Certified"],
    solvedProblems: ["Problem A", "Problem B", "Problem C"],
  })
  const ProfileInfo = ({ userData }) => (
    <div className="mb-20">
      <div className="mb-5">
        <label className="font-bold text-gray-500">Email: </label>
        <span>{userData && userData.email}</span>
      </div>
      <div className="mb-5">
        <label className="font-bold text-gray-500">userName: </label>
        <span>{userData && userData.displayName}</span>
      </div>
      <div className="mb-5">
        <label className="font-bold text-gray-500">Bio: </label>
        <p>{data && data.bio}</p>
      </div>
      <div className="mb-5">
        <label className="font-bold text-gray-500">Followers: </label>
        <span>{data && data.followers}</span>
      </div>
      <div>
        <label className="font-bold text-gray-500">Following: </label>
        <span>{data && data.following}</span>
      </div>
    </div>
  );
  const [user] = useAuthState(auth);

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        try {
          // Fetch user data from Firestore
          const db = getFirestore();
          const allUsersRef = doc(db, "allUsers", user.uid);
          const userDoc = await getDoc(allUsersRef); 
          if (userDoc.exists()) {
            // If user data exists, set it in state
            setUserData(userDoc.data());
          } else {
            console.log("User data not found");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchUserData();
  }, [user]);

  return (
    <div className={`${styles.bigContainer} ${styles.customBackground}`}>
      <div className={`${styles.profilePage} ${styles.textOnCustomBg}`}>
        <ProfileHeader userData={userData} />
        
        <ProfileInfo
          userData={userData}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <ActivityFeed activities={data.activities} />
          <Certificate certification={data.certification} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <Activity contact={data.contact} />
          <SolvedProblem problems={data.solvedProblems} />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
