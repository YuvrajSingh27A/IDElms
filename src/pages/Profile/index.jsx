import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebase";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import styles from "@/styles/hacker.module.css";
import yoyo from "../Profile/p.jpg";
import Topbar from "@/components/Topbar/Topbar";
import Footer from "@/components/Footer/Footer";

// Streak Calendar Component
const StreakCalendar = ({ streak }) => {
  const [markedDates, setMarkedDates] = useState([]);
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  // Function to mark the current date
  const markCurrentDate = () => {
    const today = new Date();
    const formattedDate = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;
    setMarkedDates([formattedDate]);
  };

  useEffect(() => {
    markCurrentDate();
  }, []);

  return (
    <>
      
      <div className={`${styles.streakCalendar} absolute top-0 right-0 mr-48 mt-32 bg-black text-white p-4 rounded-lg shadow-lg z-10`}>
        <div className="flex justify-between mb-2">
          <span>Streak:</span>
          <span>{streak}</span>
        </div>
        <div className="grid grid-cols-7 gap-1">
          <span className="text-gray-400">S</span>
          <span className="text-gray-400">M</span>
          <span className="text-gray-400">T</span>
          <span className="text-gray-400">W</span>
          <span className="text-gray-400">T</span>
          <span className="text-gray-400">F</span>
          <span className="text-gray-400">S</span>
          {Array.from({ length: daysInMonth }, (_, i) => {
            const day = i + 1;
            const isMarked = markedDates.includes(`${currentYear}-${(currentMonth + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`);
            return (
              <span key={day} className={`text-center relative ${isMarked ? 'bg-green-500' : ''}`}>
                {day}
              </span>
            );
          })}
        </div>
      </div>
    </>
  );
};

// Profile Header Component
const ProfileHeader = ({ userData, streak }) => (
  <div className="relative">
    <StreakCalendar streak={streak} />
    <div className="flex items-center mb-20">
      <Image src={yoyo} alt="Avatar" className="w-12 h-12 rounded-full object-cover mr-5" />
      <h1 className="text-2xl" style={{ color: '#f97718' }}>{userData && userData.username}</h1>
    </div>
  </div>
);

// ActivityFeed Component
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

// Certificate Component
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

// Activity Component
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

// SolvedProblem Component
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
  const [streak, setStreak] = useState(0);

  const updateStreak = () => {
    setStreak((prevStreak) => prevStreak + 1);
  };

  const [data, setData] = useState({
    bio: "web developer",
    followers: 100,
    following: 50,
    activities: ["Solved problem X", "Earned badge Y", "Posted in forum"],
    contact: ["add Your Mail", "+91 7018318078", "india"],
    certification: ["You Have Not Any Certificates yet, Get Certified"],
    solvedProblems: ["Problem A", "Problem B", "Problem C"],
  });

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
          const db = getFirestore();
          const allUsersRef = doc(db, "allUsers", user.uid);
          const userDoc = await getDoc(allUsersRef);
          if (userDoc.exists()) {
            setUserData(userDoc.data());
            updateStreak();
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
    <>
      <Topbar />
      <div className={`${styles.bigContainer} ${styles.customBackground}`}>
        <div className={`${styles.profilePage} ${styles.textOnCustomBg}`}>
          <ProfileHeader userData={userData} streak={streak} />
          <ProfileInfo userData={userData} />
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
      <Footer />
    </>
  );
};

export default ProfilePage;
